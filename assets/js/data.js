var menuCategories = [
    {
        category: "all",
        categoryFa: "همه آیتم ها"
    },
    {
        category: "appetizers",
        categoryFa: "پیش غذا"
    },
    {
        category: "main-dishes",
        categoryFa: "غذای اصلی"
    },
    {
        category: "desserts",
        categoryFa: "دسر"
    },
    {
        category: "hot-drinks",
        categoryFa: "نوشیدنی گرم"
    },
    {
        category: "cold-drinks",
        categoryFa: "نوشیدنی سرد"
    },
]
var menuItems = [
  {
      id: 1,
      name: "آیس آمریکانو",
      ingredients: "۲۹۰ میلی لیتر، ۲ شات اسپرسو، قهوه ۱۰۰% عربیکا، یخ، ظرف شیشه ای",
      price: 79000,
      photo: "assets/images/menu-items/item001.jpeg",
      chefRec: false,
      category: "cold-drinks",
      categoryFa: "نوشیدنی سرد",
  },
  {
      id: 2,
      name: "آیس لته",
      ingredients: "۲۶۰ میلی لیتر، شیر، ۲ شات اسپرسو قهوه ۱۰۰% عربیکا، یخ، ظرف شیشه ای",
      price: 85000,
      photo: "assets/images/menu-items/item002.jpeg",
      chefRec: false,
      category: "cold-drinks",
      categoryFa: "نوشیدنی سرد",
  },
  {
      id: 3,
      name: "آیس موکا",
      ingredients: "۲۶۰ میلی لیتر، شیر، ۲ شات اسپرسو قهوه ۱۰۰% عربیکا، یخ، شکلات، ظرف شیشه ای",
      price: 97000,
      photo: "assets/images/menu-items/item003.jpeg",
      chefRec: false,
      category: "cold-drinks",
      categoryFa: "نوشیدنی سرد",
  },
  {
      id: 4,
      name: "منگو پشن فروت تی",
      ingredients: "طعم دهنده طبیعی انبه و پشن فروت، چای سیاه، یخ",
      price: 90000,
      photo: "assets/images/menu-items/item004.jpeg",
      chefRec: false,
      category: "cold-drinks",
      categoryFa: "نوشیدنی سرد",
  },
  {
      id: 5,
      name: "سالاد بیف",
      ingredients: "فیله گوساله، کاهو بنفش، سس مخصوص",
      price: 340000,
      photo: "assets/images/menu-items/item005.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 6,
      name: "سالاد مرغ و قارچ",
      ingredients: "فیله مرغ گریل شده، ماست، خامه، سس مایونز",
      price: 266000,
      photo: "assets/images/menu-items/item006.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 7,
      name: "سالاد دریایی",
      ingredients: "ماهی سالمون آب پز، میگو آب پز، میکس کرپ اسموکی",
      price: 360000,
      photo: "assets/images/menu-items/item007.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 8,
      name: "سالاد سبز",
      ingredients: "کاهو بنفش، سس سبز مخصوص",
      price: 210000,
      photo: "assets/images/menu-items/item008.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 9,
      name: "اسپرینگ رول سبزیجات",
      ingredients: "۵ عدد، سس چیلی تای",
      price: 240000,
      photo: "assets/images/menu-items/item009.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 10,
      name: "آب سیب",
      ingredients: "آب سیب طبیعی",
      price: 80000,
      photo: "assets/images/menu-items/item010.jpg",
      chefRec: false,
      category: "cold-drinks",
      categoryFa: "نوشیدنی سرد",
  },
  {
      id: 11,
      name: "موهیتو",
      ingredients: "",
      price: 95000,
      photo: "assets/images/menu-items/item011.jpg",
      chefRec: false,
      category: "cold-drinks",
      categoryFa: "نوشیدنی سرد",
  },
  {
      id: 12,
      name: "سینی میوه",
      ingredients: "هندوانه، طالبی، توت فرنگی، گوجه سبز، سیب، آناناس",
      price: 299000,
      photo: "assets/images/menu-items/item012.jpeg",
      chefRec: false,
      category: "desserts",
      categoryFa: "دسر",
  },
  {
      id: 13,
      name: "بستنی رویال",
      ingredients: "۲ اسکوپ بستنی وانیل، ۲ اسکوپ بستنی شکلات، شوکو رول، اوریو",
      price: 140000,
      photo: "assets/images/menu-items/item013.jpg",
      chefRec: false,
      category: "desserts",
      categoryFa: "دسر",
  },
  {
      id: 14,
      name: "چیز کیک پنیری",
      ingredients: "",
      price: 128000,
      photo: "assets/images/menu-items/item014.jpeg",
      chefRec: true,
      category: "desserts",
      categoryFa: "دسر",
  },
  {
      id: 15,
      name: "حمص ناتور",
      ingredients: "۲۰۰ گرم حمص، ارده، نخود، روغن زیتون، نان گرد",
      price: 144000,
      photo: "assets/images/menu-items/item015.jpeg",
      chefRec: true,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 16,
      name: "سوپ قارچ",
      ingredients: "یک نفره، قارچ، دارچین، بشامل، ذرت، شیر، خامه",
      price: 138000,
      photo: "assets/images/menu-items/item016.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 17,
      name: "نان سیر",
      ingredients: "۱۲۰ گرم خمیر پیتزا، سیر، ادویه پنیر پیتزا",
      price: 178000,
      photo: "assets/images/menu-items/item017.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 18,
      name: "سالاد سزار",
      ingredients: "یک نفره، کاهو، سس سزار، پنیر پارمسان وگن، پروتیین سوخاری گیاهی، نان سیر",
      price: 198000,
      photo: "assets/images/menu-items/item018.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 19,
      name: "سالاد مخلوط فرانسوی",
      ingredients: "۱۰۰ گرم مخلوط کاهو پیچ و فرانسوی، مخلوط سیب و پرتقال، مخلوط لوبیا سفید و عروس، مغز گردو، کنجد، مخلوط سه تخمه، سس توت فرنگی",
      price: 228000,
      photo: "assets/images/menu-items/item019.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 20,
      name: "سالاد کینوا",
      ingredients: "یک نفره، کینوا، فلفل قرمز، پیاز، انار، زیتون سبز، گوجه فرنگی، سس مخصوص",
      price: 238000,
      photo: "assets/images/menu-items/item020.jpeg",
      chefRec: false,
      category: "appetizers",
      categoryFa: "پیش غذا",
  },
  {
      id: 21,
      name: "کافه لاته",
      ingredients: "ترکیب اسپرسو دو شات و شیر با فوم کم، ۳۶۰ میلی‌ لیتر",
      price: 84800,
      photo: "assets/images/menu-items/item021.jpeg",
      chefRec: false,
      category: "hot-drinks",
      categoryFa: "نوشیدنی گرم",
  },
  {
      id: 22,
      name: "آمریکانو متوسط",
      ingredients: "ترکیب اسپرسو دو شات و آب جوش، ۳۶۰ میلی‌ لیتر",
      price: 64800,
      photo: "assets/images/menu-items/item022.jpeg",
      chefRec: false,
      category: "hot-drinks",
      categoryFa: "نوشیدنی گرم",
  },
  {
      id: 23,
      name: "کپوچینو",
      ingredients: "ترکیب اسپرسو دو شات و شیر با فوم زیاد، ۳۶۰ میلی‌ لیتر",
      price: 84800,
      photo: "assets/images/menu-items/item023.jpeg",
      chefRec: false,
      category: "hot-drinks",
      categoryFa: "نوشیدنی گرم",
  },
  {
      id: 24,
      name: "قهوه دمی",
      ingredients: "قهوه تک خاستگاه عربیکا، دم آوری با فیلتر کاغذی، ۳۶۰ میلی‌ لیتر",
      price: 64800,
      photo: "assets/images/menu-items/item024.jpeg",
      chefRec: false,
      category: "hot-drinks",
      categoryFa: "نوشیدنی گرم",
  },
  {
      id: 25,
      name: "کورتادو",
      ingredients: "ترکیب اسپرسو دو شات و شیر با فوم کم، ۱۸۰ میلی‌ لیتر",
      price: 77800,
      photo: "assets/images/menu-items/item025.jpeg",
      chefRec: false,
      category: "hot-drinks",
      categoryFa: "نوشیدنی گرم",
  },
  {
      id: 26,
      name: "کافه موکا",
      ingredients: "ترکیب اسپرسو دو شات، شکلات مخصوص لمیز و شیر با فوم کم، ۳۶۰ میلی‌ لیتر",
      price: 95800,
      photo: "assets/images/menu-items/item026.jpeg",
      chefRec: false,
      category: "hot-drinks",
      categoryFa: "نوشیدنی گرم",
  },
  {
      id: 27,
      name: "کارامل ماکیاتو",
      ingredients: "ترکیب اسپرسو دو شات، طعم دهنده وانیل، سس کارامل و شیر با فوم نسبتا زیاد، ۳۶۰ میلی لیتر",
      price: 95800,
      photo: "assets/images/menu-items/item027.jpeg",
      chefRec: false,
      category: "hot-drinks",
      categoryFa: "نوشیدنی گرم",
  },
  {
      id: 28,
      name: "براونی",
      ingredients: "کیک اسفنجی شکلاتی، تاپینگ بریلو کارامل و پودر کاکایو، ۶۰ گرم",
      price: 94800,
      photo: "assets/images/menu-items/item028.jpeg",
      chefRec: false,
      category: "desserts",
      categoryFa: "دسر",
  },
  {
      id: 29,
      name: "کراسان ساده",
      ingredients: "خمیر هزار لایه، کره نیوزلندی، ۹۰ گرم",
      price: 52800,
      photo: "assets/images/menu-items/item029.jpeg",
      chefRec: false,
      category: "desserts",
      categoryFa: "دسر",
  },
  {
      id: 30,
      name: "تارت شکلات فندق",
      ingredients: "نان تارت شکلاتی با مغز شکلات تلخ، سس کارامل نمکی، موس شکلات، تاپینگ پرالین فندق، ۱۲۵ گرم",
      price: 94800,
      photo: "assets/images/menu-items/item030.jpeg",
      chefRec: true,
      category: "desserts",
      categoryFa: "دسر",
  },
  {
      id: 31,
      name: "بشقاب شنیسل مرغ",
      ingredients: "۲۰۰ گرم سینه مرغ گریل شده، یک عدد تخم مرغ نیمرو، ۱۰۰ گرم سس قارچ",
      price: 300000,
      photo: "assets/images/menu-items/item031.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 32,
      name: "بشقاب سبزیجات",
      ingredients: "۱۸۰ گرم پوره سیب زمینی، ۵۰ گرم بادمجان، ۵۰ گرم کدو، فلفل دلمه ای، ۵۰ گرم قارچ، کلم",
      price: 250000,
      photo: "assets/images/menu-items/item032.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 33,
      name: "پاستا آلفردو",
      ingredients: "پاستا یک نفره، ۲۰۰ گرم پنه، ۱۲۰ گرم فیله مرغ گریل شده، قارچ، سس مخصوص",
      price: 250000,
      photo: "assets/images/menu-items/item033.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 34,
      name: "پاستا پستو",
      ingredients: "پاستا یک نفره، ۲۰۰ گرم پنه، ۱۲۰ گرم فیله مرغ گریل شده، قارچ، سس پستو، حریره سیر",
      price: 240000,
      photo: "assets/images/menu-items/item034.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 35,
      name: "پاستا بلونز",
      ingredients: "پاستا یک نفره، ۲۰۰ گرم اسپاگتی، ۱۰۰ گرم گوشت گوساله چرخ شده، پیاز، فلفل دلمه ای، هویج، قارچ، گوجه فرنگی",
      price: 260000,
      photo: "assets/images/menu-items/item031.jpeg",
      chefRec: true,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 36,
      name: "فیله استیک",
      ingredients: "۲۰۰ گرم گوشت فیله گوساله، دورچین: ۱۰۰ گرم پوره سیب زمینی، بادمجان، کلم بروکلی، کدو، قارچ، سس قارچ",
      price: 650000,
      photo: "assets/images/menu-items/item036.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 37,
      name: "استیک مرغ با سس پرتقال",
      ingredients: "۲۵۰ گرم فیله مرغ، دورچین: ۱۰۰ گرم پوره سیب زمینی، بادمجان، کلم بروکلی، کدو، قارچ، سس پرتقال",
      price: 320000,
      photo: "assets/images/menu-items/item037.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 38,
      name: "ساندویچ چاباتا زبان",
      ingredients: "۱۰۰ گرم زبان گوساله تکه ای، سس خامه، قارچ، نان چاباتا",
      price: 260000,
      photo: "assets/images/menu-items/item038.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 39,
      name: "ساندویچ چاباتا مرغ کاری",
      ingredients: "۲۰۰ گرم فیله مرغ تکه ای، کاهو فرانسوی، گوجه فرنگی، سس کاری، نان چاباتا",
      price: 220000,
      photo: "assets/images/menu-items/item039.jpeg",
      chefRec: false,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
  {
      id: 40,
      name: "ساندویچ چاباتا پستو موزارلا",
      ingredients: "۵ گرم ریحان، ۶۰ گرم گوجه فرنگی، ۵۰ گرم سس پستو، پنیر موزارلا، نان چاباتا",
      price: 200000,
      photo: "assets/images/menu-items/item040.jpeg",
      chefRec: true,
      category: "main-dishes",
      categoryFa: "غذای اصلی",
  },
]