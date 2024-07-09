 const tabs = document.querySelectorAll('.weui-navbar__item')
    const navbar = document.querySelector('.weui-navbar')
    const searchInput = document.querySelector('#search_input')
    const searchBar = document.querySelector('.weui-search-bar')
    // 优化了内存

    // 
    document
        .querySelector('.weui-search-bar__label')
        .addEventListener('click', function() {
            searchBar.classList.add('weui-search-bar_focusing')
        })
    searchInput.addEventListener('focus', function(event) {
        console.log('聚焦了')
    })
    // tabs[0].addEventListener('click', function(event) {
    //     console.log('1');
    // })
    navbar.addEventListener('click', function(event) {
        const target = event.target
        if(target.nodeName == 'A') {
            event.preventDefault();
            if (target.classList.contains('weui-bar__item_on')) {    
                return;
            }
            document
                .querySelector('.weui-bar__item_on')
                .classList
                .remove('weui-bar__item_on')
            target.classList.add('weui-bar__item_on')
        }
        // console.log('2');
        // if (event.target.)
    });

    // tabs.addEventListener('click', function() {
    //     console.log('-----');
    // })
    // 同步
    // for (let i = 0; i < tabs.length; i++) {
    //     // 异步...
    //     // (function(i) {
    //         tabs[i].addEventListener('click', function() {
    //             if (this.classList.contains('weui-bar__item_on')) {
    //                 console.log('//////////')
    //                 return;
    //             }
    //             // console.log(i);
    //             document
    //                 .querySelector('.weui-bar__item_on')
    //                 .classList
    //                 .remove('weui-bar__item_on')
    //             this.classList.add('weui-bar__item_on')
    //         })
    //     // })(i)
        
    // }