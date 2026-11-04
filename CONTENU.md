# ROI DES ROIS – Contenu du site, pour validation

Textes en français, arabe et anglais, et catalogue de location. Les textes sont modifiables dans `locales/fr.json`, `locales/ar.json`, `locales/en.json` ; le catalogue dans `data/location.json`.

## À demander au client

1. **Prénom et nom du gérant** (mentions légales, page « La maison », schéma Google).
2. **Liste exacte du matériel de location** : nom, quantité disponible, couleurs, dimensions, **prix** (et unité : pièce, ensemble, mètre, table), caution. → `data/location.json`
3. **Formules de décoration** : existe-t-il des formules ou des « à partir de » pour la décoration complète et l'allée ? Ce qui est compris (livraison, installation, démontage, fleurs).
4. **Zone de déplacement** : villes confirmées, frais de déplacement éventuels, distance maximale. (Le site cite aujourd'hui Nantes, Saint-Herblain, Rezé, Orvault, Saint-Sébastien-sur-Loire, Carquefou, Vertou, Saint-Nazaire : **à confirmer**.)
5. **SIRET**, forme juridique, adresse du dépôt ou du siège (mentions légales).
6. **Vrais avis clients** (prénom, type d'événement, ville, avec leur accord) ou lien vers une fiche Google : l'emplacement est prêt, aucun avis n'a été inventé.
7. **Vidéos et photos en bonne qualité** (originaux du téléphone, pas Instagram) : les visuels actuels sont extraits des reels en 720 px de large ; avec des originaux, le hero peut passer en grande photo ou en vidéo plein écran.
8. **Adresse e-mail** qui doit recevoir la copie des demandes de devis (Resend, voir README).
9. **Dates déjà réservées** si vous souhaitez prévenir les clients → `data/dates.json`.
10. **Nom de domaine** souhaité (ex. roidesrois-deco.fr).

## Choix faits sur les visuels

- Utilisés : les vraies réalisations (salons bordeaux, bleu canard et émeraude, salle avec scène des mariés, tables dressées, allée au tapis rouge, arches et lanternes, coin henné).
- Écartés : les visuels qui semblent générés par IA (salon dans un paysage de montagne, allée dans un jardin, lanternes dans le noir, palais doré), la publicité « R·H Traiteur », les montages flous ou avec autocollants, les doublons, le logo marqué « Contenu généré par l'IA » (redessiné en SVG).
- Le mot « Nantes » incrusté sur certaines vidéos a été retiré par recadrage.

## Catalogue de location (data/location.json)

| Famille | Article (FR) | العربية | English | Prix | Unité |
|---|---|---|---|---|---|
| Salons marocains | **Salon marocain bordeaux brodé d'or** – Banquettes en velours grenat, tenture murale et coussins brodés au fil doré. | صالون مغربي عنابي مطرز بالذهب | Burgundy Moroccan salon, gold embroidery | À REMPLIR | l'ensemble |
| Salons marocains | **Salon marocain bleu canard** – Velours bleu canard et broderies crème, tenture assortie. | صالون مغربي أزرق بترولي | Teal Moroccan salon | À REMPLIR | l'ensemble |
| Salons marocains | **Coussins et polochons brodés** – Pour compléter un salon ou habiller un coin photo. | وسائد ومساند مطرزة | Embroidered cushions & bolsters | À REMPLIR | la pièce |
| Tables & plateaux | **Table basse ronde habillée de velours** – Émeraude, bordeaux ou fuchsia, galons dorés. | طاولة مستديرة منخفضة مكسوة بالمخمل | Round low table in velvet | À REMPLIR | la pièce |
| Tables & plateaux | **Plateau et service à henné** – Coupelles, flacons et coussin brodé pour la cérémonie du henné. | صينية وطقم الحناء | Henna tray & set | À REMPLIR | l'ensemble |
| Tables & plateaux | **Théière et service à thé dorés** – Théière ciselée, plateau et verres pour le thé à la menthe. | إبريق وطقم شاي ذهبي | Gold teapot & tea service | À REMPLIR | l'ensemble |
| Lanternes & lumière | **Lanternes dorées ciselées** – Au sol le long de l'allée ou posées sur les tables. | فوانيس ذهبية منقوشة | Chased gold lanterns | À REMPLIR | la pièce |
| Lanternes & lumière | **Petites lanternes de table** – Métal doré ajouré, pour les plateaux et les salons. | فوانيس صغيرة للطاولة | Small table lanterns | À REMPLIR | la pièce |
| Allée & cérémonie | **Tapis rouge d'allée à médaillons** – Pour l'entrée des mariés, en salle ou en extérieur. | سجاد أحمر للممر بزخارف | Red aisle runner with medallions | À REMPLIR | le mètre |
| Allée & cérémonie | **Arches dorées fleuries** – Arches en métal doré, compositions de fleurs blanches au sommet. | أقواس ذهبية مزينة بالورود | Gold arches with flowers | À REMPLIR | la paire |
| Allée & cérémonie | **Colonnes et vasques dorées** – Colonnes cannelées et vasques garnies de fleurs. | أعمدة وأحواض ذهبية | Gold columns & urns | À REMPLIR | la pièce |
| Allée & cérémonie | **Arche lumineuse et bouquet de roses** – Cadre doré éclairé, roses rouges et fleurs blanches. | قوس مضيء وباقة ورد | Lit arch & rose arrangement | À REMPLIR | la pièce |
| Allée & cérémonie | **Scène et trône des mariés** – Canapé capitonné, arcs lumineux et tapis, montés sur place. | منصة وعرش العروسين | Couple's stage & throne | À REMPLIR | l'ensemble |
| Arts de la table | **Centre de table fleuri sur pied doré** – Roses blanches ou rouges, bougies et plateau miroir. | تنسيق زهور للطاولة على حامل ذهبي | Flower centrepiece on gold stand | À REMPLIR | la table |
| Arts de la table | **Nappes et surnappes à motifs dorés** – Rose poudré, turquoise, blanc : à assortir à votre thème. | مفارش طاولات بزخارف ذهبية | Tablecloths & overlays with gold motifs | À REMPLIR | la table |
| Arts de la table | **Verres ciselés et couverts dorés** – Assiettes de présentation, verres à liseré doré, couverts or. | كؤوس منقوشة وأدوات مائدة ذهبية | Cut glasses & gold cutlery | À REMPLIR | le couvert |

## Tous les textes

| Clé | Français | العربية | English |
|---|---|---|---|
| `meta.title` | Décoration de mariage marocain à Nantes | Roi des Rois Déco | تزيين الأعراس المغربية في نانت | Roi des Rois Déco | Moroccan Wedding Decoration in Nantes | Roi des Rois Déco |
| `meta.description` | Décoration de mariages marocains, fiançailles et soirées henné à Nantes et en Loire-Atlantique : salons en velours brodé d'or, allée et tapis rouge, arches dorées, location de matériel. Devis sur WhatsApp. | تزيين الأعراس المغربية والخطوبة وليالي الحناء في نانت ولوار أتلانتيك: صالونات مخملية مطرزة بالذهب، ممر وسجاد أحمر، أقواس ذهبية وكراء المعدات. اطلبوا عرض السعر عبر واتساب. | Moroccan wedding, engagement and henna night decoration in Nantes and Loire-Atlantique: gold-embroidered velvet salons, red-carpet aisles, gold arches and equipment hire. Request a quote on WhatsApp. |
| `meta.legalTitle` | Mentions légales | Roi des Rois Déco | الإشعارات القانونية | Roi des Rois Déco | Legal notice | Roi des Rois Déco |
| `meta.legalDescription` | Mentions légales et protection des données du site Roi des Rois Déco, décoration événementielle à Nantes. | الإشعارات القانونية وحماية المعطيات لموقع Roi des Rois Déco لتزيين الحفلات في نانت. | Legal notice and data protection for Roi des Rois Déco, event decoration in Nantes. |
| `nav.decoration` | Décoration | التزيين | Decoration |
| `nav.allee` | Allée & cérémonie | الممر والحفل | Aisle & ceremony |
| `nav.location` | Location | الكراء | Hire |
| `nav.realisations` | Réalisations | أعمالنا | Our work |
| `nav.contact` | Contact | اتصل بنا | Contact |
| `nav.quote` | Demander un devis | اطلب عرض سعر | Request a quote |
| `nav.quoteShort` | Devis | عرض سعر | Quote |
| `nav.instagram` | Instagram de Roi des Rois | إنستغرام Roi des Rois | Roi des Rois on Instagram |
| `nav.menu` | Menu | القائمة | Menu |
| `nav.close` | Fermer le menu | إغلاق القائمة | Close menu |
| `nav.langs` | Langue du site | لغة الموقع | Site language |
| `nav.skip` | Aller au contenu | الانتقال إلى المحتوى | Skip to content |
| `nav.home` | Roi des Rois, accueil | Roi des Rois، الصفحة الرئيسية | Roi des Rois, home |
| `intro.skip` | Passer | تخطي | Skip |
| `brand.name` | Roi des Rois | Roi des Rois | Roi des Rois |
| `brand.sub` | Décoration événementielle & mariages | Décoration événementielle & mariages | Décoration événementielle & mariages |
| `brand.ar` | تزيين الحفلات والأعراس | تزيين الحفلات والأعراس | تزيين الحفلات والأعراس |
| `hero.eyebrow` | Décoration marocaine · Mariages · Nantes | ديكور مغربي · أعراس · نانت | Moroccan decoration · Weddings · Nantes |
| `hero.title` | L'élégance moderne, l'âme de la tradition | أناقة عصرية بروح التقاليد | Modern elegance, the soul of tradition |
| `hero.lead` | Salons en velours brodé d'or, lanternes, tapis et arches dorées pour vos mariages, fiançailles et soirées henné. | صالونات من المخمل المطرز بالذهب، فوانيس وسجاد وأقواس ذهبية لأعراسكم وخطوباتكم وليالي الحناء. | Gold-embroidered velvet salons, lanterns, rugs and gold arches for your weddings, engagements and henna nights. |
| `hero.quote` | Demander un devis | اطلب عرض سعر | Request a quote |
| `hero.whatsapp` | WhatsApp | واتساب | WhatsApp |
| `hero.scroll` | Découvrir | اكتشفوا | Discover |
| `hero.alts.0` | Salle de réception à Nantes, scène des mariés et tapis rouge | قاعة حفلات في نانت، منصة العروسين وسجاد أحمر | Reception hall in Nantes, the couple's stage and a red carpet |
| `hero.alts.1` | Salon marocain en velours bordeaux brodé d'or sous un lustre en cristal | صالون مغربي من المخمل العنابي المطرز بالذهب تحت ثريا من الكريستال | Burgundy velvet Moroccan salon embroidered in gold beneath a crystal chandelier |
| `hero.alts.2` | Allée de cérémonie en extérieur, tapis rouge, arches dorées et lanternes | ممر حفل في الهواء الطلق، سجاد أحمر وأقواس ذهبية وفوانيس | Outdoor ceremony aisle with red carpet, gold arches and lanterns |
| `manifesto.eyebrow` | La maison | عن الدار | The house |
| `manifesto.title` | Une tradition qui se reçoit comme un palais | الجمال يكمن في التفاصيل والأصالة | A tradition received like a palace |
| `manifesto.body` | Roi des Rois habille vos fêtes à la manière des grandes maisons marocaines : velours profonds, broderies au fil d'or, cuivres ciselés et lumière douce des lanternes. Nous composons chaque décor pour votre salle et vos couleurs, du salon d'honneur jusqu'au dernier verre posé sur la table, à Nantes et dans toute la Loire-Atlantique. | تُلبس Roi des Rois مناسباتكم حُلّة البيوت المغربية العريقة: مخمل عميق اللون، تطريز بخيوط الذهب، نحاس منقوش وضوء دافئ ينساب من الفوانيس. نصمم كل ديكور حسب قاعتكم وألوانكم، من صالون الاستقبال إلى آخر كأس على المائدة، في نانت وفي كل أنحاء لوار أتلانتيك. | Roi des Rois dresses your celebrations the way the great Moroccan houses do: deep velvets, gold-thread embroidery, chased brass and the soft glow of lanterns. Every setting is composed for your venue and your colours, from the salon of honour to the last glass on the table, in Nantes and across Loire-Atlantique. |
| `manifesto.signature` | Sublimez vos événements : entre élégance moderne et tradition maghrébine. | إبداع مغربي أصيل يضيف لمسة من الفخامة والدفء لكل مناسباتكم وأفراحكم. | Elevate your events: modern elegance meets Maghreb tradition. |
| `services.eyebrow` | Nos prestations | خدماتنا | What we do |
| `services.title` | Trois façons de vous accompagner | ثلاث طرق لمرافقتكم | Three ways we can help |
| `services.more` | En parler | تواصلوا معنا | Talk to us |
| `services.items.0.title` | Décoration complète | تزيين كامل | Full decoration |
| `services.items.0.sub` | Mariages · fiançailles · soirées henné | أعراس · خطوبة · ليالي الحناء | Weddings · engagements · henna nights |
| `services.items.0.body` | Nous pensons l'ensemble de la salle : salons marocains, tables dressées, centres floraux, coin henné et scène des mariés. Nous livrons, installons et démontons. | نتكفل بالقاعة كلها: صالونات مغربية، موائد مجهزة، تنسيقات ورد، ركن الحناء ومنصة العروسين. نوصل ونركّب ونفكّ بعد الحفل. | We design the whole room: Moroccan salons, dressed tables, floral centrepieces, a henna corner and the couple's stage. We deliver, set up and take down. |
| `services.items.0.points.0` | Visite ou plan de la salle | زيارة القاعة أو مخططها | Venue visit or floor plan |
| `services.items.0.points.1` | Choix des couleurs et du thème | اختيار الألوان والطابع | Colours and theme |
| `services.items.0.points.2` | Installation et démontage | التركيب والتفكيك | Set-up and take-down |
| `services.items.1.title` | Allée & cérémonie | الممر والحفل | Aisle & ceremony |
| `services.items.1.sub` | Tapis rouge · arches dorées · lanternes | سجاد أحمر · أقواس ذهبية · فوانيس | Red carpet · gold arches · lanterns |
| `services.items.1.body` | Une entrée qui marque les esprits : tapis rouge à médaillons, arches et colonnes dorées, vasques fleuries et lanternes de part et d'autre, en salle comme en extérieur. | دخول لا يُنسى: سجاد أحمر بزخارف، أقواس وأعمدة ذهبية، أحواض ورد وفوانيس على الجانبين، داخل القاعة أو في الهواء الطلق. | An entrance people remember: a medallion red carpet, gold arches and columns, flower urns and lanterns on either side, indoors or out. |
| `services.items.1.points.0` | Entrée des mariés | دخول العروسين | The couple's entrance |
| `services.items.1.points.1` | Cérémonie en extérieur | حفل في الهواء الطلق | Outdoor ceremonies |
| `services.items.1.points.2` | Compositions florales | تنسيقات الورود | Floral arrangements |
| `services.items.2.title` | Location de matériel | كراء المعدات | Equipment hire |
| `services.items.2.sub` | Pour décorer vous-même | لتزيّنوا بأنفسكم | Decorate it yourself |
| `services.items.2.body` | Salons, coussins, tables basses, plateaux à henné, lanternes, tapis, arches : composez votre sélection dans le catalogue, nous préparons le matériel pour votre date. | صالونات، وسائد، طاولات منخفضة، صواني الحناء، فوانيس، سجاد وأقواس: اختاروا ما يناسبكم من الكتالوج ونجهّز لكم المعدات ليوم حفلكم. | Salons, cushions, low tables, henna trays, lanterns, rugs, arches: build your selection from the catalogue and we prepare everything for your date. |
| `services.items.2.points.0` | Catalogue en ligne | كتالوج على الإنترنت | Online catalogue |
| `services.items.2.points.1` | Retrait ou livraison | استلام أو توصيل | Collection or delivery |
| `services.items.2.points.2` | Conseils de mise en place | نصائح للتركيب | Set-up advice |
| `details.eyebrow` | Le savoir-faire | الحِرفة | Craft |
| `details.title` | La beauté est dans les détails | الجمال يكمن في التفاصيل | Beauty lies in the details |
| `details.body` | Un galon bien tendu, une broderie dans l'axe, un verre au liseré d'or aligné sur son couvert. Ce sont ces gestes, répétés table après table, qui donnent à une salle l'air d'un palais. | شريط مشدود بإتقان، تطريز في مكانه الصحيح، كأس بحافة ذهبية مصفوف مع أدواته. هذه اللمسات، مائدة بعد مائدة، هي التي تجعل القاعة تبدو كقصر. | A trim pulled taut, embroidery set true, a gold-rimmed glass lined up with its cutlery. Repeated table after table, these small gestures are what make a room feel like a palace. |
| `details.alt` | Gros plan d'un salon en velours bordeaux brodé de fil d'or | صورة قريبة لصالون من المخمل العنابي المطرز بخيوط الذهب | Close-up of a burgundy velvet salon embroidered in gold thread |
| `events.eyebrow` | Vos événements | مناسباتكم | Your events |
| `events.title` | Chaque fête a son décor | لكل فرحة ديكورها | Every celebration has its setting |
| `events.items.0.id` | mariage | mariage | mariage |
| `events.items.0.title` | Mariage | العرس | Wedding |
| `events.items.0.body` | Scène des mariés, allée, salons et tables : un décor pensé du premier pas des invités jusqu'à la dernière danse. | منصة العروسين والممر والصالونات والموائد: ديكور متكامل من أول خطوة للضيوف إلى آخر رقصة. | Stage, aisle, salons and tables: a setting planned from your guests' first step to the last dance. |
| `events.items.0.alt` | Scène des mariés éclairée, canapé blanc et lanternes dorées | منصة العروسين المضاءة، أريكة بيضاء وفوانيس ذهبية | Lit wedding stage with a white sofa and gold lanterns |
| `events.items.1.id` | fiancailles | fiancailles | fiancailles |
| `events.items.1.title` | Fiançailles | الخطوبة | Engagement |
| `events.items.1.body` | Un salon brodé, des lanternes et des plateaux dorés pour recevoir les deux familles avec élégance. | صالون مطرز وفوانيس وصواني ذهبية لاستقبال العائلتين بكل أناقة. | An embroidered salon, lanterns and gold trays to welcome both families in style. |
| `events.items.1.alt` | Salon marocain bleu canard et table ronde émeraude garnie de lanternes | صالون مغربي أزرق بترولي وطاولة مستديرة زمردية بالفوانيس | Teal Moroccan salon and an emerald round table with lanterns |
| `events.items.2.id` | henne | henne | henne |
| `events.items.2.title` | Soirée henné | ليلة الحناء | Henna night |
| `events.items.2.body` | Couleurs vives, tentures ouvragées, plateau et coussin à henné : la tradition dans toute sa chaleur. | ألوان زاهية وستائر مزخرفة وصينية ووسادة الحناء: التقاليد بكل دفئها. | Vivid colours, ornate hangings, the henna tray and cushion: tradition in all its warmth. |
| `events.items.2.alt` | Décor de soirée henné, arcades vertes et rouges, plateaux dorés | ديكور ليلة الحناء، أقواس خضراء وحمراء وصوانٍ ذهبية | Henna night setting with green and red arches and gold trays |
| `events.items.3.id` | reception | reception | reception |
| `events.items.3.title` | Réception privée | حفل خاص | Private reception |
| `events.items.3.body` | Anniversaires, naissances, repas de famille : des tables dressées avec soin, à la mesure de votre salle. | أعياد ميلاد، عقيقة، لمّة عائلية: موائد مجهزة بعناية على قدر قاعتكم. | Birthdays, new arrivals, family gatherings: tables dressed with care, scaled to your venue. |
| `events.items.3.alt` | Table ronde dressée en rose et blanc, bougies et bouquet blanc | مائدة مستديرة بالوردي والأبيض، شموع وباقة بيضاء | Round table dressed in pink and white with candles and white flowers |
| `rental.eyebrow` | Location de matériel | كراء المعدات | Equipment hire |
| `rental.title` | Le catalogue | الكتالوج | The catalogue |
| `rental.intro` | Choisissez vos pièces, ajoutez-les à votre demande : nous vous confirmons la disponibilité et le tarif pour votre date. | اختاروا القطع وأضيفوها إلى طلبكم: نؤكد لكم التوفر والسعر حسب تاريخ حفلكم. | Pick your pieces and add them to your request: we'll confirm availability and price for your date. |
| `rental.all` | Tout | الكل | All |
| `rental.add` | Ajouter à ma demande | أضف إلى طلبي | Add to my request |
| `rental.added` | Dans ma demande | في طلبي | In my request |
| `rental.remove` | Retirer | إزالة | Remove |
| `rental.priceOnRequest` | Prix sur demande | السعر عند الطلب | Price on request |
| `rental.from` | {price} € {unit} | {price} € {unit} | €{price} {unit} |
| `rental.count` | {n} article(s) dans votre demande | {n} قطعة في طلبكم | {n} item(s) in your request |
| `rental.goToForm` | Finaliser ma demande | إتمام الطلب | Complete my request |
| `rental.note` | Tarifs indicatifs hors livraison et installation. Caution demandée pour la location. | الأسعار تقريبية دون التوصيل والتركيب. يُطلب ضمان عند الكراء. | Guide prices, excluding delivery and set-up. A deposit is required for hire. |
| `gallery.eyebrow` | Réalisations | أعمالنا | Our work |
| `gallery.title` | Nos décors, à Nantes et alentours | ديكوراتنا في نانت وضواحيها | Our settings, in and around Nantes |
| `gallery.intro` | Quelques salles que nous avons habillées. Retrouvez chaque nouvelle réalisation sur Instagram. | بعض القاعات التي زيّنّاها. تابعوا كل جديد على إنستغرام. | A few of the rooms we have dressed. Every new project goes up on Instagram. |
| `gallery.follow` | Suivre @roidesrois.deco44 | تابعوا @roidesrois.deco44 | Follow @roidesrois.deco44 |
| `gallery.open` | Agrandir la photo | تكبير الصورة | Enlarge photo |
| `gallery.close` | Fermer | إغلاق | Close |
| `gallery.prev` | Photo précédente | الصورة السابقة | Previous photo |
| `gallery.next` | Photo suivante | الصورة التالية | Next photo |
| `gallery.alts.table-turquoise` | Table dressée en turquoise, couverts dorés et centre fleuri | مائدة بالفيروزي، أدوات مائدة ذهبية وتنسيق ورد | Table dressed in turquoise with gold cutlery and flowers |
| `gallery.alts.table-rose-turquoise` | Table ronde à nappe rose et turquoise, bouquet blanc sur pied doré | مائدة مستديرة بمفرش وردي وفيروزي وباقة بيضاء على حامل ذهبي | Round table in pink and turquoise, white bouquet on a gold stand |
| `gallery.alts.table-rose-bougies` | Table rose et blanche, bougies et roses blanches | مائدة بالوردي والأبيض، شموع وورود بيضاء | Pink and white table with candles and white roses |
| `gallery.alts.table-blanche` | Table blanche, serviettes pliées et bouquet blanc | مائدة بيضاء، مناديل مطوية وباقة بيضاء | White table with folded napkins and a white bouquet |
| `gallery.alts.table-roses-rouges` | Salle de réception, tables aux roses rouges et lampes à franges | قاعة حفلات، موائد بالورود الحمراء ومصابيح بأهداب | Reception hall, tables with red roses and fringed lamps |
| `gallery.alts.salle-reception` | Vue d'ensemble d'une salle décorée, scène et tables rondes | منظر عام لقاعة مزينة، المنصة والموائد المستديرة | Overview of a decorated hall with stage and round tables |
| `gallery.alts.centre-roses-rouges` | Centre de table aux roses rouges sur pied doré, verres ciselés | تنسيق ورود حمراء على حامل ذهبي وكؤوس منقوشة | Red rose centrepiece on a gold stand with cut glasses |
| `gallery.alts.centre-blanc-bougies` | Bouquet blanc sur pied doré entouré de bougies | باقة بيضاء على حامل ذهبي تحيط بها الشموع | White bouquet on a gold stand surrounded by candles |
| `gallery.alts.scene-salon-blanc` | Scène des mariés, canapé blanc capitonné et arcades lumineuses | منصة العروسين، أريكة بيضاء مبطنة وأقواس مضيئة | The couple's stage, tufted white sofa and lit arches |
| `gallery.alts.bordeaux-banquette` | Salon marocain bordeaux, tenture et coussins brodés d'or | صالون مغربي عنابي، ستارة ووسائد مطرزة بالذهب | Burgundy Moroccan salon, hanging and gold-embroidered cushions |
| `gallery.alts.emeraude-table-lanternes` | Table basse émeraude et lanternes dorées | طاولة منخفضة زمردية وفوانيس ذهبية | Emerald low table with gold lanterns |
| `gallery.alts.allee-colonne-doree` | Allée extérieure, colonne et vasque dorées fleuries | ممر خارجي، عمود وحوض ذهبي مزين بالورود | Outdoor aisle with gold column and flower urn |
| `gallery.alts.arche-florale` | Arche lumineuse dorée et bouquet de roses rouges | قوس ذهبي مضيء وباقة ورود حمراء | Lit gold arch and red rose arrangement |
| `gallery.alts.theiere-doree` | Théière dorée ciselée posée sur un plateau | إبريق شاي ذهبي منقوش على صينية | Chased gold teapot on a tray |
| `gallery.alts.henne-salon-couleurs` | Salon de henné aux tentures rouges, vertes et dorées | صالون الحناء بستائر حمراء وخضراء وذهبية | Henna salon with red, green and gold hangings |
| `gallery.alts.tapis-rouge-scene` | Tapis rouge menant à la scène des mariés | سجاد أحمر يقود إلى منصة العروسين | Red carpet leading to the couple's stage |
| `gallery.alts.velours-canard-brode` | Velours bleu canard brodé de motifs crème | مخمل أزرق بترولي مطرز بزخارف كريمية | Teal velvet embroidered with cream motifs |
| `gallery.alts.verres-couverts-or` | Verre ciselé à liseré doré, assiettes et couverts or | كأس منقوش بحافة ذهبية، صحون وأدوات مائدة ذهبية | Cut glass with gold rim, plates and gold cutlery |
| `reviews.eyebrow` | Ils nous ont fait confiance | ثقتكم تشرفنا | They trusted us |
| `reviews.title` | Avis clients | آراء الزبائن | Client reviews |
| `reviews.empty` | Les avis de nos clients arrivent bientôt. En attendant, nos réalisations parlent sur Instagram. | آراء زبائننا قريباً هنا. في الأثناء، أعمالنا تتحدث عنا على إنستغرام. | Client reviews are coming soon. Meanwhile, our work speaks for itself on Instagram. |
| `reviews.cta` | Voir Instagram | زوروا إنستغرام | See Instagram |
| `zone.eyebrow` | Zone d'intervention | منطقة العمل | Where we work |
| `zone.title` | Nantes et alentours | نانت وضواحيها | Nantes and the surrounding area |
| `zone.body` | Nous intervenons à Nantes et dans les communes voisines, et nous nous déplaçons volontiers plus loin en Loire-Atlantique sur demande. | نعمل في نانت والبلديات المجاورة، ونتنقل بكل سرور إلى مناطق أبعد في لوار أتلانتيك عند الطلب. | We work in Nantes and neighbouring towns, and are happy to travel further across Loire-Atlantique on request. |
| `zone.cities.0` | Nantes | نانت | Nantes |
| `zone.cities.1` | Saint-Herblain | سان إربلان | Saint-Herblain |
| `zone.cities.2` | Rezé | ريزيه | Rezé |
| `zone.cities.3` | Orvault | أورفو | Orvault |
| `zone.cities.4` | Saint-Sébastien-sur-Loire | سان سيباستيان سور لوار | Saint-Sébastien-sur-Loire |
| `zone.cities.5` | Carquefou | كاركفو | Carquefou |
| `zone.cities.6` | Vertou | فيرتو | Vertou |
| `zone.cities.7` | Saint-Nazaire | سان نازير | Saint-Nazaire |
| `zone.note` | Autre ville ? Écrivez-nous, nous regardons ensemble. | مدينة أخرى؟ راسلونا ونتفاهم. | Somewhere else? Message us and we'll work it out. |
| `form.eyebrow` | Devis | عرض السعر | Quote |
| `form.title` | Demander un devis | اطلب عرض سعر | Request a quote |
| `form.intro` | Quelques informations sur votre événement suffisent. Votre demande part sur WhatsApp, et nous vous répondons rapidement avec une proposition. | بعض المعلومات عن مناسبتكم تكفي. يُرسل طلبكم عبر واتساب ونرد عليكم بسرعة باقتراح. | A few details about your event are enough. Your request goes out on WhatsApp and we'll reply quickly with a proposal. |
| `form.eventType` | Type d'événement | نوع المناسبة | Type of event |
| `form.eventTypes.mariage` | Mariage | عرس | Wedding |
| `form.eventTypes.fiancailles` | Fiançailles | خطوبة | Engagement |
| `form.eventTypes.henne` | Soirée henné | ليلة الحناء | Henna night |
| `form.eventTypes.reception` | Réception privée | حفل خاص | Private reception |
| `form.eventTypes.autre` | Autre | أخرى | Other |
| `form.date` | Date | التاريخ | Date |
| `form.dateTaken` | Cette date est déjà très demandée : nous vous confirmons la disponibilité au plus vite. | هذا التاريخ مطلوب كثيراً: سنؤكد لكم التوفر في أقرب وقت. | This date is in high demand: we'll confirm availability as soon as possible. |
| `form.venue` | Lieu ou salle | المكان أو القاعة | Venue |
| `form.venuePh` | Nom de la salle, ville | اسم القاعة، المدينة | Venue name, town |
| `form.guests` | Nombre d'invités | عدد الضيوف | Number of guests |
| `form.service` | Prestation souhaitée | الخدمة المطلوبة | Service |
| `form.services.complete` | Décoration complète | تزيين كامل | Full decoration |
| `form.services.allee` | Allée & cérémonie | الممر والحفل | Aisle & ceremony |
| `form.services.location` | Location seule | كراء فقط | Hire only |
| `form.items` | Articles de location choisis | المعدات المختارة للكراء | Hire items selected |
| `form.itemsEmpty` | Aucun article pour l'instant. | لا توجد قطع بعد. | No items yet. |
| `form.itemsBrowse` | Parcourir le catalogue | تصفح الكتالوج | Browse the catalogue |
| `form.qty` | Quantité | الكمية | Quantity |
| `form.theme` | Couleurs ou thème souhaités | الألوان أو الطابع المرغوب | Colours or theme |
| `form.themePh` | Ex. bordeaux et or, émeraude, blanc et doré... | مثلاً: عنابي وذهبي، زمردي، أبيض وذهبي... | E.g. burgundy and gold, emerald, white and gold... |
| `form.budget` | Budget indicatif | الميزانية التقريبية | Approximate budget |
| `form.optional` | facultatif | اختياري | optional |
| `form.name` | Nom et prénom | الاسم الكامل | Full name |
| `form.phone` | Téléphone | الهاتف | Phone |
| `form.message` | Message | رسالة | Message |
| `form.messagePh` | Vos idées, vos contraintes, une photo d'inspiration à nous envoyer... | أفكاركم، ملاحظاتكم، صورة تُلهمكم... | Your ideas, constraints, an inspiration photo to send us... |
| `form.required` | Champ obligatoire | حقل إلزامي | Required field |
| `form.submit` | Envoyer ma demande sur WhatsApp | إرسال طلبي عبر واتساب | Send my request on WhatsApp |
| `form.privacy` | Vos informations servent uniquement à préparer votre devis. | تُستعمل معلوماتكم فقط لإعداد عرض السعر. | Your details are used only to prepare your quote. |
| `form.sent` | Merci ! WhatsApp s'est ouvert avec votre demande : il ne reste qu'à l'envoyer. Si rien ne s'est ouvert, utilisez ce lien : | شكراً! فُتح واتساب بطلبكم، لم يبق إلا إرساله. إذا لم يُفتح شيء، استعملوا هذا الرابط: | Thank you! WhatsApp has opened with your request: just press send. If nothing opened, use this link: |
| `form.sentLink` | ouvrir WhatsApp | فتح واتساب | open WhatsApp |
| `form.wa.title` | *Demande de devis – Roi des Rois Déco* | *طلب عرض سعر – Roi des Rois Déco* | *Quote request – Roi des Rois Déco* |
| `form.wa.event` | Événement | المناسبة | Event |
| `form.wa.date` | Date | التاريخ | Date |
| `form.wa.venue` | Lieu | المكان | Venue |
| `form.wa.guests` | Invités | الضيوف | Guests |
| `form.wa.service` | Prestation | الخدمة | Service |
| `form.wa.items` | Articles de location | معدات الكراء | Hire items |
| `form.wa.theme` | Couleurs / thème | الألوان / الطابع | Colours / theme |
| `form.wa.budget` | Budget | الميزانية | Budget |
| `form.wa.name` | Nom | الاسم | Name |
| `form.wa.phone` | Téléphone | الهاتف | Phone |
| `form.wa.message` | Message | رسالة | Message |
| `form.wa.lang` | Langue : français | اللغة: العربية | Language: English |
| `footer.tagline` | Décoration marocaine de mariages et d'événements, location de matériel. | تزيين مغربي للأعراس والمناسبات، وكراء المعدات. | Moroccan decoration for weddings and events, equipment hire. |
| `footer.zone` | Nantes · Loire-Atlantique | نانت · لوار أتلانتيك | Nantes · Loire-Atlantique |
| `footer.legal` | Mentions légales | الإشعارات القانونية | Legal notice |
| `footer.rights` | Tous droits réservés. | جميع الحقوق محفوظة. | All rights reserved. |
| `footer.contact` | Contact | اتصل بنا | Contact |
| `footer.follow` | Suivre | تابعونا | Follow |
| `whatsapp.float` | Écrire sur WhatsApp | راسلونا على واتساب | Message us on WhatsApp |
| `whatsapp.hello` | Bonjour Roi des Rois, je souhaite des informations pour la décoration de mon événement. | السلام عليكم Roi des Rois، أود الاستفسار عن تزيين مناسبتي. | Hello Roi des Rois, I'd like some information about decorating my event. |
| `email.subject` | Nouvelle demande de devis | طلب عرض سعر جديد | New quote request |
| `legal.title` | Mentions légales | الإشعارات القانونية | Legal notice |
| `legal.back` | Retour à l'accueil | العودة إلى الصفحة الرئيسية | Back to home |
| `legal.sections.0.h` | Éditeur du site | ناشر الموقع | Publisher |
| `legal.sections.0.p` | ROI DES ROIS – Décoration événementielle & mariages, Nantes (44). Téléphone : 07 81 10 11 24. Responsable de la publication : [À REMPLIR]. SIRET : [À REMPLIR]. | ROI DES ROIS – Décoration événementielle & mariages، نانت (44). الهاتف: 07 81 10 11 24. مسؤول النشر: [يُستكمل]. رقم SIRET: [يُستكمل]. | ROI DES ROIS – Décoration événementielle & mariages, Nantes (44), France. Phone: +33 7 81 10 11 24. Publication manager: [TO BE COMPLETED]. SIRET: [TO BE COMPLETED]. |
| `legal.sections.1.h` | Hébergement | الاستضافة | Hosting |
| `legal.sections.1.p` | Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis – vercel.com. | Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723، الولايات المتحدة – vercel.com. | Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA – vercel.com. |
| `legal.sections.2.h` | Données personnelles | المعطيات الشخصية | Personal data |
| `legal.sections.2.p` | Les informations saisies dans le formulaire de devis (nom, téléphone, détails de l'événement) sont transmises par WhatsApp et, le cas échéant, par e-mail, uniquement pour répondre à votre demande. Elles ne sont ni revendues ni utilisées à d'autres fins. Vous pouvez demander leur suppression à tout moment par téléphone ou WhatsApp. | المعلومات المُدخلة في استمارة عرض السعر (الاسم، الهاتف، تفاصيل المناسبة) تُرسل عبر واتساب، وعند الاقتضاء عبر البريد الإلكتروني، فقط للرد على طلبكم. لا تُباع ولا تُستعمل لأغراض أخرى. يمكنكم طلب حذفها في أي وقت عبر الهاتف أو واتساب. | The details entered in the quote form (name, phone, event details) are sent by WhatsApp and, where applicable, by email, solely to answer your request. They are never sold or used for any other purpose. You can ask for them to be deleted at any time by phone or WhatsApp. |
| `legal.sections.3.h` | Cookies | ملفات تعريف الارتباط | Cookies |
| `legal.sections.3.p` | Le site ne dépose aucun cookie publicitaire ni de mesure d'audience. Seul votre choix de langue est mémorisé. | لا يضع الموقع أي ملفات إشهارية أو لقياس الزيارات. يُحفظ فقط اختياركم للغة. | This site sets no advertising or analytics cookies. Only your language choice is remembered. |
| `legal.sections.4.h` | Photos | الصور | Photos |
| `legal.sections.4.p` | Les photographies présentées sont des réalisations de Roi des Rois. Toute reproduction sans autorisation est interdite. | الصور المعروضة من أعمال Roi des Rois. يُمنع نسخها دون إذن. | The photographs shown are Roi des Rois projects. Reproduction without permission is prohibited. |
| `notFound.title` | Page introuvable | الصفحة غير موجودة | Page not found |
| `notFound.body` | Cette page n'existe pas ou a été déplacée. | هذه الصفحة غير موجودة أو تم نقلها. | This page doesn't exist or has moved. |
| `notFound.back` | Retour à l'accueil | العودة إلى الصفحة الرئيسية | Back to home |
