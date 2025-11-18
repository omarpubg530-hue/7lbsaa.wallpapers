document.addEventListener('DOMContentLoaded', () => {
    // --- إعدادات الخلفية المتحركة ---
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50
            },
            "color": {
                "value": "#555"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#555",
                "opacity": 0.4
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            }
        }
    });

    // --- قاعدة بيانات الخلفيات المحدثة (تم إضافة الصور الجديدة) ---
    const wallpapersDB = [// خلفيات الكمبيوتر (Desktop)
    {
        id: 'desk-new-1',
        title: ' ',
        category: 'desktop',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/568782058_1477629213290867_5728060755534515773_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8Lzrn0DBRUMQ7kNvwGU32Di&_nc_oc=AdnuXRSC1FO7bYigqv8SX_2Lc6t0WtDdjWTlE7s4eXtwz2BWPvGyr2f-lJq7SreiJ6w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wF9Ui6SB7gJLyVojipHLOAVRatccjZcYc_buAFs98ihpg&oe=693CB413',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/568782058_1477629213290867_5728060755534515773_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8Lzrn0DBRUMQ7kNvwGU32Di&_nc_oc=AdnuXRSC1FO7bYigqv8SX_2Lc6t0WtDdjWTlE7s4eXtwz2BWPvGyr2f-lJq7SreiJ6w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wF9Ui6SB7gJLyVojipHLOAVRatccjZcYc_buAFs98ihpg&oe=693CB413'
    }, {
        id: 'desk-new-2',
        title: '  تحت المطر',
        category: 'desktop',
        tags: ['', '', 'مطر', 'حزين'],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/495264830_1883391642446257_48299217903690692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=upjGFh3vRYYQ7kNvwECAq2F&_nc_oc=Adny6HuEUk9OEv_6IsyNYQn-kRtDJ36d9vXnSgS8fL5QzjX_ot44KI63UHLWdWkin6o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wE34ramZZ8mawpA6v_zXeCZ7wDFufvkgn84tDsImyeIAw&oe=693CB586',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/495264830_1883391642446257_48299217903690692_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=upjGFh3vRYYQ7kNvwECAq2F&_nc_oc=Adny6HuEUk9OEv_6IsyNYQn-kRtDJ36d9vXnSgS8fL5QzjX_ot44KI63UHLWdWkin6o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wE34ramZZ8mawpA6v_zXeCZ7wDFufvkgn84tDsImyeIAw&oe=693CB586'
    }, {
        id: 'desk-new-3',
        title: 'قطة وسط الزهور',
        category: 'desktop',
        tags: ['قطة', 'حيوانات', 'زهور', 'لطيف'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494575648_1016947937290778_6051285332563330523_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cMOEM2sTJ-oQ7kNvwHqJvp6&_nc_oc=AdlCE49c4NImpHCt_BMpOVxYrraqPpno3918xnKGR19kf3qp6rrpoOnLRBArvPIO8wY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFNYulakMtHbFx2b-7lfoN9Guwul2bHRPFRvbFjD5qwFw&oe=693CD2F9',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494575648_1016947937290778_6051285332563330523_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cMOEM2sTJ-oQ7kNvwHqJvp6&_nc_oc=AdlCE49c4NImpHCt_BMpOVxYrraqPpno3918xnKGR19kf3qp6rrpoOnLRBArvPIO8wY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFNYulakMtHbFx2b-7lfoN9Guwul2bHRPFRvbFjD5qwFw&oe=693CD2F9'
    }, {
        id: 'desk-new-4',
        title: 'ملاك ',
        category: 'desktop',
        tags: ['', 'ملاك', 'سماء', 'فن'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/495046394_1187993546403393_1654260886957298291_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Itza-vpwla4Q7kNvwGm7gmt&_nc_oc=Admn_GQ0mRvcYT1OgU57AxwOOfljdcnOixlFmlYqed3oVK8AnAJ9ChDhnjsuKHvAr0w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFE-Oiqx2tLk7YaKcvYP11KyFUG1A0PrZ6wzbHULiyZ5A&oe=693CC3F9',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/495046394_1187993546403393_1654260886957298291_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Itza-vpwla4Q7kNvwGm7gmt&_nc_oc=Admn_GQ0mRvcYT1OgU57AxwOOfljdcnOixlFmlYqed3oVK8AnAJ9ChDhnjsuKHvAr0w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFE-Oiqx2tLk7YaKcvYP11KyFUG1A0PrZ6wzbHULiyZ5A&oe=693CC3F9'
    }, {
        id: 'desk-new-5',
        title: '  ',
        category: 'desktop',
        tags: ['', 'نوم', '', 'هدوء'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494578060_1220961305810168_8685989256474771959_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UlBq5vBMow0Q7kNvwHWiAFf&_nc_oc=Adnb7Z0cweJKjuXBsLqe8UrhO28n0RHxp0_OGEBDE247v15BpLquzgdF-LZnZB_v5P4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHxPwNYyTi6Thk4EC5YwAXD2EBVdNdY6WzRebhxAPPlZA&oe=693CBA62',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494578060_1220961305810168_8685989256474771959_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UlBq5vBMow0Q7kNvwHWiAFf&_nc_oc=Adnb7Z0cweJKjuXBsLqe8UrhO28n0RHxp0_OGEBDE247v15BpLquzgdF-LZnZB_v5P4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHxPwNYyTi6Thk4EC5YwAXD2EBVdNdY6WzRebhxAPPlZA&oe=693CBA62'
    }, {
        id: 'desk-new-6',
        title: '  مع فراشات',
        category: 'desktop',
        tags: ['', '', 'فراشات', 'فن'],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/528035703_4185978934968651_614432039096875556_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=r9AxYlFbtEgQ7kNvwGdDIVP&_nc_oc=Adk-GcZ5WYaNFonrYV6kEN78UnRso1FR-n0bAG5VEQdWxPnzumrqJuL-BpbtYpX4bS4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wGc_WkjwDRWVPVT4K0QtN00EnV3ZeviVHVCFNU_Pd2lYg&oe=693CC149',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/528035703_4185978934968651_614432039096875556_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=r9AxYlFbtEgQ7kNvwGdDIVP&_nc_oc=Adk-GcZ5WYaNFonrYV6kEN78UnRso1FR-n0bAG5VEQdWxPnzumrqJuL-BpbtYpX4bS4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wGc_WkjwDRWVPVT4K0QtN00EnV3ZeviVHVCFNU_Pd2lYg&oe=693CC149'
    }, {
        id: 'desk-new-7',
        title: 'مقاتل ',
        category: 'desktop',
        tags: ['', 'مقاتل', 'خصية'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/566344951_1884196302309629_7613317703451575226_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=szjuk7azeqEQ7kNvwFalLOa&_nc_oc=AdlffSq5vkDS5RRblPoxC759fTxNoz8Slvni91PoFrTd9DxmVXvMrjLjXgfNsqAr5kU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wE1L5uP2jIaJfG2fE5O-8vwxHcRjTZIVEQxx1vyLjKPtA&oe=693CB9CD',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/566344951_1884196302309629_7613317703451575226_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=szjuk7azeqEQ7kNvwFalLOa&_nc_oc=AdlffSq5vkDS5RRblPoxC759fTxNoz8Slvni91PoFrTd9DxmVXvMrjLjXgfNsqAr5kU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wE1L5uP2jIaJfG2fE5O-8vwxHcRjTZIVEQxx1vyLjKPtA&oe=693CB9CD'
    }, {
        id: 'desk-new-8',
        title: 'وجه  ',
        category: 'desktop',
        tags: ['', '', 'وجه', 'فن'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/513183417_1406334467267019_3352869161491600918_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2KWhBTdM_o8Q7kNvwFegE5A&_nc_oc=AdnBD2RSxeYSBGxWAvd8-WB4jSpeVYvykXg_bk6EOIfC0EHDEXKyz2CUHXg04XW4MJo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHGh3kFLac53MUb76BORkzYxqx91EUq5gdTabQ5S8UxDg&oe=693CB49C',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/513183417_1406334467267019_3352869161491600918_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2KWhBTdM_o8Q7kNvwFegE5A&_nc_oc=AdnBD2RSxeYSBGxWAvd8-WB4jSpeVYvykXg_bk6EOIfC0EHDEXKyz2CUHXg04XW4MJo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHGh3kFLac53MUb76BORkzYxqx91EUq5gdTabQ5S8UxDg&oe=693CB49C'
    }, {
        id: 'desk-new-9',
        title: '      ',
        category: 'desktop',
        tags: ['', '', 'مدينة', 'ليل'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/519140974_1138968484950530_7188348346465394576_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=V7siRd2Uab0Q7kNvwGIDmJn&_nc_oc=Adm5GgmL7M51ckTedR_5NfRyhwlCbfF6euRdmKYRsBApLo2JloB7Dnfhz6YzVn-6i1w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEL6W5oVAPLNFP6cX8hAv7Xs5UX8uIqWPWP3OP2unDB0Q&oe=693CD8CA',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/519140974_1138968484950530_7188348346465394576_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=V7siRd2Uab0Q7kNvwGIDmJn&_nc_oc=Adm5GgmL7M51ckTedR_5NfRyhwlCbfF6euRdmKYRsBApLo2JloB7Dnfhz6YzVn-6i1w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEL6W5oVAPLNFP6cX8hAv7Xs5UX8uIqWPWP3OP2unDB0Q&oe=693CD8CA'
    }, {
        id: 'desk-new-10',
        title: '',
        category: 'desktop',
        tags: ['', '', 'سماء', 'غيوم'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494821148_984865693816438_1160981656177199918_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gBdhUo_pFZwQ7kNvwEnRiic&_nc_oc=AdlhLb-4MOLbrEndPgcagPCri9Mf2nR2pHnd6D3iSAhi_6NSvGOLO54136iVvV6eqvU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGofcLXosk53IzHQNtLO_TdmubZnRUvcUPTtKGaRj97Rg&oe=693CADF8',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494821148_984865693816438_1160981656177199918_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gBdhUo_pFZwQ7kNvwEnRiic&_nc_oc=AdlhLb-4MOLbrEndPgcagPCri9Mf2nR2pHnd6D3iSAhi_6NSvGOLO54136iVvV6eqvU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGofcLXosk53IzHQNtLO_TdmubZnRUvcUPTtKGaRj97Rg&oe=693CADF8'
    }, {
        id: 'desk-new-11',
        title: ';',
        category: 'desktop',
        tags: ['أن'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582215447_1402171204598673_8403165348195596410_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4jdDIL4p82MQ7kNvwGm5HX-&_nc_oc=Adk8xqEGAEko9Fv92NSk8LxyHEcO07TFHMHh9Et0udFZ0P_f1sLAm777TVhhKP-PJMs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGe8JEcR8d26dgr8fuanb56_yDGtJokBtA29XZkSEaciQ&oe=69439051',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582215447_1402171204598673_8403165348195596410_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4jdDIL4p82MQ7kNvwGm5HX-&_nc_oc=Adk8xqEGAEko9Fv92NSk8LxyHEcO07TFHMHh9Et0udFZ0P_f1sLAm777TVhhKP-PJMs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGe8JEcR8d26dgr8fuanb56_yDGtJokBtA29XZkSEaciQ&oe=69439051'
    }, {
        id: 'desk-new-12',
        title: '',
        category: 'desktop',
        tags: ['', '', 'سماء', 'غيوم'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582228049_818479711053299_4502194637807665369_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=W98inGP5BkcQ7kNvwERONFz&_nc_oc=AdkDHwD_tjGiRdluVoXxfrowSe0RtvISeiaJ7KaAv45FvOptjiPXMN9cq6_p4CGsWKY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFkYgdBUOnKfgZDABpPeUFv1OJ6ogsZTz55hw2hjbm-WQ&oe=69438E64',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582228049_818479711053299_4502194637807665369_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=W98inGP5BkcQ7kNvwERONFz&_nc_oc=AdkDHwD_tjGiRdluVoXxfrowSe0RtvISeiaJ7KaAv45FvOptjiPXMN9cq6_p4CGsWKY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFkYgdBUOnKfgZDABpPeUFv1OJ6ogsZTz55hw2hjbm-WQ&oe=69438E64'

    }, // خلفيات الموبايل (Mobile)
    {
        id: 'mob-new-1',
        title: '  وشمس',
        category: 'mobile',
        tags: ['', '', 'غروب', 'شمس'],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/541615596_1443650166899599_5265012858160098741_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=L3lORuI6J_8Q7kNvwHXJR5L&_nc_oc=Adk0VKbAQ2W5h8oqUNMNj3lAs1qDxRx72ZbVhle0bPyw7nvsPhA9o-qWZblUa7mB5Tw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wE8TS7Wa7-win7zCDcWjvLtwkr15kjIbZs2hWfGMfOFIw&oe=693CDC43',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/541615596_1443650166899599_5265012858160098741_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=L3lORuI6J_8Q7kNvwHXJR5L&_nc_oc=Adk0VKbAQ2W5h8oqUNMNj3lAs1qDxRx72ZbVhle0bPyw7nvsPhA9o-qWZblUa7mB5Tw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wE8TS7Wa7-win7zCDcWjvLtwkr15kjIbZs2hWfGMfOFIw&oe=693CDC43'
    }, {
        id: 'mob-new-2',
        title: 'منظر طبيعي',
        category: 'mobile',
        tags: ['طبيعة', 'سماء', 'غيوم', 'هدوء'],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/494821078_1127382832488735_911067986303227159_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Ix8KIa2gRKoQ7kNvwFsf4BM&_nc_oc=AdlXWqH347cE6CcbP75K-aQkvtwjxEPtkDm94Mk23Caz0rXs4gpZ9wTd9DC9JyVySoo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHoEfu6idBtm95TDApR7sorDYbhyo4El1QgR3KLzxkPKA&oe=693CDE03',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/494821078_1127382832488735_911067986303227159_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Ix8KIa2gRKoQ7kNvwFsf4BM&_nc_oc=AdlXWqH347cE6CcbP75K-aQkvtwjxEPtkDm94Mk23Caz0rXs4gpZ9wTd9DC9JyVySoo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHoEfu6idBtm95TDApR7sorDYbhyo4El1QgR3KLzxkPKA&oe=693CDE03'
    }, {
        id: 'mob-new-3',
        title: '  حزينة',
        category: 'mobile',
        tags: ['', '', 'حزن', 'مطر'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/495046573_1746664715920177_3645639322035539147_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4FpuJch-oGwQ7kNvwGh5EFf&_nc_oc=AdmjYMpDbBDQ5IJSwvaCUjTC1V1RH7P1wEUJ7UK1cc_kI6lZYjUqXEDLR4_q78iMWWY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wG0Z-qChrzyZTKuQuudv03T4BQo7ZbL5euLzYfOuTzbuQ&oe=693CD8E9',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/495046573_1746664715920177_3645639322035539147_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4FpuJch-oGwQ7kNvwGh5EFf&_nc_oc=AdmjYMpDbBDQ5IJSwvaCUjTC1V1RH7P1wEUJ7UK1cc_kI6lZYjUqXEDLR4_q78iMWWY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wG0Z-qChrzyZTKuQuudv03T4BQo7ZbL5euLzYfOuTzbuQ&oe=693CD8E9'
    }, {
        id: 'mob-new-4',
        title: 'قطة وسماء',
        category: 'mobile',
        tags: ['قطة', 'حيوانات', 'سماء', 'غيوم'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494575658_688944770354448_3236477024746790963_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Pv1hLGODNB8Q7kNvwG-hdKB&_nc_oc=AdmNEaAK4SiC58ySmtTVlRWcLDUPEPkkyvnrb00QPeMIymO06GscOhesKZ7GJv97fx0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEvCkTrJ-tAJLZJysAldFTzw_C973PvR0VFnYNr2R_MwA&oe=693CAB23',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494575658_688944770354448_3236477024746790963_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Pv1hLGODNB8Q7kNvwG-hdKB&_nc_oc=AdmNEaAK4SiC58ySmtTVlRWcLDUPEPkkyvnrb00QPeMIymO06GscOhesKZ7GJv97fx0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEvCkTrJ-tAJLZJysAldFTzw_C973PvR0VFnYNr2R_MwA&oe=693CAB23'
    }, {
        id: 'mob-new-5',
        title: '  وشجرة',
        category: 'mobile',
        tags: ['', '', 'طبيعة', 'شجرة'],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/543317653_2119877468421736_5809113627846997117_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TcSPxA7FZ7wQ7kNvwEjr8Cy&_nc_oc=AdksovYZX0y67N7yKOHDZU72oRhNbBrEOdJ2f6u1W9lZGgEObqoB9OFve70d4ZQu8vM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wEUC5XH_0BkDAskTihsXmVx15ATQkvbIM_7xFsrRXF-3g&oe=693CAB4F',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/543317653_2119877468421736_5809113627846997117_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TcSPxA7FZ7wQ7kNvwEjr8Cy&_nc_oc=AdksovYZX0y67N7yKOHDZU72oRhNbBrEOdJ2f6u1W9lZGgEObqoB9OFve70d4ZQu8vM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wEUC5XH_0BkDAskTihsXmVx15ATQkvbIM_7xFsrRXF-3g&oe=693CAB4F'
    }, {
        id: 'mob-new-6',
        title: 'شخصية ',
        category: 'mobile',
        tags: ['', 'شخصية', 'فن', 'رسم'],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/535040887_776040721461384_8378258397230928048_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JCdLOURENjcQ7kNvwGdyB26&_nc_oc=Adlg1XXcNkDduxuha6Ju1lf8D_MbOifaMKwGIJ-aXW_XB3wj2RLBWsDewCAk95sMiYo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wFy5AbsPgn0hJvqFf2lkr9StIMgiZTVPs-lzVaAPJ3lwA&oe=693CD4CF',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/535040887_776040721461384_8378258397230928048_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JCdLOURENjcQ7kNvwGdyB26&_nc_oc=Adlg1XXcNkDduxuha6Ju1lf8D_MbOifaMKwGIJ-aXW_XB3wj2RLBWsDewCAk95sMiYo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wFy5AbsPgn0hJvqFf2lkr9StIMgiZTVPs-lzVaAPJ3lwA&oe=693CD4CF'
    }, {
        id: 'mob-new-7',
        title: 'قطة لطيفة',
        category: 'mobile',
        tags: ['قطة', 'حيوانات', 'لطيف', 'فن'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494358557_1438900427554701_7449179870366843581_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rZKTLrktLtwQ7kNvwFdXrS7&_nc_oc=AdnM7vS5b8bz2FxzXuyzuRb7yEBvNddfUIxPTTvmJEvz-MbUfeB08NmW1OhbT8pkOns&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGHJJ7RDi5fpbOD6vcWegclZ7fnadB7PLpKIsGln62vXQ&oe=693CAB04',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494358557_1438900427554701_7449179870366843581_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rZKTLrktLtwQ7kNvwFdXrS7&_nc_oc=AdnM7vS5b8bz2FxzXuyzuRb7yEBvNddfUIxPTTvmJEvz-MbUfeB08NmW1OhbT8pkOns&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGHJJ7RDi5fpbOD6vcWegclZ7fnadB7PLpKIsGln62vXQ&oe=693CAB04'
    }, {
        id: 'mob-new-8',
        title: '  ',
        category: 'mobile',
        tags: ['', '', 'نوم', 'هدوء'],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/476588860_971811794907528_4736439438274530382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JAHOi3tTuuAQ7kNvwGC1Ux0&_nc_oc=AdkRYoHcnyaLUFCKS2gAvpOdKuzbDk8MUTFo0h1xA6r2Y6GvfUNIeigfUvGFFzocDxQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHPUvKnCZIG2p-xmacqEdKEkcW-rB1A4C_zJP_u8zc99A&oe=693CD90D',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/476588860_971811794907528_4736439438274530382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JAHOi3tTuuAQ7kNvwGC1Ux0&_nc_oc=AdkRYoHcnyaLUFCKS2gAvpOdKuzbDk8MUTFo0h1xA6r2Y6GvfUNIeigfUvGFFzocDxQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHPUvKnCZIG2p-xmacqEdKEkcW-rB1A4C_zJP_u8zc99A&oe=693CD90D'
    }, {
        id: 'mob-new-9',
        title: 'شخصية  قوية',
        category: 'mobile',
        tags: ['', 'قوة', 'شخصية', 'فن'],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/566024143_1357749595799895_4759288014233618543_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RE1fXzc00PUQ7kNvwGt7G7j&_nc_oc=AdnU4SvrkYnAkE5EfwkyNmJw0HAElAJVvdFrm1CWcOG4Bp-9-4D52dxdGeWnFhkcNT0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHX3NGa3atLieZ1jiu7n9U_Xf57FntHwQ5qRmwVKmcxSg&oe=693CBA97',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/566024143_1357749595799895_4759288014233618543_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RE1fXzc00PUQ7kNvwGt7G7j&_nc_oc=AdnU4SvrkYnAkE5EfwkyNmJw0HAElAJVvdFrm1CWcOG4Bp-9-4D52dxdGeWnFhkcNT0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHX3NGa3atLieZ1jiu7n9U_Xf57FntHwQ5qRmwVKmcxSg&oe=693CBA97'
    }, // ⚽ الصور الرياضية (بدون أسماء لاعبين)
    {
        id: 'mob-new-10',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/528387631_777814014699547_4628472306640340413_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=wcNn_qzJQAoQ7kNvwGzFvdu&_nc_oc=AdnyvMqd1WuocI8M2pMNPnm825_j3x8exCNnnBWH-UIaZUaYHpZ0s0q-y65Ey2M_ZR8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHil5s8qGQ1fkFXXT7SOv2AtFJKdRgzcZl-p2UG0w25mw&oe=6940CC23',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/528387631_777814014699547_4628472306640340413_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=wcNn_qzJQAoQ7kNvwGzFvdu&_nc_oc=AdnyvMqd1WuocI8M2pMNPnm825_j3x8exCNnnBWH-UIaZUaYHpZ0s0q-y65Ey2M_ZR8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHil5s8qGQ1fkFXXT7SOv2AtFJKdRgzcZl-p2UG0w25mw&oe=6940CC23'
    }, {
        id: 'mob-new-11',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/520874270_589797450630976_7787252219748746179_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xkQfxHxX1toQ7kNvwEZ4Ahp&_nc_oc=AdkMVevna0-2QLdCWFfvgGLyuCUwO2KHIduDMNVk-jPAKlhd97PnsOEn4A6y0YXgcY0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wH3UaMhHtzPXGivp5T9-QyWIYUMbcn5FT8aUT656uAdRg&oe=6940D0A4',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/520874270_589797450630976_7787252219748746179_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xkQfxHxX1toQ7kNvwEZ4Ahp&_nc_oc=AdkMVevna0-2QLdCWFfvgGLyuCUwO2KHIduDMNVk-jPAKlhd97PnsOEn4A6y0YXgcY0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wH3UaMhHtzPXGivp5T9-QyWIYUMbcn5FT8aUT656uAdRg&oe=6940D0A4'
    }, {
        id: 'mob-new-12',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/496514786_716611864360554_192684045514959381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-IIKR9kxd7YQ7kNvwHCHIRk&_nc_oc=AdkjLJpvGT8yoFqguRfkRWeNHgqyaKYD4eoBJTvGv_PGklquU9H4FssBOaw13RV_no8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wEmJZY_Qg4yMr6dZnZZmIYY7s5Vm94M1wovzRkLX361Yw&oe=6940D530',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/496514786_716611864360554_192684045514959381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-IIKR9kxd7YQ7kNvwHCHIRk&_nc_oc=AdkjLJpvGT8yoFqguRfkRWeNHgqyaKYD4eoBJTvGv_PGklquU9H4FssBOaw13RV_no8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wEmJZY_Qg4yMr6dZnZZmIYY7s5Vm94M1wovzRkLX361Yw&oe=6940D530'
    }, {
        id: 'mob-new-13',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/496624424_1011732521044010_4373889347936058580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=mpfl_dW05kwQ7kNvwFfdTof&_nc_oc=AdnE2z0RmjbpmS1Z0IzYXCtKVw2EYw_JT_abYWUAPvcGyrRjnankr9j1dCXs__IXS1Y&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFjXtJHYZvAJaW9ecMBvquifu0QZkVR_spxcA5O4ExfGw&oe=6940CF68',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/496624424_1011732521044010_4373889347936058580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=mpfl_dW05kwQ7kNvwFfdTof&_nc_oc=AdnE2z0RmjbpmS1Z0IzYXCtKVw2EYw_JT_abYWUAPvcGyrRjnankr9j1dCXs__IXS1Y&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFjXtJHYZvAJaW9ecMBvquifu0QZkVR_spxcA5O4ExfGw&oe=6940CF68'
    }, {
        id: 'mob-new-14',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/496509152_2482972055394585_8080962305163592375_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MFfqtezAhoEQ7kNvwGXFcGf&_nc_oc=AdlDrELoA19wkzo7R4Wz4foQzp64n5SfmxwLoTaPUAtTrZQzy29qacBIECBn4yNsqTw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wGo-YXnaKep8J3JQQehrdJHj1AZsCYCwHu3YYyL2RDaYQ&oe=6940A926',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/496509152_2482972055394585_8080962305163592375_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MFfqtezAhoEQ7kNvwGXFcGf&_nc_oc=AdlDrELoA19wkzo7R4Wz4foQzp64n5SfmxwLoTaPUAtTrZQzy29qacBIECBn4yNsqTw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wGo-YXnaKep8J3JQQehrdJHj1AZsCYCwHu3YYyL2RDaYQ&oe=6940A926'
    }, {
        id: 'mob-new-15',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/518976978_718475677638220_8399136390928218573_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=uWnFLTPKfrIQ7kNvwEeQzYL&_nc_oc=AdkyUToW-cl_023Yd3Rh4t2JbcOrSy1cab5qXTdeKFUsoRiEUC0Y3bWR-JcPX6WVqN8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFxSOhzqcJLwyVjVBk2jZnppnON0Xv2d5gh--2QIWKj7Q&oe=6940BCD9',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/518976978_718475677638220_8399136390928218573_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=uWnFLTPKfrIQ7kNvwEeQzYL&_nc_oc=AdkyUToW-cl_023Yd3Rh4t2JbcOrSy1cab5qXTdeKFUsoRiEUC0Y3bWR-JcPX6WVqN8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFxSOhzqcJLwyVjVBk2jZnppnON0Xv2d5gh--2QIWKj7Q&oe=6940BCD9'
    }, // ⚽ الصور الرياضية الجديدة (بدون أسماء لاعبين)
    {
        id: 'mob-new-16',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/491005422_1199731531796161_1662019116996550050_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Fqg90S0sKAkQ7kNvwGKGumE&_nc_oc=AdmXWEtruTqHLrd5LBrIcqZDsDKCFbciyYfzvjjPBhMrMr2vTEbzdkmOKjTXUEfuMFo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wFQ1iv5pP04TUmNw81NRo46scUYYgWoD0LdzfoVB0K1Mg&oe=6940A7DD',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/491005422_1199731531796161_1662019116996550050_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Fqg90S0sKAkQ7kNvwGKGumE&_nc_oc=AdmXWEtruTqHLrd5LBrIcqZDsDKCFbciyYfzvjjPBhMrMr2vTEbzdkmOKjTXUEfuMFo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wFQ1iv5pP04TUmNw81NRo46scUYYgWoD0LdzfoVB0K1Mg&oe=6940A7DD'
    }, {
        id: 'mob-new-17',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/489730769_667478829373530_8894023224207333416_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=J4maJP6XxokQ7kNvwFB24vT&_nc_oc=Adnce-4L_gb9D7tXuc7rO-1mzKEzobcLWrSQhTAw-VpuKAzP8Rwg3lxh1OXvV59_n1w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEaOtsZiPFAX12T2NEQ7KY2Eq9-EAeZlfZwOFJ15Ux32Q&oe=6940CDEA',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/489730769_667478829373530_8894023224207333416_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=J4maJP6XxokQ7kNvwFB24vT&_nc_oc=Adnce-4L_gb9D7tXuc7rO-1mzKEzobcLWrSQhTAw-VpuKAzP8Rwg3lxh1OXvV59_n1w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEaOtsZiPFAX12T2NEQ7KY2Eq9-EAeZlfZwOFJ15Ux32Q&oe=6940CDEA'
    }, {
        id: 'mob-new-18',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494688081_1825128998065478_8345545497786184987_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BMlweRMuiGUQ7kNvwEqCdsE&_nc_oc=AdkwoO1T7gQSxey9r9DVPSiSHUIIrfruNgD-k_-vPXNUL1L1Nwy3zaGi5bGS9okURD4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGMtzjKoZX3NrnsQN4LMfYuquXcr36SGm0eG8sblD82DQ&oe=6940CBEC',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494688081_1825128998065478_8345545497786184987_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BMlweRMuiGUQ7kNvwEqCdsE&_nc_oc=AdkwoO1T7gQSxey9r9DVPSiSHUIIrfruNgD-k_-vPXNUL1L1Nwy3zaGi5bGS9okURD4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGMtzjKoZX3NrnsQN4LMfYuquXcr36SGm0eG8sblD82DQ&oe=6940CBEC'
    }, // ⚽ الصور الرياضية الجديدة (بدون أسماء لاعبين)
    {
        id: 'mob-new-19',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582329484_4314200772196655_3301684428939639585_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Vluj99epuPkQ7kNvwETnWJz&_nc_oc=AdkGecXJSov0qYMdJ0XljPmz2R8zqQvmpo55i5C2OxZ2tDTEB5Uzt995MPbqC-smZa4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFMc5rB-5oDIHFyNTw3Sp4yhsx0GJMe2ujPosUj9lDX5Q&oe=6940C66C',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582329484_4314200772196655_3301684428939639585_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Vluj99epuPkQ7kNvwETnWJz&_nc_oc=AdkGecXJSov0qYMdJ0XljPmz2R8zqQvmpo55i5C2OxZ2tDTEB5Uzt995MPbqC-smZa4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wFMc5rB-5oDIHFyNTw3Sp4yhsx0GJMe2ujPosUj9lDX5Q&oe=6940C66C'
    }, {
        id: 'mob-new-20',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/517999460_1796337061267635_4530270687303968633_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bEKWWjkHBN4Q7kNvwGbE6lA&_nc_oc=AdnVJgp5xyjsXtx4ILuC4ctTvT4lBff1SZJ7nirf7N4hBabCmLzoCZZQQsHEj5G-vqU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGDZvPirtZoq8XIPWgTqGyRipKy0m7_vu6qhSsYoRHjxQ&oe=6940AAB4',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/517999460_1796337061267635_4530270687303968633_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bEKWWjkHBN4Q7kNvwGbE6lA&_nc_oc=AdnVJgp5xyjsXtx4ILuC4ctTvT4lBff1SZJ7nirf7N4hBabCmLzoCZZQQsHEj5G-vqU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGDZvPirtZoq8XIPWgTqGyRipKy0m7_vu6qhSsYoRHjxQ&oe=6940AAB4'
    }, {
        id: 'mob-new-21',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/491265527_2084971158668817_2971978885027830608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=mSjyWL7X2TgQ7kNvwFzH2c5&_nc_oc=Adk5ITvopvwmGHHBHvkixLm90YVNF0hkMcnOeThBE2_QEAgq3W9cj9doiElZfC0SCwM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wE9_VGmC4MCKQDloacj2qL3EspZ312U8VxYA1Z6E2jycw&oe=6940D040',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/491265527_2084971158668817_2971978885027830608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=mSjyWL7X2TgQ7kNvwFzH2c5&_nc_oc=Adk5ITvopvwmGHHBHvkixLm90YVNF0hkMcnOeThBE2_QEAgq3W9cj9doiElZfC0SCwM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wE9_VGmC4MCKQDloacj2qL3EspZ312U8VxYA1Z6E2jycw&oe=6940D040'
    }, {
        id: 'mob-new-22',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/550171573_1336311604790840_1889880768625365075_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CW5Wx-54npAQ7kNvwGGy8KW&_nc_oc=AdmjN_VBleuInHCwQdM23S031Ybpc-rdmFwTZw4t8BOQ5kUGy5R1Cal2eLMIE41W1iY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHZnxZhqLYO5OHXlzC7yrFpytS74bBrUI1oWFRjkHnv3Q&oe=6940C2C6',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/550171573_1336311604790840_1889880768625365075_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CW5Wx-54npAQ7kNvwGGy8KW&_nc_oc=AdmjN_VBleuInHCwQdM23S031Ybpc-rdmFwTZw4t8BOQ5kUGy5R1Cal2eLMIE41W1iY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHZnxZhqLYO5OHXlzC7yrFpytS74bBrUI1oWFRjkHnv3Q&oe=6940C2C6'
    }, {
        id: 'mob-new-23',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/556798759_660614183783954_1663577560069765746_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=N0G9shY6CS0Q7kNvwGEzX8H&_nc_oc=AdnfEmKG_n-ZlnYbNH8B0OcOiAgZG5olRYmrGX9iGc5M3oKPyich90GgMdwTXScIRG8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHXe8xej7Zz_ViT4SV9_0c4ebZgRDGJvN09X32v-ASARA&oe=6940C6FD',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/556798759_660614183783954_1663577560069765746_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=N0G9shY6CS0Q7kNvwGEzX8H&_nc_oc=AdnfEmKG_n-ZlnYbNH8B0OcOiAgZG5olRYmrGX9iGc5M3oKPyich90GgMdwTXScIRG8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHXe8xej7Zz_ViT4SV9_0c4ebZgRDGJvN09X32v-ASARA&oe=6940C6FD'
    }, {
        id: 'mob-new-24',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494820952_754624413570093_3623611495853933719_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=u79mOdn9fBsQ7kNvwGXODED&_nc_oc=Admln9WmTIK6wfz4nYl-iCZ5Q0wFPrF75W3-KAYs1Y3plnu4ALPxsLLp3j8_zUmCd0U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHKwOTQXdwl7Ccew8fVibIw1qvOdi2rbvFXZKghLSbEuw&oe=6940A27B',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/494820952_754624413570093_3623611495853933719_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=u79mOdn9fBsQ7kNvwGXODED&_nc_oc=Admln9WmTIK6wfz4nYl-iCZ5Q0wFPrF75W3-KAYs1Y3plnu4ALPxsLLp3j8_zUmCd0U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHKwOTQXdwl7Ccew8fVibIw1qvOdi2rbvFXZKghLSbEuw&oe=6940A27B'
    }, {
        id: 'mob-new-25',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/481701022_9414193968668476_1778775043434331587_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=nDOcCUorxXIQ7kNvwEGLhUE&_nc_oc=AdnBDbCoCEBB75e_-YrE4iInDuExeEH4JXQS0UQjQ_eGY_Oxiza_8sQPauAcIuBUYgI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEOMBlAtdAJLjtLLE4mtYYuI922us4g4eBHoAJU__SY8g&oe=6940A23B',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/481701022_9414193968668476_1778775043434331587_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=nDOcCUorxXIQ7kNvwEGLhUE&_nc_oc=AdnBDbCoCEBB75e_-YrE4iInDuExeEH4JXQS0UQjQ_eGY_Oxiza_8sQPauAcIuBUYgI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEOMBlAtdAJLjtLLE4mtYYuI922us4g4eBHoAJU__SY8g&oe=6940A23B'
    }, {
        id: 'mob-new-26',
        title: 'كرة قدم',
        category: 'mobile',
        tags: ['كورة', 'كرة قدم', 'رياضة'],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/495270673_3549651952006938_270812006146287350_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bXhp0UH5nb8Q7kNvwFfgbN-&_nc_oc=Adng74KBLNFC0F9Q8ih_1Z1yPk0gzX0C64axuzMBh8uJSoExY4Bt_86CndgchpLWssg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHJYGEuR4CiGw273AV9YTWYYbGyT64dt0w0vEgbKz-jug&oe=6940A9C9',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/495270673_3549651952006938_270812006146287350_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=bXhp0UH5nb8Q7kNvwFfgbN-&_nc_oc=Adng74KBLNFC0F9Q8ih_1Z1yPk0gzX0C64axuzMBh8uJSoExY4Bt_86CndgchpLWssg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHJYGEuR4CiGw273AV9YTWYYbGyT64dt0w0vEgbKz-jug&oe=6940A9C9'
    }, {
        id: 'mob-new-27',
        title: '',
        category: 'mobile',
        tags: ['بنفسجي'],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/581950809_1212273937436377_629461125047537822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6BQ23aui4EMQ7kNvwEqzGJQ&_nc_oc=Adnw2j41rjYGakxNmqNbYCYQ2r4ARqDM15qm7QDDPSPnMiy0mOE2yJTkWuD63UzAzFE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wEHAQ5tZ2weUcg1JMSKS1HgY7-z0S6pNmdjSyjoJT7EzA&oe=69437C44',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/581950809_1212273937436377_629461125047537822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=6BQ23aui4EMQ7kNvwEqzGJQ&_nc_oc=Adnw2j41rjYGakxNmqNbYCYQ2r4ARqDM15qm7QDDPSPnMiy0mOE2yJTkWuD63UzAzFE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wEHAQ5tZ2weUcg1JMSKS1HgY7-z0S6pNmdjSyjoJT7EzA&oe=69437C44'
    }, {
        id: 'mob-new-28',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/553588334_1099924962165804_6592274565573982773_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3JR239_p38MQ7kNvwGscsIY&_nc_oc=AdkNRWb9mOPpVdos70BmgFEpZsL29WqwDrPJXuEKjql1r1YqajmkN4xKqbNsvw82EOs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wE9Co1AxD7LetZVu7Clyrd4LsYcizTRr6wQBqRLE76WGg&oe=69438118',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/553588334_1099924962165804_6592274565573982773_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3JR239_p38MQ7kNvwGscsIY&_nc_oc=AdkNRWb9mOPpVdos70BmgFEpZsL29WqwDrPJXuEKjql1r1YqajmkN4xKqbNsvw82EOs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wE9Co1AxD7LetZVu7Clyrd4LsYcizTRr6wQBqRLE76WGg&oe=69438118'
    }, {
        id: 'mob-new-29',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/577867434_2096923887802805_6723007110660697545_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=V88Tv3g233cQ7kNvwEh-eNX&_nc_oc=AdllsJXU_fPUGEXwOx77ZkRGj2hXaMc-xC4fQZxkNaa99Zb6rmt1movP226V7dYnuxM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHo1FphE8xDfLv0f6bx7gnvrXYjEc9dJ6txpmX_8LJ-3g&oe=69438BCC',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/577867434_2096923887802805_6723007110660697545_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=V88Tv3g233cQ7kNvwEh-eNX&_nc_oc=AdllsJXU_fPUGEXwOx77ZkRGj2hXaMc-xC4fQZxkNaa99Zb6rmt1movP226V7dYnuxM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHo1FphE8xDfLv0f6bx7gnvrXYjEc9dJ6txpmX_8LJ-3g&oe=69438BCC'
    }, {
        id: 'mob-new-30',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/583145968_697559136345156_5825160134845222851_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8EbOeDLF4PoQ7kNvwFDmaIT&_nc_oc=AdmABBtsfSejUfvTN1hGUjrYmrUcyVod12QyHMIuRfplnk79SwYYonzv9A8JSzXS0v8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHKEq7rFiEb9csC_ui6MVbbcddAbUmWY_cC6aXkZmq2uw&oe=694360B9',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/583145968_697559136345156_5825160134845222851_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8EbOeDLF4PoQ7kNvwFDmaIT&_nc_oc=AdmABBtsfSejUfvTN1hGUjrYmrUcyVod12QyHMIuRfplnk79SwYYonzv9A8JSzXS0v8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHKEq7rFiEb9csC_ui6MVbbcddAbUmWY_cC6aXkZmq2uw&oe=694360B9'
    }, {
        id: 'mob-new-31',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581560439_2218689445308954_6085214802848179000_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=vabmC46gsc0Q7kNvwFeovF-&_nc_oc=AdlEhXIc2l9xScaYrvv6mxLlvL_Qr1yCRuyNvVhOhB0wthNXsgYrrZFE73yxX1tSsQE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wFNwk1-v_xZdDLPoTHGPQIiIqjpNr91LkULbpIJ31ti3w&oe=69437812',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581560439_2218689445308954_6085214802848179000_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=vabmC46gsc0Q7kNvwFeovF-&_nc_oc=AdlEhXIc2l9xScaYrvv6mxLlvL_Qr1yCRuyNvVhOhB0wthNXsgYrrZFE73yxX1tSsQE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wFNwk1-v_xZdDLPoTHGPQIiIqjpNr91LkULbpIJ31ti3w&oe=69437812'
    }, {
        id: 'mob-new-32',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582009104_1169818105350779_6673811862178486324_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=fdkzU6wNbIAQ7kNvwFj_PsX&_nc_oc=AdlSnYBgwpe5j_-TbFpbzrJwyS-M09dGECEmoMDFF9Sh9B-mpcW2eh7xm-kbdgAEAak&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEno3XLC6E7B2kp-iCKd__CAzqJ9YcZuC2Hmy01jFzRXA&oe=69438068',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582009104_1169818105350779_6673811862178486324_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=fdkzU6wNbIAQ7kNvwFj_PsX&_nc_oc=AdlSnYBgwpe5j_-TbFpbzrJwyS-M09dGECEmoMDFF9Sh9B-mpcW2eh7xm-kbdgAEAak&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wEno3XLC6E7B2kp-iCKd__CAzqJ9YcZuC2Hmy01jFzRXA&oe=69438068'
    }, {
        id: 'mob-new-33',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/582024292_810263158514605_3773020881450709049_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-2_Acsi4b7kQ7kNvwE8u0mi&_nc_oc=Adk7D3Vmne_z-b6sEgZAyFDgoRX9FvYo5QU5B0qhJkOCDTS-VeUoJ2rYiMPXpmaQuZk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wFVbVs0IvEgSdgvcApYMEO5tn-XoHD_iWbEugzxM5tZhw&oe=69438A81',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/582024292_810263158514605_3773020881450709049_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-2_Acsi4b7kQ7kNvwE8u0mi&_nc_oc=Adk7D3Vmne_z-b6sEgZAyFDgoRX9FvYo5QU5B0qhJkOCDTS-VeUoJ2rYiMPXpmaQuZk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wFVbVs0IvEgSdgvcApYMEO5tn-XoHD_iWbEugzxM5tZhw&oe=69438A81'
    }, {
        id: 'mob-new-34',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582080928_833446932861248_8877160566545290076_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9tQYAslYAEkQ7kNvwHQII0A&_nc_oc=AdmxHfy8qhw13BUINFU4WCbAlnaT6lYlSX2MVLfFtcboSMbSpqR1oi3vBiE1DLW7GAA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wG_Q_b2B9QqXovIxtaRfQ-Rn2VJXRFTGSng4IIkym0yWQ&oe=69436057',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582080928_833446932861248_8877160566545290076_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9tQYAslYAEkQ7kNvwHQII0A&_nc_oc=AdmxHfy8qhw13BUINFU4WCbAlnaT6lYlSX2MVLfFtcboSMbSpqR1oi3vBiE1DLW7GAA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wG_Q_b2B9QqXovIxtaRfQ-Rn2VJXRFTGSng4IIkym0yWQ&oe=69436057'
    }, {
        id: 'mob-new-35',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581994056_3751478041651842_2903274890863754352_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=wv8Ug6jdjBsQ7kNvwGYfPs5&_nc_oc=Admb-LloeH_l53_PBj1YnKKJRV3Z-V6gg4aODZrhgAfBAO6BagkP2QYhDEgVg_IP6HU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHukSCAmIZ58yauKoS6AamlTrpl-8YDq41FAOtthm2J0g&oe=694376CA',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581994056_3751478041651842_2903274890863754352_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=wv8Ug6jdjBsQ7kNvwGYfPs5&_nc_oc=Admb-LloeH_l53_PBj1YnKKJRV3Z-V6gg4aODZrhgAfBAO6BagkP2QYhDEgVg_IP6HU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wHukSCAmIZ58yauKoS6AamlTrpl-8YDq41FAOtthm2J0g&oe=694376CA'
    }, {
        id: 'mob-new-36',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/581804681_4178016722471519_2161086710083176610_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=WoenJVQjqtgQ7kNvwHCaktE&_nc_oc=AdkiRB7oPwuK3JWvmtIyQWe6G15R8RTdsV5XIYNFFOz7zzzRQWjnsS14lynEh1q-hUU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHsVv1bDBYQmzS29HllTmWeO1RpwinqNWUNzGNrCp7n7Q&oe=69439282',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/581804681_4178016722471519_2161086710083176610_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=WoenJVQjqtgQ7kNvwHCaktE&_nc_oc=AdkiRB7oPwuK3JWvmtIyQWe6G15R8RTdsV5XIYNFFOz7zzzRQWjnsS14lynEh1q-hUU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHsVv1bDBYQmzS29HllTmWeO1RpwinqNWUNzGNrCp7n7Q&oe=69439282'
    }, {
        id: 'mob-new-37',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/581930761_863132136235321_169846259686893468_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CYByNgVjqI8Q7kNvwFlbKWY&_nc_oc=AdnooZLCCX8cxuZ2VJ5RoBKRtMCdbTIzBy3Ihq_KmLi4L32ryoTzhJA5HAobGA7DrJA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wFjNc_JdVGeX-o9eTsfnvUz-PwjekdT8WCRTzIkoqc4NA&oe=69439939',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/581930761_863132136235321_169846259686893468_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=CYByNgVjqI8Q7kNvwFlbKWY&_nc_oc=AdnooZLCCX8cxuZ2VJ5RoBKRtMCdbTIzBy3Ihq_KmLi4L32ryoTzhJA5HAobGA7DrJA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wFjNc_JdVGeX-o9eTsfnvUz-PwjekdT8WCRTzIkoqc4NA&oe=69439939'
    }, {
        id: 'mob-new-38',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/581995328_2777279399278267_7444425546541146397_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=tKicSK57kOEQ7kNvwHyp80A&_nc_oc=AdnZmuKrlPuAXY0NTIePV_A3meZRBSdalAmdVzIaT8F2fdkhBgwFaqXi8-i5t23ooRk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGnPEhRxCk5KiD8Aye-iHlyWDqrWpCpNo7GRghR30jRAg&oe=69437E87',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/581995328_2777279399278267_7444425546541146397_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=tKicSK57kOEQ7kNvwHyp80A&_nc_oc=AdnZmuKrlPuAXY0NTIePV_A3meZRBSdalAmdVzIaT8F2fdkhBgwFaqXi8-i5t23ooRk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGnPEhRxCk5KiD8Aye-iHlyWDqrWpCpNo7GRghR30jRAg&oe=69437E87'
    }, {
        id: 'mob-new-39',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581978275_866195119427907_2448272526346513427_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=pos4qKQJzYgQ7kNvwF0OT6G&_nc_oc=AdlQGm-QtR7yxHxR660ayEYIcew3DJSQFa8MlB3actFKNLd59rlOUYKrQVVJzji3HEw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wEgMhqh4tGpkIJU-91tPSn1E924Idf5BXmLNko1ULX-hA&oe=69437D01',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581978275_866195119427907_2448272526346513427_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=pos4qKQJzYgQ7kNvwF0OT6G&_nc_oc=AdlQGm-QtR7yxHxR660ayEYIcew3DJSQFa8MlB3actFKNLd59rlOUYKrQVVJzji3HEw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wEgMhqh4tGpkIJU-91tPSn1E924Idf5BXmLNko1ULX-hA&oe=69437D01'
    }, {
        id: 'mob-new-40',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582336360_1203535678318865_8834609726403144476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=haK2DoIWmToQ7kNvwHJlM7R&_nc_oc=AdkJuMa6xZ6p-VO1Tlo1XjaDv18QSaaPSyfsXbFnp-62YAkypsomVIKNw7FIm7xWzwk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wF3qbo5QSY6aT_F8-a12MtsmDzT5tL6FZAkBplAA5asUA&oe=6943754B',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582336360_1203535678318865_8834609726403144476_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=haK2DoIWmToQ7kNvwHJlM7R&_nc_oc=AdkJuMa6xZ6p-VO1Tlo1XjaDv18QSaaPSyfsXbFnp-62YAkypsomVIKNw7FIm7xWzwk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wF3qbo5QSY6aT_F8-a12MtsmDzT5tL6FZAkBplAA5asUA&oe=6943754B'
    }, {
        id: 'mob-new-41',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582993797_824591943686020_369845203223096165_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UtSj-EtrxIIQ7kNvwG5eYue&_nc_oc=AdnKvTIC73u3U8QIplALTxCuVKfY8u6TvD2lKJ3QiUR4D-vuhcapVsMak0dEtJk_y3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGdUcpj2gU588cvE-Xf_YanHmuw_MrP_eppCbeYGP5YkQ&oe=69438DB4',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582993797_824591943686020_369845203223096165_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=UtSj-EtrxIIQ7kNvwG5eYue&_nc_oc=AdnKvTIC73u3U8QIplALTxCuVKfY8u6TvD2lKJ3QiUR4D-vuhcapVsMak0dEtJk_y3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wGdUcpj2gU588cvE-Xf_YanHmuw_MrP_eppCbeYGP5YkQ&oe=69438DB4'
    }, {
        id: 'mob-new-42',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/582239632_845645364534481_8652409260052239007_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cfmhDOoc6lUQ7kNvwHBG6Ep&_nc_oc=Adm0d0vZvT_a_mMr5-fseYWZ2cZaLYyoCf4msBVkn08CxAhDqVHISvhN9GDWRyt1_A0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wGBrML3UwAqGLZQY6Xg3gVbNM_VCFlqhwcxXgOiPeCmdw&oe=69438A6D',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/582239632_845645364534481_8652409260052239007_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cfmhDOoc6lUQ7kNvwHBG6Ep&_nc_oc=Adm0d0vZvT_a_mMr5-fseYWZ2cZaLYyoCf4msBVkn08CxAhDqVHISvhN9GDWRyt1_A0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wGBrML3UwAqGLZQY6Xg3gVbNM_VCFlqhwcxXgOiPeCmdw&oe=69438A6D'
    }, {
        id: 'mob-new-43',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582120051_877457141511790_8365255450619514954_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gCsQR9sfFl0Q7kNvwF21DEd&_nc_oc=AdnH_moKLX_Xcu4iJzEAZUUqzn2PGPkKh0pi44tWVOtcZv5UUbL0PccsoOKvVhEfAjI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wH_YgIWcML-R95p2zeyUNoBvIL1Iyn--gadTynYogR3kw&oe=69439831',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582120051_877457141511790_8365255450619514954_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gCsQR9sfFl0Q7kNvwF21DEd&_nc_oc=AdnH_moKLX_Xcu4iJzEAZUUqzn2PGPkKh0pi44tWVOtcZv5UUbL0PccsoOKvVhEfAjI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wH_YgIWcML-R95p2zeyUNoBvIL1Iyn--gadTynYogR3kw&oe=69439831'
    }, {
        id: 'mob-new-44',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/582434248_786166961133623_7006404605314588186_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gVCmCchCp3wQ7kNvwHttvjk&_nc_oc=AdniBNPbr6pxb3ocxtq6K4cx7Td0oj9hDDAr8QIafBFJ6_xcJURF4Nw46CpESt3ePHk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHV4rzyfCDZBVdSbs2XutCtoaVCPMINYImq4yVy0zhATA&oe=694389C9',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/582434248_786166961133623_7006404605314588186_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=gVCmCchCp3wQ7kNvwHttvjk&_nc_oc=AdniBNPbr6pxb3ocxtq6K4cx7Td0oj9hDDAr8QIafBFJ6_xcJURF4Nw46CpESt3ePHk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHV4rzyfCDZBVdSbs2XutCtoaVCPMINYImq4yVy0zhATA&oe=694389C9'
    }, {
        id: 'mob-new-45',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581978332_3901735200117986_2517195396282611817_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=39IHlFwandgQ7kNvwHhlAeJ&_nc_oc=Adn1vOhA0ODsI3mBVlixGahnW2kAnMih4UKOwlBpVB3riqJC--CEmopuj7XfHL1v3DI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wG8k-TBBS4zzRCpjZ83QvpUcgj360kj9VxQksd3wBcMdg&oe=69437E13',
        thumbnail: 'https://scontent.fcai19-11.fna.fbcdn.net/v/t1.15752-9/581978332_3901735200117986_2517195396282611817_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=39IHlFwandgQ7kNvwHhlAeJ&_nc_oc=Adn1vOhA0ODsI3mBVlixGahnW2kAnMih4UKOwlBpVB3riqJC--CEmopuj7XfHL1v3DI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&oh=03_Q7cD3wG8k-TBBS4zzRCpjZ83QvpUcgj360kj9VxQksd3wBcMdg&oe=69437E13'
    }, {
        id: 'mob-new-46',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582047009_1900933070796920_8600949127286187663_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ZnDl3e6_mKYQ7kNvwHPyysh&_nc_oc=AdmhEfMd6mmB5k66C6Q_CDMduamrYCw9GUoYXAQwA715j9T0wooivnRMYDjy4Nh67_k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHQ9YDBJfsD8arV3TK6EAmEfsKzgECvguDutwiEAImvIA&oe=69436EE7',
        thumbnail: 'https://scontent.fcai19-4.fna.fbcdn.net/v/t1.15752-9/582047009_1900933070796920_8600949127286187663_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ZnDl3e6_mKYQ7kNvwHPyysh&_nc_oc=AdmhEfMd6mmB5k66C6Q_CDMduamrYCw9GUoYXAQwA715j9T0wooivnRMYDjy4Nh67_k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-4.fna&oh=03_Q7cD3wHQ9YDBJfsD8arV3TK6EAmEfsKzgECvguDutwiEAImvIA&oe=69436EE7'
    }, {
        id: 'mob-new-47',
        title: '',
        category: 'mobile',
        tags: [''],
        full: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/582212976_855273933855380_6623213939089355647_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=eBY09Iwc5zQQ7kNvwHo7v2V&_nc_oc=AdlPOn2Jp4ZRKjlwIhe3d162-n6Fx9p_YJZWjnYyJ1bTSP3yr_gkmI2E78rojUM7RLM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHoG5fsss8-PLIc4h1pvfQ8FSu0vWFbhG_ZjDhRfgnUKw&oe=69437586',
        thumbnail: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.15752-9/582212976_855273933855380_6623213939089355647_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=eBY09Iwc5zQQ7kNvwHo7v2V&_nc_oc=AdlPOn2Jp4ZRKjlwIhe3d162-n6Fx9p_YJZWjnYyJ1bTSP3yr_gkmI2E78rojUM7RLM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&oh=03_Q7cD3wHoG5fsss8-PLIc4h1pvfQ8FSu0vWFbhG_ZjDhRfgnUKw&oe=69437586'
    }, {
    }, ];

    // --- بقية الكود (بدون تغيير) ---
    const logoLink = document.getElementById('logo-link');
    const navLinks = document.querySelectorAll('.nav-link')
      , wallpaperSections = document.querySelectorAll('.wallpaper-section')
      , modal = document.getElementById('wallpaper-modal')
      , closeModalBtn = document.querySelector('.close-modal-btn')
      , searchInput = document.getElementById('search-input');
    let currentView = 'desktop-section';

    const forceDownload = (url, fileName) => {
        fetch(url, {
            mode: 'cors'
        }).then(response => response.blob()).then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(blobUrl);
            a.remove();
        }
        ).catch( () => alert('فشل تحميل الصورة. حاول مرة أخرى.'));
    }
    ;

    function createWallpaperCard(wallpaper) {
        const card = document.createElement('div');
        card.className = 'wallpaper-card';
        if (wallpaper.category === 'mobile')
            card.classList.add('mobile');
        card.dataset.id = wallpaper.id;
        // التأكد من أن اسم الملف لا يحتوي على محارف غريبة
        const safeFilename = wallpaper.title.replace(/[^a-z0-9\s-]/gi, '').trim().replace(/\s+/g, '-') + '.jpg';

        card.innerHTML = ` <img src="${wallpaper.thumbnail}" alt="${wallpaper.title}" loading="lazy"> <div class="wallpaper-info"> <h3 class="wallpaper-title">${wallpaper.title}</h3> <a href="#" class="card-download-btn" title="تحميل مباشر"> <i class="fas fa-download"></i> </a> </div> `;
        card.addEventListener('click', () => openModal(wallpaper.id));
        const downloadBtn = card.querySelector('.card-download-btn');
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            forceDownload(wallpaper.full, safeFilename);
        }
        );
        return card;
    }
    function openModal(id) {
        const wallpaper = wallpapersDB.find(w => w.id === id);
        if (!wallpaper)
            return;
        const modalTitle = document.getElementById('modal-title')
          , downloadLinks = document.getElementById('download-links')
          , desktopMockup = document.getElementById('desktop-mockup')
          , mobileMockup = document.getElementById('mobile-mockup')
          , laptopScreen = document.getElementById('laptop-screen-img')
          , phoneScreen = document.getElementById('phone-screen-img');
        modalTitle.textContent = wallpaper.title;

        // تنظيف اسم الملف للتحميلات داخل المودال
        const safeBaseFilename = wallpaper.title.replace(/[^a-z0-9\s-]/gi, '').trim().replace(/\s+/g, '-');

        if (wallpaper.category === 'desktop') {
            laptopScreen.style.backgroundImage = `url('${wallpaper.full}')`;
            desktopMockup.classList.add('active');
            mobileMockup.classList.remove('active');
        } else {
            phoneScreen.style.backgroundImage = `url('${wallpaper.full}')`;
            mobileMockup.classList.add('active');
            desktopMockup.classList.remove('active');
        }

        // ملاحظة: تم تعديل أسماء الملفات المعروضة للمستخدم لتكون أبسط
        downloadLinks.innerHTML = ` 
            <button class="download-btn" data-url="${wallpaper.full}" data-filename="${safeBaseFilename}-HD.jpg">تحميل بجودة عالية (HD)</button> 
            <button class="download-btn" data-url="${wallpaper.full}" data-filename="${safeBaseFilename}-4K.jpg">تحميل بجودة 4K</button> 
        `;

        downloadLinks.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                forceDownload(btn.dataset.url, btn.dataset.filename);
            }
            );
        }
        );
        modal.style.display = 'block';
    }
    function closeModal() {
        modal.style.display = 'none';
        document.getElementById('desktop-mockup').classList.remove('active');
        document.getElementById('mobile-mockup').classList.remove('active');
    }
    function populateWallpapers() {
        const desktopGrid = document.getElementById('desktop-grid');
        const mobileGrid = document.getElementById('mobile-grid');
        desktopGrid.innerHTML = '';
        mobileGrid.innerHTML = '';
        wallpapersDB.forEach(wallpaper => {
            const card = createWallpaperCard(wallpaper);
            if (wallpaper.category === 'desktop') {
                desktopGrid.appendChild(card);
            } else if (wallpaper.category === 'mobile') {
                mobileGrid.appendChild(card);
            }
        }
        );
    }
    ;function navigateTo(targetId) {
        wallpaperSections.forEach(section => section.classList.remove('active-section'));
        document.getElementById(targetId).classList.add('active-section');
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === targetId);
        }
        );
        if (targetId !== 'search-results-section') {
            currentView = targetId;
        }
    }
    ;function handleSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            // الرجوع إلى العرض السابق عند مسح حقل البحث
            navigateTo(currentView);
            return;
        }
        const searchGrid = document.getElementById('search-grid');
        const searchTitle = document.getElementById('search-title');

        // تفعيل قسم البحث وإخفاء الأقسام الأخرى مؤقتاً
        navigateTo('search-results-section');

        const results = wallpapersDB.filter(w => w.title.toLowerCase().includes(query) || w.tags.some(tag => tag.toLowerCase().includes(query)));

        searchTitle.textContent = `نتائج البحث عن: "${searchInput.value}"`;
        searchGrid.innerHTML = '';
        if (results.length > 0) {
            results.forEach(wallpaper => searchGrid.appendChild(createWallpaperCard(wallpaper)));
        } else {
            searchGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding: 20px;">لا توجد خلفيات تطابق بحثك: "${searchInput.value}"</p>`;
        }
    }
    ;logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = '';
        navigateTo('desktop-section');
    }
    );
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal)
            closeModal();
    }
    );
    searchInput.addEventListener('input', handleSearch);
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.target);
            searchInput.value = '';
            // مسح حقل البحث عند تغيير التبويب
        }
        );
    }
    );

    // تهيئة الموقع
    populateWallpapers();
    navigateTo('desktop-section');
}
);
