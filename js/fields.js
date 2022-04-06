Vue.config.productionTip = false

var influencers = new Vue({
    el: "#influencers",
    data:{
        active_field: "",
        profiles: {
            "fashion": [
                {"username": "diya_menon", "biography": "Anchor at Sun tv/Sun music/Surya tv \ud83d\udcfa \nYouTuber\ud83d\udc49Krazy kanmani / D\u2019Sisters \nWorld traveller \ud83c\udf0d", "id": "17841401893713103", "ig_id": 1478655123, "followers_count": 599239, "media_count": 1627},
                {"username": "ec24m", "biography": "\u2730 \ud83d\udc8c\u1d0d\u1d07\u1d05\u026a\u1d00.\u1d0a\u1d00\u1d0d\u026a\u1d07\u1d04\u029c\u1d1c\u1d00@\u0262\u1d0d\u1d00\u026a\u029f.\u1d04\u1d0f\u1d0d\n\u2764\ufe0e 31 Million YouTube views and counting\n\u2730 Tik Tok\u279f @iamjamiechua\n\u2764\ufe0e\ud83d\udccd \u0455i\u0301ng\u03b1p\u03c3r\u0454", "id": "17841400117000656", "ig_id": 41987900, "followers_count": 1256631, "media_count": 7302},
                {"username": "jiaqiwoo", "biography": "\uc81c\uc774\ub9ac; Never falter only stronger \u2651\u2653\u264d\n\ud83c\udf10 \ud835\ude5d\ud835\ude5a\ud835\ude61\ud835\ude61\ud835\ude64@\ud835\ude5f\ud835\ude56\ud835\ude6e\ud835\ude61\ud835\ude5a\ud835\ude6e\ud835\ude6c\ud835\ude64\ud835\ude64.\ud835\ude58\ud835\ude64\ud835\ude62 for collaborations\n@vintagestudiovs @vs.beautybar @dorraslimmingsingapore\n\ud83d\udc47\ud83c\udffb\ud83d\udc99\ud83d\udc99\ud83d\udc99\ud83d\udc99\ud83d\udc47\ud83c\udffb", "id": "17841400802920290", "ig_id": 18586764, "followers_count": 429172, "media_count": 685},
                {"username": "novitalam", "biography": "\ud83d\udce7 novita.lam@gmail.com", "id": "17841401897562756", "ig_id": 176447252, "followers_count": 299083, "media_count": 4126},
                {"username": "taufikbatisah", "biography": "\ud835\ude4b\ud835\ude67\ud835\ude64\ud835\ude65\ud835\ude5a\ud835\ude67\ud835\ude69\ud835\ude6e \ud835\ude4f\ud835\ude5a\ud835\ude56\ud835\ude62 @smzdbb #smzdbb #rumahkatmane\n\ud835\ude4d\ud835\ude5a\ud835\ude68\ud835\ude69\ud835\ude56\ud835\ude6a\ud835\ude67\ud835\ude56\ud835\ude63\ud835\ude69 @chixhotchicken #chixhotchicken \n\ud835\ude43\ud835\ude6a\ud835\ude68\ud835\ude57\ud835\ude56\ud835\ude63\ud835\ude59 \ud835\ude69\ud835\ude64 @iamsheenakbal #bubsandshnubz", "id": "17841401747560033", "ig_id": 2170252, "followers_count": 343752, "media_count": 2033},
            ],
            "food": [
                {"username":"b1gqing", "biography": "Yuqing.irene@gmail.com\nBuilding @socol.io", "id": "17841401695513077", "ig_id": 196984517, "followers_count": 436419, "media_count": 610},
                {"username":"bongqiuqiu", "biography": "Love life \ud83d\ude46\ud83c\udffb\u200d\u2640\ufe0f Best bakes @qakesandbakes \ud83e\udd30\ud83c\udffb Eat chocolate @qwhyle \ud83d\udc81\ud83c\udffb\u200d\u2640\ufe0f", "id": "17841401264230029", "ig_id": 1898141, "followers_count": 279249, "media_count": 2485},
                {"username":"danielfooddiary", "biography": "5\ud83c\udf5e2\ud83d\udc33\n\ud83c\udf5c DFD pays for food featured (declines food deliveries, gifts, invites) \n\ud83d\udce9 Ads indicated by #DFDSP DanielFoodDiary@gmail.com for ad enquiries", "id": "17841400147000042", "ig_id": 2692900, "followers_count": 270089, "media_count": 7820},
                {"username":"ieatishootipost", "biography": "Never waste your calories on yucky food! Ieatishootipost.sg \nFacebook/ieatishootipost", "id": "17841400261422897", "ig_id": 185416714, "followers_count": 150845, "media_count": 4122},
                {"username":"jeanetteaw", "biography": "Established actress and Producer.\nTakasaki PR Ambassador\nP\u00e2tissi\u00e8re. @onceuponatime.sg", "id": "17841400876878504", "ig_id": 544285229, "followers_count": 415641, "media_count": 2590},
            ],
            "game": [
                {"username": "biglionog", "biography": "\ud83d\ude02| Ex meme dealer\n\ud83d\udd25| Business Email: biglionog@gmail.com\n\ud83d\udd13| DMs are open\nThis is basically my spam", "id": "17841402631270631", "ig_id": 2405055709, "followers_count": 2638, "media_count": 400},
                {"username": "cherzinga", "biography": "\ud83d\udccd\ud83c\uddf8\ud83c\uddec Singapore\n\u22b9 DoTA 2 | Valorant gamer \ud83c\udfae \n\u22b9 @WKeyKaps\n\u22b9 Playing for @wildfiresphinx\n\u22b9 Talent @theLoudmouthsTV", "id": "17841400767493365", "ig_id": 215385583, "followers_count": 59726, "media_count": 1098},
                {"username": "danialron", "biography": "\ud83d\udd79 Gamer @titangamersofficial \n\ud83c\udfa5 @TitanDigitalMedia\n\u2709 danialron@thejianhaotan.com", "id": "17841400209823301", "ig_id": 211270994, "followers_count": 122558, "media_count": 1988},
                {"username": "joddessss", "biography": "Beauty | Fashion | Gaming\nTP | BUS \n\ud83c\udfae Twitch : Joddessss\n\ud83d\udc8c: joeyhengz@gmail.com", "id": "17841401406430454", "ig_id": 29102881, "followers_count": 17958, "media_count": 556},
                {"username": "leetgamer", "biography": "Follow for your daily source of gaming memes, news and giveaways\ud83c\udfae\ud83d\udc7e\nDM for Credit/Promo!\n#LeetGamer\ud83d\udc7e", "id": "17841402079334913", "ig_id": 1959309311, "followers_count": 23548, "media_count": 497},
                {"username": "PewDiePie", "biography": "New neotokyo merch limited", "id": "17841400086940211", "ig_id": 13506898, "followers_count": 21870911, "media_count": 773},
            ],
            "lifestyle": [
                {"username": "germaineroli", "biography": "\ud83d\udccd, Singapore \ud83c\uddf8\ud83c\uddec\n\ud83c\udfd8 \ud835\udc11\ud835\udc1e\ud835\udc1a\ud835\udc25 Estate Broker @ \ud835\udc04\ud835\udc11\ud835\udc00 \n\ud83c\udf1f@germainetanrealty\ud83c\udf1f\nLifestyle | Yoga | Good Vibes \n\ud83d\udcf2 + 65 9639 9235", "id": "17841400791790235", "ig_id": 15066393, "followers_count": 29920, "media_count": 215},
                {"username": "helensongghys", "biography": "\u2764\ufe0f \u201cLife is 10% what happen to us and 90% how we react\u201d\n\ud83c\udf0d 8 Star \ud83d\udc8e Director @usanainc\n\ud83c\udfa4 Keynote Speaker \n\ud83e\udd4a Fitness Addict\u2022HIIT\u2022Spin\u2022Muaythai", "id": "17841401394970456", "ig_id": 29230499, "followers_count": 13203, "media_count": 2001},
                {"username": "kenpgl", "biography": "SG Food (Since 2012)\n\ud83d\udcf8\ud83d\udd8aManaged by Ken, Enya and Roderick\n\ud83d\udcc8 Fohr Verified\nFind us on Blog \u2b07\ufe0f", "id": "17841401653273729", "ig_id": 238711109, "followers_count": 49988, "media_count": 2807},
                {"username": "preeti1017", "biography": "\ud83d\udccdSingapore \ud83c\uddf8\ud83c\uddec\ud83c\uddee\ud83c\uddf3\nCommunication / UI UX designer \nSnapchat:-preeti_1017\nMom of @bob.thebilla \ud83d\udc08\n\ud83c\udfcb\ufe0f\u200d\u2642\ufe0ffitness freak \n\ud83e\uddd8\u200d\u2640\ufe0f yogi\n\ud83c\udfa1traveller \n\ud83c\udf82-17th May", "id": "17841400798097198", "ig_id": 460698603, "followers_count": 49000, "media_count": 388},
                {"username": "victoriacheng", "biography": "\ud83c\udfa4 Host: Esports, Tech, Culinary, Fitness\n\ud83c\udfae Founder @supnerd.tv\n\ud83c\udf7d Glutton @gastronommy\n\ud83d\udc15 Doge @battlecorgis\n\ud83e\udd4a Reppin @adidassg\n\ud83d\udd2b #Valorant", "id": "17841401210980016", "ig_id": 1064366, "followers_count": 49874, "media_count": 2743},
            ],
            "makeup": [
                {"username": "_jxxi", "biography": "Some days bare, some days dolled, but ALWAYS \nconfident\u2728\nTiktok - @jeminemi (47k)\n\ud83d\udc38\u2764\ufe0f: @kevindamnshit \nOther acc - @titaniumspinegirl \u2728", "id": "17841400500501003", "ig_id": 704208683, "followers_count": 38722, "media_count": 899},
                {"username": "iammichy", "biography": "\ud83d\ude47\ud83c\udffb\u200d\u2640\ufe0f Beloved Child of God\n\ud83c\uddf8\ud83c\uddec SG YouTuber- TiffwithMi (663K Subs)\n\ud83d\udc8c\u5408\u4f5c/Business: TiffwithMi@gmail.com\n\ud83c\udf6c@miremiofficial\n\ud83d\udcf1Latest Video:", "id": "17841400295410175", "ig_id": 11209847, "followers_count": 225980, "media_count": 570},
                {"username": "kazueeee", "biography": "\ud83c\udfe0+65 \n\ud83d\udc8e 300k Tiktok\n\ud83d\udc51 Kpop & SFX Makeup\n\ud83d\udcd6 facebook.com/kazueeee\n\ud83c\udfac youtube.com/c/JohnstanKazue", "id": "17841401692420036", "ig_id": 2360414, "followers_count": 28182, "media_count": 591},
                {"username": "pxdkitty", "biography": "Loves vegan food \u2022 living in Singapore\n\ud83d\udc31Cat mum: @_tinyterrors\ncurrently fostering 1 cat\n\ud83d\udce6Co-founder: @pixiepax\n\ud83d\udc8cAds & collabs \u2192 pxdkitty@gmail.com", "id": "17841400777870093", "ig_id": 5977929, "followers_count": 105098, "media_count": 1990},
                {"username": "tippytapp", "biography": "Singapore\njessicathamyx@gmail.com", "id": "17841400489450032", "ig_id": 2064315, "followers_count": 106964, "media_count": 3075},
            ],
            "photography": [
                {"username": "itshangi","biography": "Platinum Music Producer & Music Director @flipsidepm\nAthlete Manager & Co-Founder at Flipside Elite Team\n\ud83d\udc47\ud83c\udffc Latest single, People", "id": "17841401510060098", "ig_id": 646322335, "followers_count": 157890, "media_count": 842},
                {"username": "jasminelhr","biography": "my alter ego: @imnotjasminelhr \nmanaged by @titandigitalmedia", "id": "17841401504920075", "ig_id": 4850164, "followers_count": 170875, "media_count": 733},
                {"username": "katherinaolivia","biography": "\ud83e\udd96\ud83e\uddffEntrepreneur Lifestyle \n\ud83d\udc11\ud83d\udc36@where_is_waltercito \n\ud83d\udce6\ud83d\ude9aQuincus", "id": "17841401258293834", "ig_id": 245417943, "followers_count": 248942, "media_count": 111},
                {"username": "momentos","biography": "\ud83c\udfe0 \ud83c\uddf8\ud83c\uddec SG\nSony A7R II\nArchitecture , Singapore , animations", "id": "17841403321752563", "ig_id": 3140510725, "followers_count": 76007, "media_count": 1335},
                {"username": "skeletales","biography": "\ud83d\udccd singapore & melbourne\n\ud83d\udce7 ppeiyingg.lim@gmail.com", "id": "17841401266960128", "ig_id": 8234232, "followers_count": 51341, "media_count": 797},
            ],
            "study": [
                {"username": "etonhouseinternational", "biography": "\ud83d\udcda Shaping the future through education\n\u2764\ufe0f Tag us at #EtonHouse\n\ud83c\udfeb @middletonintlsch @ebridgepreschoolsg \n\ud83d\udcd6@theetonacademy\n\ud83c\udf81 @ecf.sg", "id": "17841400193618007", "ig_id": 1792454453, "followers_count": 2907, "media_count": 1793},
                {"username": "gpteacher", "biography": "\ud83d\udea9Cambridge A-Level GP \ud83d\udd06& English tutor (15yrs) \u2022 Study Coach \n\ud83d\udea9I help students master English \n\ud83d\udea9MOE Teaching\ud83d\udc47 Award+ SME Business Award", "id": "17841403274044770", "ig_id": 3318165134, "followers_count": 1139, "media_count": 398},
                {"username": "oisteinkristiansen", "biography": "#1 creativity guru for kids. Creator of \u00d8isteins Blyant, Learn to Draw, Box Yourself and Doodles of life. Formerly known as Einstein...", "id": "17841400244730548", "ig_id": 1315080157, "followers_count": 4981, "media_count": 551},
                {"username": "ourlittleplaynest", "biography": "I help parents build trusting r/s with their kids without punishing and yelling\ud83c\udf1fGrab your free resources here\u2b07\ufe0f", "id": "17841403611658467", "ig_id": 3747736388, "followers_count": 55704, "media_count": 1058},
                {"username": "thesimplesum", "biography": "Bite-sized financial knowledge for Singaporeans", "id": "17841409289699810", "ig_id": 9278485656, "followers_count": 76156, "media_count": 417},
            ],
            "travel": [
                {"username": "darylaiden", "biography": "Singapore \nFor photography/videography engagements (or anything else, really), please contact me at hello@darylaidenyow.com! \ud83c\udf08", "id": "17841401612950725", "ig_id": 46453765, "followers_count": 122325, "media_count": 150},
                {"username": "dj.shinigami", "biography": "\ud83d\udd7aHEYA!  For Life \u270c\n\ud83c\udf0dWorld Traveller Dj \ud83c\udfa7\n\ud83c\udfdbfrom \ud83c\uddf2\ud83c\udde6 Morocco \ud83c\uddf2\ud83c\udde6", "id": "17841402138844494", "ig_id": 2115959294, "followers_count": 152087, "media_count": 197},
                {"username": "ruthisrandom", "biography": "I game and watch too much anime\n\ud83e\uddd8\ud83c\udffb\u200d\u2640\ufe0f @lynxlabel\n\ud83c\uddf8\ud83c\uddec ruthtzx@gmail.com", "id": "17841400394560025", "ig_id": 1613152, "followers_count": 111929, "media_count": 581},
                {"username": "vaunephan", "biography": "\ud83c\uddf8\ud83c\uddec\nSupercars\u25fd\ufe0fSuperbikes\u25fd\ufe0fTravel\u25fd\ufe0fDogs\nCurrent Garage: Ferrari\u25fd\ufe0fDucati\u25fd\ufe0fSuzuki\nRode frm SG-Tibet\n\ud83d\udcfa @ChannelNewsAsia\n\ud83d\udcf7 @gopro\n\ud83d\ude46\u200d\u2640\ufe0f @directasiainsurance", "id": "17841400308220266", "ig_id": 17034274, "followers_count": 120152, "media_count": 2649},
                {"username": "yk", "biography": "Based in Singapore\nTiktok: yk\nBusiness \u2022 Photoshoots : yk@leeyikkeat.com\nPresets & Prints \ud83d\udc47\ud83c\udffb", "id": "17841401617303386", "ig_id": 216757910, "followers_count": 1080994, "media_count": 1745},
            ]
        }
        
    },
    
})

var url = decodeURI(window.location.href);

influencers.active_field = url.split("?field=")[1].toLowerCase();
