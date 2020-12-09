window.$ = window.jQuery = function (selectorOrArrayOrTemplate) {
    let elements;
    if (typeof selectorOrArrayOrTemplate === "string") {
        if (selectorOrArrayOrTemplate[0] === "<") {
            // 创建 div
            elements = [createElement(selectorOrArrayOrTemplate)];
        } else {
            // 查找 div
            elements = document.querySelectorAll(selectorOrArrayOrTemplate);
        }
    } else if (selectorOrArrayOrTemplate instanceof Array) {
        elements = selectorOrArrayOrTemplate;
    }

    function createElement(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    }
    const api = Object.create(jQuery.prototype)
    Object.assign(api, {
        elements: elements,
        oldApi: selectorOrArrayOrTemplate.oldApi,
    })
    return api

}
jQuery.fn = jQuery.prototype = { //避免浪费内存，把相同方法都放在原型对象中
    constructor: jQuery,
    jquery: true,
    get(index) {
        return this.elements[index];
    },
    appendTo(node) {
        if (node instanceof Element) {
            this.each(el => node.appendChild(el));
        } else if (node.jquery === true) {
            this.each(el => node.get(0).appendChild(el));
        }
    },
    append(children) {
        if (children instanceof Element) {
            this.get(0).appendChild(children);
        } else if (children instanceof HTMLCollection) {
            for (let i = 0; i < children.length; i++) {
                this.get(0).appendChild(children[i]);
            }
        } else if (children.jquery === true) {
            children.each(node => this.get(0).appendChild(node));
        }
    },
    each(fn) {
        for (let i = 0; i < this.elements.length; i++) {
            fn.call(null, this.elements[i], i)
        }
        return this
    },
    addClass(className) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className)
        }
        return this //调用这个函数的就是api this指向的就是api 相当于返回api 执行链式操作
    },
    find(selector) {
        let arr = []
        for (let i = 0; i < this.elements.length; i++) {
            arr = arr.concat(Array.from(this.elements[i].querySelectorAll(selector)))
        }
        //return arr //返回arr就无法进行链式操作
        arr.oldApi = this //记录上一个上下文环境（api） 调用jquery函数的对象（this）会组成一个上下文环境，
        return jQuery(arr) //得到一个新的jquery对象 会产生一个新的上下文环境
    },
    end() { //返回上一个环境
        return this.oldApi
    },
    parent() {
        let array = []
        this.each((node) => {
            if (array.indexOf(node.parentNode) === -1) {
                array.push(node.parentNode)
            }
        })
        return jQuery(array)

    },
    children() {
        let array = []
        this.each((node) => {
            if (array.indexOf(node.children) === -1) {
                //array.push(node.children) //这样push会是二维数组
                array.push(...node.children)
            }
        })
        return jQuery(array)
    },
    print() {
        console.log(this.elements);
    },
    on(eventType, fn) {
        this.each((node) => {
            node.addEventListener(eventType, fn)
        })

    }

}