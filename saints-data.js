// ============================================================
// SANTO MEMORIAL — SAINTS DATABASE
// ============================================================
// HOW TO ADD A NEW SAINT:
// 1. Copy one of the entries below (from the { to the }, including the comma)
// 2. Paste it at the END of the list, before the final ];
// 3. Fill in the details for your new saint
// 4. Save the file and upload to GitHub
//
// FIELDS EXPLAINED:
//   id       → a unique short name, no spaces (e.g. "thomas-aquinas")
//   name     → full name of the saint
//   feast    → feast day (e.g. "January 28")
//   month    → just the month name (e.g. "January")
//   born     → year of birth (or "Unknown")
//   died     → year of death
//   origin   → country or region
//   patronOf → what they are patron of (array, can have multiple)
//   summary  → a 1-2 sentence brief description (shown on cards)
//   story    → the full story (shown on the saint's own page)
//   notable  → key reasons they are notable (array of short points)
//   featured → true = shown on homepage, false = only in full list
// ============================================================

const saintsData = [

  {
    id: "francis-of-assisi",
    name: "Saint Francis of Assisi",
    feast: "October 4",
    month: "October",
    born: "1181",
    died: "1226",
    origin: "Italy",
    patronOf: ["Animals", "Ecology", "Italy", "Merchants"],
    summary: "A wealthy young man who renounced his riches to embrace radical poverty, founding the Franciscan Order and transforming the Church through his joyful love of creation.",
    story: "Born Giovanni di Pietro di Bernardone in Assisi, Italy, Francis grew up the son of a wealthy cloth merchant. In his youth he was known for his love of fine clothes, parties, and troubadour songs. After a period of military service and a serious illness, Francis experienced a profound conversion. He famously kissed a leper, rebuilt a crumbling church stone by stone, and heard Christ speak to him from the San Damiano crucifix: 'Francis, go and repair my house.' He renounced his inheritance publicly before the bishop of Assisi, embracing Lady Poverty as his life's companion. He gathered followers and founded the Order of Friars Minor, later known as the Franciscans. Francis had a mystical relationship with all of creation — he preached to birds, tamed a wolf, and composed the celebrated Canticle of the Creatures. In 1224, while praying on Mount La Verna, he received the stigmata — the wounds of Christ — in his hands, feet, and side. He died in 1226, singing.",
    notable: [
      "Founded the Franciscan Order",
      "First person recorded to receive the stigmata",
      "Authored the Canticle of the Creatures, one of the earliest works of Italian literature",
      "Known for his radical embrace of poverty and love of nature",
      "Patron saint of animals and ecology"
    ],
    featured: true
  },

  {
    id: "teresa-of-avila",
    name: "Saint Teresa of Ávila",
    feast: "October 15",
    month: "October",
    born: "1515",
    died: "1582",
    origin: "Spain",
    patronOf: ["Spain", "Headache sufferers", "Chess players", "Catholic writers"],
    summary: "A Spanish mystic and Carmelite nun who reformed her religious order and left an enduring legacy of spiritual writing, becoming a Doctor of the Church.",
    story: "Teresa Sánchez de Cepeda Dávila y Ahumada was born in Ávila, Spain, in 1515. Entering the Carmelite convent at age twenty, she spent years in spiritual mediocrity until, at forty, she experienced a dramatic deepening of her prayer life before an image of the suffering Christ. She went on to describe extraordinary mystical experiences, including levitation and locutions, which she analyzed with remarkable psychological clarity in her writings. Convinced that her Carmelite convent had grown too lax, she undertook the heroic task of reforming the order. Despite fierce opposition, she founded seventeen convents of the Discalced (Barefoot) Carmelites, traveling across Spain in ox carts, dealing with hostile superiors and difficult weather with characteristic humor and determination. She collaborated with Saint John of the Cross in reforming the male branch of the order. Her spiritual masterpieces — The Interior Castle and The Way of Perfection — remain among the greatest works of Christian mysticism. She was declared a Doctor of the Church in 1970, one of the first women to receive this honor.",
    notable: [
      "First woman declared a Doctor of the Church (1970)",
      "Reformed the Carmelite Order",
      "Author of The Interior Castle and The Way of Perfection",
      "Described with precision the stages of mystical prayer",
      "Founded 17 Discalced Carmelite convents"
    ],
    featured: true
  },

  {
    id: "thomas-aquinas",
    name: "Saint Thomas Aquinas",
    feast: "January 28",
    month: "January",
    born: "1225",
    died: "1274",
    origin: "Italy",
    patronOf: ["Students", "Schools", "Universities", "Theologians", "Philosophers"],
    summary: "The greatest theologian of the medieval Church, whose Summa Theologica synthesized Christian faith with Aristotelian reason and shaped Catholic thought for centuries.",
    story: "Thomas was born into a noble family near Aquino, Italy. Against his family's fierce resistance — they even kidnapped and imprisoned him — he joined the newly founded Dominican Order. He studied under Albert the Great in Cologne and Paris, where fellow students nicknamed him 'the Dumb Ox' for his quiet demeanor. Albert reportedly said: 'We call this lad a dumb ox, but his bellowing in doctrine will one day resound throughout the world.' That prophecy proved spectacularly accurate. Thomas went on to produce one of the most ambitious intellectual projects in human history: the Summa Theologica, an exhaustive synthesis of Christian theology and Aristotelian philosophy that runs to millions of words. He sought to show that faith and reason are not enemies but partners. Shortly before his death, during Mass, he reportedly received a mystical vision and declared that everything he had written seemed 'like straw' compared to what he had seen. He left the Summa unfinished. He was canonized in 1323 and declared a Doctor of the Church.",
    notable: [
      "Author of the Summa Theologica, one of the greatest theological works ever written",
      "Doctor of the Church, known as the 'Angelic Doctor'",
      "Synthesized Christian theology with Aristotelian philosophy",
      "Patron saint of students and universities",
      "His thought (Thomism) remains central to Catholic philosophy"
    ],
    featured: true
  },

  {
    id: "joan-of-arc",
    name: "Saint Joan of Arc",
    feast: "May 30",
    month: "May",
    born: "1412",
    died: "1431",
    origin: "France",
    patronOf: ["France", "Soldiers", "Prisoners", "People ridiculed for their faith"],
    summary: "A peasant girl who led French armies to decisive victories during the Hundred Years' War, guided by heavenly voices, and was burned at the stake at age nineteen.",
    story: "Jeanne d'Arc was born in Domrémy, a small village in northeastern France, during the Hundred Years' War between France and England. From the age of thirteen she began hearing the voices of Saint Michael, Saint Catherine, and Saint Margaret, who told her that God had chosen her to drive the English from France and ensure the coronation of the French Dauphin. With extraordinary courage, she persuaded the Dauphin to give her command of his army. Dressed in white armor, she led French forces to lift the siege of Orléans in just nine days — an achievement that experienced commanders had been unable to accomplish for months. Her campaigns turned the tide of the war. She was captured by Burgundian allies of the English in 1430 and sold. Put on trial for heresy and cross-dressing by a pro-English ecclesiastical court, she defended herself with astonishing intelligence and eloquence. She was burned at the stake in Rouen on May 30, 1431, at approximately nineteen years of age. Twenty-five years later, a retrial declared her innocent. She was canonized in 1920.",
    notable: [
      "Led French armies to crucial victories at age seventeen",
      "Guided, she said, by divine voices from saints",
      "Tried and executed for heresy at age nineteen",
      "Posthumously exonerated; canonized nearly 500 years after her death",
      "National heroine of France and patron saint of the French"
    ],
    featured: true
  },

  {
    id: "augustine-of-hippo",
    name: "Saint Augustine of Hippo",
    feast: "August 28",
    month: "August",
    born: "354",
    died: "430",
    origin: "North Africa (modern Algeria)",
    patronOf: ["Theologians", "Brewers", "Printers", "Sore eyes"],
    summary: "One of the most influential theologians in Christian history, whose Confessions remains one of the world's great spiritual autobiographies and whose thought shaped Western Christianity.",
    story: "Aurelius Augustinus was born in Thagaste (modern Algeria) to a devout Christian mother, Monica, and a pagan father. A brilliant student, he pursued rhetoric and philosophy while living a dissolute life and fathering a son outside marriage. For nine years he followed the Manichaean sect. His restless intellectual and spiritual journey took him to Carthage, Rome, and Milan, where he came under the influence of Bishop Ambrose. In a garden in Milan in 386, after years of resistance, he experienced his famous conversion while reading Paul's Letter to the Romans: 'Not in rioting and drunkenness... but put on the Lord Jesus Christ.' He was baptized at Easter 387. Returning to Africa, he was ordained a priest and eventually became Bishop of Hippo. His prodigious output — over five million words survive — includes the Confessions, the City of God, and hundreds of sermons and letters. His theology of grace, original sin, and the Trinity shaped not only Catholic doctrine but, through reformers like Luther and Calvin, all of Western Christianity.",
    notable: [
      "Author of the Confessions, one of the first great autobiographies",
      "Wrote City of God, foundational to Christian political thought",
      "Doctor of the Church; shaped the doctrine of grace and original sin",
      "His mother, Saint Monica, is also a canonized saint",
      "Influenced both Catholic and Protestant theology profoundly"
    ],
    featured: false
  },

  {
    id: "nicholas-of-myra",
    name: "Saint Nicholas of Myra",
    feast: "December 6",
    month: "December",
    born: "270",
    died: "343",
    origin: "Lycia (modern Turkey)",
    patronOf: ["Children", "Sailors", "Merchants", "Falsely accused", "Russia", "Greece"],
    summary: "A fourth-century bishop renowned for his generosity to the poor, whose legend of secret gift-giving evolved over centuries into the worldwide figure of Santa Claus.",
    story: "Nicholas was born to wealthy parents in Patara, Lycia (in what is now Turkey), who died during an epidemic while Nicholas was still young. Raised devoutly Christian, he used his entire inheritance to help the needy, the sick, and the suffering. He became Bishop of Myra while still a young man. The most beloved legend about him tells of a poor man with three daughters who could not afford their dowries — and without dowries, they faced a life of destitution. Nicholas secretly tossed bags of gold coins through the man's window on three successive nights, saving all three daughters. One bag, according to some versions, landed in a stocking hung by the fire to dry. He reportedly attended the Council of Nicaea in 325 and was so incensed by Arius's denial of Christ's divinity that he slapped him across the face — earning him temporary imprisonment before being restored by a vision of Christ and the Virgin Mary. His reputation for generosity and miracles spread across Europe. The Dutch Sinterklaas tradition traveled to America and evolved into Santa Claus.",
    notable: [
      "The historical inspiration for Santa Claus",
      "Known for his extraordinary generosity to the poor",
      "Patron saint of children, sailors, and many nations including Russia",
      "Legendary attendee of the Council of Nicaea",
      "One of the most popular saints in both Eastern and Western Christianity"
    ],
    featured: false
  }

];
// ============================================================
// END OF SAINTS DATABASE
// ============================================================
