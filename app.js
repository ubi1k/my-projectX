/* FOOTBALL VAULT — content-first, static website. */
const localImage = name => `assets/images/${name}`;
const commonsFile = file => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=900`;

const players = [
  {name:"Lionel Messi",country:"Argentina",position:"Forward / Playmaker",club:"Inter Miami · Argentina",kind:"legend",barcelona:true,wins:8,image:localImage("messi with 8 ballondors.PNG"),bio:"A rare blend of dribbling, passing, control and finishing. His Barcelona years redefined what a forward-playmaker could be.",tags:["8× Ballon d'Or","Playmaking","World Cup 2022"],link:"https://www.uefa.com/news-media/news/0242-0e97e0ac1cb3-eef786ff788c-1000--messi-all-his-records/",source:"UEFA records"},
  {name:"Cristiano Ronaldo",country:"Portugal",position:"Forward",club:"Al-Nassr · Portugal",kind:"legend",barcelona:false,wins:5,image:localImage("cr7 with 5 ballondors.PNG"),bio:"An elite scorer who evolved from tricky winger into a penalty-box force, combining movement, athleticism and relentless standards.",tags:["5× Ballon d'Or","Goal scoring","Longevity"],link:"https://www.uefa.com/uefachampionsleague/news/0250-0c51184a6cb4-8e7422c8a33e-1000--cristiano-ronaldo-s-records/",source:"UEFA records"},
  {name:"Ronaldinho",country:"Brazil",position:"Attacking midfielder",club:"Barcelona legacy",kind:"legend",barcelona:true,wins:1,image:"https://cdn.arageek.com/magazine/2017/11/ronaldinho.jpg",imageCredit:"Arageek profile photo; use subject to site rights",creditLink:"https://www.arageek.com/bio/ronaldinho",bio:"Joy, improvisation, elasticos and outrageous imagination. A reminder that football can be both elite performance and pure entertainment.",tags:["Flair","2005 Ballon d'Or","Showmanship"],link:"https://www.fcbarcelona.com/",source:"FC Barcelona archive"},
  {name:"David Beckham",country:"England",position:"Midfielder",club:"Manchester United · Real Madrid",kind:"legend",barcelona:false,wins:0,image:localImage("david beckham.PNG"),bio:"One of football's great passers and dead-ball specialists, with a cross-field switch or free kick that could change the entire match.",tags:["Passing","Set pieces","Global icon"],link:"https://www.premierleague.com/",source:"Premier League archive"},
  {name:"Wayne Rooney",country:"England",position:"Forward / Playmaker",club:"Manchester United legacy",kind:"legend",barcelona:false,wins:0,image:localImage("wayne roony.PNG"),bio:"Aggression, creativity, power and a feel for the spectacular. Rooney could score, press, create and carry an attack.",tags:["Complete forward","Premier League","Leadership"],link:"https://www.premierleague.com/",source:"Premier League archive"},
  {name:"Neymar Jr",country:"Brazil",position:"Forward",club:"Brazil · Barcelona legacy",kind:"legend",barcelona:true,wins:0,image:localImage("neymar jr.PNG"),bio:"A street-football imagination brought to the highest level: close control, disguise, flair and the ability to make defenders hesitate.",tags:["1v1 skill","Creativity","Brazil"],link:"https://www.fcbarcelona.com/",source:"FC Barcelona archive"},
  {name:"Sergio Ramos",country:"Spain",position:"Centre-back",club:"Real Madrid legacy",kind:"legend",barcelona:false,wins:0,image:localImage("ramos in madrid.PNG"),bio:"A front-foot defender with aerial threat, leadership and a famous habit of appearing in decisive moments.",tags:["Defending","Leadership","Big moments"],link:"https://www.realmadrid.com/",source:"Real Madrid archive"},
  {name:"Virgil van Dijk",country:"Netherlands",position:"Centre-back",club:"Liverpool legacy",kind:"star",barcelona:false,wins:0,image:localImage("virgil Vd liverpool (low res).PNG"),bio:"Composure, aerial power and elite positioning. His best defending often starts by making danger look unlikely.",tags:["Defending","Aerials","Composure"],link:"https://www.liverpoolfc.com/",source:"Liverpool FC"},
  {name:"Erling Haaland",country:"Norway",position:"Striker",club:"Manchester City · Norway",kind:"star",barcelona:false,wins:0,image:localImage("halland.PNG"),bio:"Explosive runs, ruthless box movement and a striker's instinct for arriving exactly where the chance will land.",tags:["Finishing","Movement","Power"],link:"https://www.mancity.com/",source:"Manchester City"},
  {name:"Kylian Mbappé",country:"France",position:"Forward",club:"Real Madrid · France",kind:"star",barcelona:false,wins:0,image:localImage("mbappe at psg.PNG"),bio:"Acceleration over distance, sharp changes of direction and elite scoring instincts make him one of the era's defining attackers.",tags:["Pace","Finishing","Big stage"],link:"https://www.realmadrid.com/",source:"Real Madrid"},
  {name:"Vinícius Júnior",country:"Brazil",position:"Winger",club:"Real Madrid · Brazil",kind:"star",barcelona:false,wins:0,image:localImage("vini in champions league.PNG"),bio:"A direct, fearless dribbler whose one-versus-one threat can tilt the geometry of an entire defence.",tags:["Dribbling","Transition","Champions League"],link:"https://www.realmadrid.com/",source:"Real Madrid"},
  {name:"Lamine Yamal",country:"Spain",position:"Winger",club:"Barcelona · Spain",kind:"rising",barcelona:true,wins:0,image:commonsFile("Lamine_Yamal_France_v_Spain_7.24.26-143.jpg"),imageCredit:"WikiPortraits / Bryan Berlin · CC BY-SA 4.0",creditLink:"https://commons.wikimedia.org/wiki/File:Lamine_Yamal_France_v_Spain_7.24.26-143.jpg",bio:"A fearless left-footed creator: close control, disguise, decision-making and unusual calm for a player so young.",tags:["Next generation","Kopa Trophy","1v1 creation"],link:"https://www.laliga.com/en-GB/player/lamine-yamal",source:"LALIGA profile"},
  {name:"Jude Bellingham",country:"England",position:"Midfielder",club:"Real Madrid · England",kind:"star",barcelona:false,wins:0,image:commonsFile("25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_(cropped2).jpg"),imageCredit:"Barcex / Wikimedia Commons · CC BY-SA 4.0",creditLink:"https://commons.wikimedia.org/wiki/File:25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_(cropped2).jpg",bio:"A box-to-box midfielder who can carry into space, arrive in the area and raise his influence when the match gets tense.",tags:["Midfield engine","Late runs","Leadership"],link:"https://www.realmadrid.com/",source:"Real Madrid"},
  {name:"Bukayo Saka",country:"England",position:"Winger",club:"Arsenal · England",kind:"star",barcelona:false,wins:0,image:commonsFile("Bukayo_Saka_England_v_Panama_27_June_26-065.jpg"),imageCredit:"Bryan Berlin / WikiPortraits · Wikimedia Commons (see source license)",creditLink:"https://commons.wikimedia.org/wiki/File:Bukayo_Saka_England_v_Panama_27_June_26-065.jpg",bio:"Direct, clever and consistent. Saka can hold width, combine in tight spaces and create or finish from the right side.",tags:["Winger","Decision-making","England"],link:"https://www.thefa.com/england/mens-seniors/squad/bukayo-saka",source:"England profile"},
  {name:"Raphinha",country:"Brazil",position:"Winger / Forward",club:"Barcelona · Brazil",kind:"star",barcelona:true,wins:0,image:commonsFile("Raphinha_Brazil_V_Morocco_13_June_2026-151.jpg"),imageCredit:"Bryan Berlin / WikiPortraits · Wikimedia Commons (see source license)",creditLink:"https://commons.wikimedia.org/wiki/File:Raphinha_Brazil_V_Morocco_13_June_2026-151.jpg",bio:"A high-energy attacker who mixes pressing, direct runs, work rate and a left-footed final action.",tags:["Pressing","Final ball","Work rate"],link:"https://www.fcbarcelona.com/",source:"FC Barcelona"},
  {name:"Pedri",country:"Spain",position:"Midfielder",club:"Barcelona · Spain",kind:"star",barcelona:true,wins:0,image:"https://www.fcbarcelona.com/photo-resources/2022/11/02/a4065cd7-9b67-4073-b957-80679c96e6c0/08-PEDRI.jpg?height=650&width=650",imageCredit:"FC Barcelona official player photo; use subject to site rights",creditLink:"https://www.fcbarcelona.com/",bio:"An elegant midfielder who receives under pressure, turns quickly and connects the team's build-up with its attacking ideas.",tags:["Press resistance","Vision","Tempo"],link:"https://www.fcbarcelona.com/",source:"FC Barcelona"},
  {name:"Jamal Musiala",country:"Germany",position:"Attacking midfielder",club:"Bayern Munich · Germany",kind:"star",barcelona:false,wins:0,image:"https://assets.bundesliga.com/player/dfl-obj-002gcr-dfl-clu-00000g-dfl-sea-0001k8.png",imageCredit:"Bundesliga player image; use subject to site rights",creditLink:"https://www.bundesliga.com/",bio:"A tight-space dribbler who slides past pressure with quick feet and close control, linking midfield to the final third.",tags:["Close control","Creativity","Germany"],link:"https://fcbayern.com/",source:"Bayern Munich"},
  {name:"Mohamed Salah",country:"Egypt",position:"Forward",club:"Liverpool legacy",kind:"star",barcelona:false,wins:0,image:"https://components.skysports.com/shorthand/Salahrank/assets/FvDWANlfIe/4-1-1024x1024.png",imageCredit:"Sky Sports editorial image; use subject to site rights",creditLink:"https://www.skysports.com/football",bio:"A left-footed forward whose inside runs, timing and end product made him one of the defining Premier League attackers.",tags:["Goals","Transition","Consistency"],link:"https://www.liverpoolfc.com/",source:"Liverpool FC"},
  {name:"Ousmane Dembélé",country:"France",position:"Forward",club:"Paris Saint-Germain · France",kind:"star",barcelona:false,wins:1,image:"https://cdn-img.staticzz.com/img/planteis/new/45/06/8834506_ousmane_dembele_20240708113910.jpg",imageCredit:"Playmakerstats / third-party profile photo; use subject to site rights",creditLink:"https://www.playmakerstats.com/player/ousmane-dembele/488324",bio:"Two-footed, unpredictable and capable of beating a defender in either direction. His 2025 Ballon d'Or came after a standout PSG season.",tags:["2025 Ballon d'Or","Two-footed","Versatility"],link:"https://www.uefa.com/uefachampionsleague/news/029d-1ec96c30aa3f-f6868c869cbd-1000--ousmane-dembele-wins-2025-men-s-ballon-d-or/",source:"UEFA 2025 award story"},
  {name:"Cole Palmer",country:"England",position:"Attacking midfielder",club:"Chelsea · England",kind:"star",barcelona:false,wins:0,image:"https://www.soccerzz.com/img/jogadores/new/90/19/659019_cole_palmer_20260207203123.png",imageCredit:"Soccerzz player image; use subject to site rights",creditLink:"https://www.soccerzz.com/player/cole-palmer/659019",bio:"An unhurried creator with a sharp left foot, disguise in the final third and the confidence to take responsibility in big moments.",tags:["Final third","Set pieces","Composure"],link:"https://www.chelseafc.com/",source:"Chelsea FC"},
  {name:"Endrick",country:"Brazil",position:"Forward",club:"Real Madrid system · Brazil",kind:"rising",barcelona:false,wins:0,image:"https://r2.thesportsdb.com/images/media/player/cutout/5yb3rv1733653315.png",imageCredit:"TheSportsDB player cutout; source and rights subject to provider terms",creditLink:"https://www.thesportsdb.com/player/34219641-Endrick",bio:"A powerful, aggressive young forward with a striker's instinct. His development is one to follow over the next few seasons.",tags:["Prospect","Explosive","Brazil"],link:"https://www.realmadrid.com/",source:"Real Madrid"},
  {name:"Estêvão Willian",country:"Brazil",position:"Winger",club:"Chelsea · Brazil",kind:"rising",barcelona:false,wins:0,image:commonsFile("Estevao-Palmeiras-Criciuma-sep24-2.jpg"),imageCredit:"Wikimedia Commons file (see source page for photographer/license)",creditLink:"https://commons.wikimedia.org/wiki/File:Estevao-Palmeiras-Criciuma-sep24-2.jpg",bio:"A creative left-footed attacker whose close control and one-versus-one confidence made him one of Brazil's most talked-about young talents.",tags:["Golden Boy nominee","Dribbling","Brazil"],link:"https://www.chelseafc.com/",source:"Chelsea FC"},
  {name:"Florian Wirtz",country:"Germany",position:"Attacking midfielder",club:"Liverpool · Germany",kind:"star",barcelona:false,wins:0,image:"https://s.yimg.com/os/en/fourfourtwo_376/dbed10e443bb48b668342f73528b1842",imageCredit:"Bundesliga player image endpoint; verify before public reuse",creditLink:"https://www.bundesliga.com/",bio:"A pocket-space specialist who receives between lines, links combinations and creates chances with quick decisions.",tags:["Playmaking","Between lines","Germany"],link:"https://www.bundesliga.com/",source:"Bundesliga"},
  {name:"Harry Kane",country:"England",position:"Striker",club:"Bayern Munich · England",kind:"star",barcelona:false,wins:1,image:"https://www.zerozero.pt/img/planteis/new/80/94/11528094_harry_kane_20251117053657.jpg",imageCredit:"Zerozero player profile photo; use subject to site rights",creditLink:"https://www.zerozero.pt/jogador/harry-kane/180569",bio:"A striker known for finishing and dropping into deeper zones to create chances. His game combines elite finishing with deeper link-up play and chance creation.",tags:["Finishing","Link-up play","England"],link:"https://fcbayern.com/",source:"Bayern Munich"},
  {name:"Rodri",country:"Spain",position:"Defensive midfielder",club:"Barcelona · Spain",kind:"star",barcelona:true,wins:1,image:commonsFile("Rodri_Argentina_v_Spain_19_July_2026-183.jpg"),imageCredit:"Bryan Berlin / WikiPortraits · Wikimedia Commons (see source license)",creditLink:"https://commons.wikimedia.org/wiki/File:Rodri_Argentina_v_Spain_19_July_2026-183.jpg",bio:"A midfield organiser whose positioning, pressure resistance and control of tempo help a team dictate the rhythm of a match.",tags:["Tempo control","Positioning","Ballon d'Or 2024"],link:"https://www.mancity.com/",source:"Manchester City"},
  {name:"Luka Modrić",country:"Croatia",position:"Midfielder",club:"Real Madrid legacy",kind:"legend",barcelona:false,wins:1,image:"https://cdn-img.zerozero.pt/img/planteis/new/61/85/7366185_luka_modric_20240529104400.jpg",imageCredit:"Zerozero player profile photo; use subject to site rights",creditLink:"https://www.playmakerstats.com/player/luka-modric/26872",bio:"A master of receiving under pressure, turning away from opponents and controlling games through timing rather than physicality.",tags:["Ballon d'Or 2018","Vision","Longevity"],link:"https://www.realmadrid.com/",source:"Real Madrid archive"},
  {name:"Kaká",country:"Brazil",position:"Attacking midfielder",club:"AC Milan legacy",kind:"legend",barcelona:false,wins:1,image:"https://cdn-img.staticzz.com/img/planteis/new/14/01/1661401_kaka_20240530002347.jpg",imageCredit:"Zerozero player profile photo; use subject to site rights",creditLink:"https://www.zerozero.pt/jogador/kaka",bio:"At his peak, Kaká combined long-stride acceleration with elegant ball-carrying and the ability to arrive from midfield and score.",tags:["Ballon d'Or 2007","AC Milan","Transition"],link:"https://www.acmilan.com/",source:"AC Milan archive"},
  {name:"Karim Benzema",country:"France",position:"Striker",club:"Real Madrid legacy",kind:"legend",barcelona:false,wins:1,image:"https://cdn-img.staticzz.com/img/planteis/new/37/48/7043748_karim_benzema_20240530003631.jpg",imageCredit:"Ogol/Zerozero player profile photo; use subject to site rights",creditLink:"https://www.ogol.com.br/jogador/karim-benzema/12913",bio:"A technically gifted forward whose movement, link-up play and scoring made him central to multiple Champions League campaigns.",tags:["Ballon d'Or 2022","Link-up play","UCL"],link:"https://www.realmadrid.com/",source:"Real Madrid archive"},
  {name:"Alexia Putellas",country:"Spain",position:"Midfielder",club:"Barcelona · Spain",kind:"legend",barcelona:true,wins:2,image:"https://www.fcbarcelona.com/photo-resources/2021/11/30/f9c2b9b8-8749-45a8-a85a-cb5efc17d0b4/mini_2021-11-30-ALEXIA-PUTELLAS-BALON-DOR-28.JPG?width=800",imageCredit:"FC Barcelona official image; use subject to site rights",creditLink:"https://www.fcbarcelona.com/",bio:"A technically complete midfielder and a central figure in Barcelona and Spain's rise in women's football.",tags:["Women's football","2× Ballon d'Or","Barcelona"],link:"https://www.fcbarcelona.com/",source:"FC Barcelona"},
  {name:"Aitana Bonmatí",country:"Spain",position:"Midfielder",club:"Barcelona · Spain",kind:"star",barcelona:true,wins:3,image:"https://www.fcbarcelona.com/photo-resources/2023/10/30/5c06f74f-4927-4f0a-a9c4-1fbcb824f49c/mini_2023-10-30-AITANA-BONMATI-BALON-DOR-14.JPG?width=800",imageCredit:"FC Barcelona official image; use subject to site rights",creditLink:"https://www.fcbarcelona.com/",bio:"A press-resistant midfielder who controls tempo, breaks lines and has become a defining player of modern women's football.",tags:["Women's football","Ballon d'Or","Midfield control"],link:"https://www.fcbarcelona.com/",source:"FC Barcelona"},
  {name:"Aitana Bonmatí",country:"Spain",position:"Midfielder",club:"Barcelona · Spain",kind:"star",barcelona:true,wins:3,image:"https://cdn.mos.cms.futurecdn.net/48kTP52UpH9ya7RmFNWm2h-1024-80.jpg",imageCredit:"FourFourTwo / UEFA/Getty image; use subject to site rights",creditLink:"https://www.fourfourtwo.com/features/who-is-the-best-paid-womens-footballer",bio:"A press-resistant midfielder who controls tempo, breaks lines and has become a defining player of modern women's football.",tags:["Women's football","Ballon d'Or","Midfield control"],link:"https://www.fcbarcelona.com/",source:"FC Barcelona"}
];

const heroSlides = [
  {image:localImage("stadium at night(crazy atmosphere).PNG"),category:"MATCHDAY ATMOSPHERE",kicker:"THE GAME UNDER LIGHTS",title:"NIGHTS THAT<br>LIVE FOREVER.",subtitle:"Every stadium has a story."},
  {image:localImage("messi with 8 ballondors.PNG"),category:"THE IMMORTALS",kicker:"EIGHT TIMES AT THE TOP",title:"A RECORD OF<br>GREATNESS.",subtitle:"Some careers become a benchmark."},
  {image:localImage("cr7 with 5 ballondors.PNG"),category:"THE GOAL MACHINE",kicker:"FIVE-TIME BALLON D'OR WINNER",title:"BUILT TO<br>MAKE HISTORY.",subtitle:"Consistency across different eras."},
  {image:localImage("player ratings and cards (FC 25).PNG"),category:"THE GAME WITHIN THE GAME",kicker:"RATINGS MEET REALITY",title:"NUMBERS ARE<br>ONLY HALF THE STORY.",subtitle:"The eye test always has a vote."},
  {image:localImage("TOTY 2025.PNG"),category:"TEAM OF THE YEAR",kicker:"THE ELITE OF AN ERA",title:"ONE LINEUP.<br>ENDLESS DEBATE.",subtitle:"Who deserved a place in the XI?"},
  {image:localImage("tottenham stadium electric.PNG"),category:"STADIUM STORIES",kicker:"WHEN THE CROWD ROARS",title:"FEEL THE<br>ENERGY.",subtitle:"The atmosphere is part of the game."},
  {image:localImage("vini in champions league.PNG"),category:"EUROPEAN NIGHTS",kicker:"THE BIG STAGE",title:"MOMENTS THAT<br>STAY WITH YOU.",subtitle:"Knockout football hits different."},
  {image:localImage("UCL 2013 players (low resolution).PNG"),category:"THE ARCHIVE",kicker:"LEGENDS OF EUROPE",title:"EUROPEAN NIGHTS<br>NEVER FADE.",subtitle:"Old squads, timeless memories."}
];

const legends = [
  {name:"Lionel Messi",kicker:"ARGENTINA · BARCELONA",tag:"THE RECORD BREAKER",image:localImage("messi with 8 ballondors.PNG"),body:"The ultimate combination of close control, vision and end product. His records span club football and international glory.",metric:"8× Ballon d'Or",link:"https://www.uefa.com/news-media/news/0242-0e97e0ac1cb3-eef786ff788c-1000--messi-all-his-records/",source:"Explore records ↗"},
  {name:"Cristiano Ronaldo",kicker:"PORTUGAL · REAL MADRID",tag:"THE GOAL MACHINE",image:localImage("cr7 with 5 ballondors.PNG"),body:"An era-defining scorer whose game evolved through pace, movement, aerial threat and extraordinary consistency.",metric:"5× Ballon d'Or",link:"https://www.uefa.com/uefachampionsleague/news/0250-0c51184a6cb4-8e7422c8a33e-1000--cristiano-ronaldo-s-records/",source:"Explore records ↗"},
  {name:"Ronaldinho",kicker:"BRAZIL · BARCELONA",tag:"THE MAGICIAN",image:"https://cdn.arageek.com/magazine/2017/11/ronaldinho.jpg",body:"A footballer who made creativity feel limitless, with flair, improvisation and a smile that became part of his game.",metric:"2005 Ballon d'Or",link:"https://www.fcbarcelona.com/",source:"Barcelona archive ↗"},
  {name:"David Beckham",kicker:"ENGLAND · MIDFIELD",tag:"THE SPECIALIST",image:localImage("david beckham.PNG"),body:"A set-piece and passing specialist whose delivery could create a chance from almost anywhere on the pitch.",metric:"Passing · Set pieces",link:"https://www.premierleague.com/",source:"Premier League ↗"}
];

const rivalries = [
  {title:"El Clásico",type:"SPAIN · CLUB FOOTBALL",teams:"Real Madrid vs FC Barcelona",image:localImage("ramos in madrid.PNG"),intro:"Football history, contrasting identities, superstars and title races collide whenever these two meet.",story:["El Clásico became a global event as the clubs built domestic and European legacies across generations. The fixture has featured Di Stéfano, Cruyff, Ronaldinho, Messi, Cristiano Ronaldo and many more.","The story changes with every era: tactical battles, academy graduates, superstar signings and the pressure of a title race. Its meaning is bigger than one result, but the match still has to be played."] ,link:"https://www.fcbarcelona.com/en/el-clasico",source:"FC Barcelona overview ↗"},
  {title:"Liverpool vs Manchester United",type:"ENGLAND · CLUB FOOTBALL",teams:"Two giants. One bragging-rights battle.",image:localImage("virgil Vd liverpool (low res).PNG"),intro:"A rivalry shaped by city pride, trophy counts, legendary managers and the fight to be England's defining club.",story:["The clubs' histories and huge fanbases mean this match can dominate a season's conversation. Its most memorable chapters range from title-deciding games to dramatic comebacks and individual performances.","The stakes are not always the league table alone; a derby can reset momentum, define a manager's tenure or provide a season-long reference point for supporters."] ,link:"https://www.premierleague.com/",source:"Premier League archive ↗"},
  {title:"Argentina vs Brazil",type:"SOUTH AMERICA · INTERNATIONAL",teams:"Albiceleste vs Seleção",image:localImage("neymar jr.PNG"),intro:"A rivalry built on national pride, contrasting football cultures and generations of outrageous attacking talent.",story:["Argentina and Brazil are two of international football's most successful and closely watched sides. Their matches connect to decades of debate over style, players and continental supremacy.","From Pelé and Maradona to Messi and Neymar, the rivalry's cast makes it feel like a living argument that never really ends."] ,link:"https://www.fifa.com/",source:"FIFA archive ↗"},
  {title:"Milan Derby",type:"ITALY · CITY RIVALRY",teams:"AC Milan vs Inter Milan",image:localImage("stadium at night(crazy atmosphere).PNG"),intro:"One stadium, two identities, a shared city and European nights that helped define Italian football.",story:["The Derby della Madonnina is special because AC Milan and Inter have shared San Siro while maintaining distinct identities. Their rivalry is woven into the city's football culture.","The derby's greatest chapters often blend league pressure with European stakes, creating a setting where tactical discipline and emotional intensity meet."] ,link:"https://www.acmilan.com/",source:"AC Milan ↗"},
  {title:"North London Derby",type:"ENGLAND · CITY RIVALRY",teams:"Arsenal vs Tottenham Hotspur",image:localImage("tottenham stadium electric.PNG"),intro:"A local rivalry with history, identity and table-position consequences—especially when both clubs are chasing the same goal.",story:["Arsenal and Tottenham's rivalry is rooted in north London geography and a long run of competitive meetings. Supporters treat the fixture as a season within the season.","The match can be a tactical chess game or a chaotic shootout, but the atmosphere makes it a fixture both fanbases mark on the calendar."] ,link:"https://www.premierleague.com/",source:"Premier League ↗"},
  {title:"Celtic vs Rangers",type:"SCOTLAND · OLD FIRM",teams:"Two clubs. A rivalry with deep social history.",image:localImage("stadium at night(crazy atmosphere).PNG"),intro:"One of football's most intense domestic rivalries, with sporting history and wider cultural context that demands care.",story:["The Old Firm is a major part of Scottish football history. It is rooted in footballing competition and a wider social context, so responsible coverage needs more than match-day banter.","On the pitch, the rivalry has featured championship battles, iconic players and pressure that can make even a regular-season match feel decisive."] ,link:"https://www.scottishfa.co.uk/",source:"Scottish FA ↗"}
];

const seasons = [
  {title:"Messi's impossible year",year:"CALENDAR YEAR · 2012",metric:"91 goals",metricLabel:"official goals for club & country",image:localImage("messi with 8 ballondors.PNG"),body:"A scoring benchmark that still feels unreal. Keep calendar-year goals distinct from a single league-season total: Messi also scored 50 La Liga goals in 2011–12.",link:"https://www.uefa.com/news-media/news/0242-0e97e0ac1cb3-eef786ff788c-1000--messi-all-his-records/",source:"UEFA records ↗"},
  {title:"Salah rewrites the 38-game record",year:"PREMIER LEAGUE · 2017–18",metric:"32 goals",metricLabel:"in a 38-match Premier League season",image:"https://components.skysports.com/shorthand/Salahrank/assets/FvDWANlfIe/4-1-1024x1024.png",body:"Mohamed Salah's first Liverpool season back in England delivered an historic scoring campaign, combining direct running with razor-sharp movement and finishing.",link:"https://www.premierleague.com/",source:"Premier League archive ↗"},
  {title:"Leicester City defy the odds",year:"PREMIER LEAGUE · 2015–16",metric:"5000–1",metricLabel:"famously quoted pre-season title odds",image:localImage("stadium at night(crazy atmosphere).PNG"),body:"Leicester turned a relegation battle from the season before into a Premier League title. A story of collective belief, excellent recruitment and tactical clarity.",link:"https://www.skysports.com/football/news/10261535/premier-league-2015-16-how-the-odds-changed-as-leicester-claimed-title",source:"Revisit the campaign ↗"},
  {title:"Cristiano's Champions League peak",year:"UCL · 2013–14",metric:"17 goals",metricLabel:"in one Champions League season",image:localImage("young cr7 with ballondor.PNG"),body:"Ronaldo's 2013–14 run set a single-season Champions League scoring record at the time as Real Madrid secured La Décima.",link:"https://www.uefa.com/uefachampionsleague/",source:"UEFA Champions League ↗"},
  {title:"Bayern's all-gas treble",year:"BAYERN · 2019–20",metric:"3 trophies",metricLabel:"Bundesliga · DFB-Pokal · Champions League",image:"https://assets.bundesliga.com/player/dfl-obj-002gcr-dfl-clu-00000g-dfl-sea-0001k8.png",body:"Bayern finished a disrupted season with a continental treble, powered by aggressive pressing, speed in transition and a devastating front line.",link:"https://fcbayern.com/",source:"Bayern archive ↗"},
  {title:"Barcelona's historic 2009 treble",year:"FC BARCELONA · 2008–09",metric:"6 trophies",metricLabel:"calendar-year sextuple",image:localImage("messi with 8 ballondors.PNG"),body:"Pep Guardiola's first-team era began with a domestic and European treble before Barcelona added the Super Cup and Club World Cup titles later in 2009.",link:"https://www.fcbarcelona.com/",source:"Barcelona history ↗"}
];

const whatIfStories = [
  {title:"Dele Alli: the career that took a different turn",label:"ENGLAND · THE HUMAN STORY",image:localImage("tottenham stadium electric.PNG"),body:"At Tottenham, Dele looked like a player built for the biggest stages: clever box arrivals, improvisation and fearless confidence. Injuries, a loss of form and difficult personal circumstances changed the trajectory. Dele later spoke openly about childhood trauma, mental health struggles and addiction; this is a story about a person, not a punchline about wasted talent.",link:"https://www.premierleague.com/es/news/3589138",source:"Read Dele's reflections ↗"},
  {title:"Adriano: a talent with a complicated story",label:"BRAZIL · STRIKER",image:localImage("cr7 with 5 ballondors.PNG"),body:"Adriano's left foot, strength and finishing made him one of the most feared forwards of his early peak. Personal loss and mental-health struggles affected his career. Any what-if story should balance sporting brilliance with the difficult context behind it.",link:"https://www.fifa.com/",source:"Explore football history ↗"},
  {title:"Bojan Krkić: pressure arrives early",label:"BARCELONA · ACADEMY GRADUATE",image:localImage("messi with 8 ballondors.PNG"),body:"Bojan emerged amid enormous hype as a teenager at Barcelona. He later spoke about anxiety and the pressure that came with being labelled a future superstar. His story asks how the game can better protect young players from expectation becoming a burden.",link:"https://www.fcbarcelona.com/",source:"Barcelona archive ↗"},
  {title:"Jack Wilshere: talent interrupted",label:"ENGLAND · MIDFIELD",image:localImage("stadium at night(crazy atmosphere).PNG"),body:"Wilshere's early technical quality and confidence made him an exciting midfielder. Repeated injuries interrupted his development, a reminder that potential and availability are not always aligned.",link:"https://www.premierleague.com/",source:"Premier League archive ↗"}
];

const timeline = [
  {year:"1863",title:"A common code begins to take shape",body:"The Football Association is formed in England, helping establish standard rules for association football.",link:"https://www.thefa.com/about-football-association/what-we-do/history"},
  {year:"1930",title:"The first men's FIFA World Cup",body:"Uruguay hosts the inaugural men's World Cup and wins the tournament, setting a new stage for international football.",link:"https://www.fifa.com/tournaments/mens/worldcup/1930uruguay"},
  {year:"1956",title:"The Ballon d'Or begins",body:"France Football launches an individual award that becomes one of football's most recognised honours.",link:"https://www.francefootball.fr/ballon-d-or/palmares/"},
  {year:"1992",title:"The Premier League era starts",body:"A new competition structure transforms the English top flight and grows into one of the world's most-followed leagues.",link:"https://www.premierleague.com/en/history"},
  {year:"2009",title:"Barcelona's six-trophy calendar year",body:"Barcelona cap an extraordinary run by collecting six major trophies across the 2009 calendar year.",link:"https://www.fcbarcelona.com/"},
  {year:"2012",title:"Messi's 91-goal calendar year",body:"Messi scores 91 official goals for club and country in the calendar year—a record documented by UEFA.",link:"https://www.uefa.com/news-media/news/0242-0e97e0ac1cb3-eef786ff788c-1000--messi-all-his-records/"},
  {year:"2016",title:"Leicester's impossible-looking title",body:"Leicester City win the Premier League after starting the season as extreme outsiders, becoming one of modern sport's great underdog stories.",link:"https://www.premierleague.com/"},
  {year:"2022",title:"Argentina win the World Cup in Qatar",body:"Argentina lift the men's World Cup after a final against France that becomes an instant classic.",link:"https://www.fifa.com/tournaments/mens/worldcup/qatar2022"},
  {year:"2025",title:"PSG lift their first Champions League title",body:"Paris Saint-Germain win the UEFA Champions League for the first time, capping a landmark campaign.",link:"https://www.uefa.com/uefachampionsleague/"},
  {year:"2026",title:"Spain win the 48-team World Cup",body:"Spain beat Argentina 1–0 after extra time in the final, with Ferran Torres scoring in the 106th minute. The tournament featured 48 teams and 104 matches.",link:"https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/spain-argentina-final-report-highlights"}
];

const events = [
  {title:"Spain vs Argentina: a World Cup final for the archive",type:"FIFA WORLD CUP · 19 JULY 2026",image:localImage("stadium at night(crazy atmosphere).PNG"),body:"Spain beat Argentina 1–0 after extra time in New York New Jersey. Ferran Torres scored in the 106th minute as Spain claimed a second men's World Cup title.",link:"https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/spain-argentina-final-report-highlights",source:"Official FIFA match report ↗"},
  {title:"Dembélé wins the 2025 men's Ballon d'Or",type:"BALLON D'OR · 22 SEPTEMBER 2025",image:"https://cdn-img.staticzz.com/img/planteis/new/45/06/8834506_ousmane_dembele_20240708113910.jpg",body:"The PSG forward took the men's award after a memorable campaign, with Lamine Yamal second and Vitinha third. A strong season turned into a career-defining year.",link:"https://www.uefa.com/uefachampionsleague/news/029d-1ec96c30aa3f-f6868c869cbd-1000--ousmane-dembele-wins-2025-men-s-ballon-d-or/",source:"Official UEFA winners & top ten ↗"},
  {title:"PSG's first Champions League crown",type:"UEFA CHAMPIONS LEAGUE · 2025",image:localImage("UCL 2013 players (low resolution).PNG"),body:"Paris Saint-Germain reached the top of Europe for the first time in 2024–25, a landmark in the club's modern project.",link:"https://www.uefa.com/uefachampionsleague/",source:"UEFA competition archive ↗"},
  {title:"Spain's Euro 2024 run",type:"UEFA EURO · 2024",image:localImage("vini in champions league.PNG"),body:"Spain won all seven matches at UEFA EURO 2024, adding another major chapter to the country's football identity.",link:"https://www.uefa.com/uefaeuro/",source:"UEFA EURO archive ↗"},
  {title:"2025 Ballon d'Or: the full conversation",type:"AWARDS · MEN'S & WOMEN'S FOOTBALL",image:localImage("TOTY 2025.PNG"),body:"The awards included men's and women's Ballon d'Or, Kopa, Yashin, Gerd Müller and coaching honours—one night that spans the modern game.",link:"https://www.uefa.com/ballondor/",source:"UEFA Ballon d'Or hub ↗"},
  {title:"The 2026 Golden Boy next generation",type:"YOUTH FOOTBALL · OCTOBER 2026",image:commonsFile("Estevao-Palmeiras-Criciuma-sep24-2.jpg"),body:"The 2026 shortlist includes young talents such as Estêvão Willian, Jorrel Hato, Pau Cubarsí, Lennart Karl and others. Lists of prospects are snapshots—not guarantees of a future career.",link:"https://www.chelseafc.com/en/news/article/chelsea-duo-nominated-for-golden-boy-award",source:"2026 shortlist context ↗"},
  {title:"The women's game keeps rewriting its ceiling",type:"WOMEN'S FOOTBALL",image:"https://www.fcbarcelona.com/photo-resources/2023/10/30/5c06f74f-4927-4f0a-a9c4-1fbcb824f49c/mini_2023-10-30-AITANA-BONMATI-BALON-DOR-14.JPG?width=800",body:"Barcelona, Arsenal, England and Spain have helped drive global interest in the women's game. Explore the club and international story through official competition sources.",link:"https://www.uefa.com/womenschampionsleague/",source:"Women's Champions League ↗"}
];

const awards = [
  [2026,"Harry Kane","England","Bayern Munich"],[2025,"Ousmane Dembélé","France","Paris Saint-Germain"],[2024,"Rodri","Spain","Manchester City"],[2023,"Lionel Messi","Argentina","Inter Miami"],[2022,"Karim Benzema","France","Real Madrid"],[2021,"Lionel Messi","Argentina","Paris Saint-Germain"],[2020,"No award","—","Cancelled"],[2019,"Lionel Messi","Argentina","Barcelona"],[2018,"Luka Modrić","Croatia","Real Madrid"],[2017,"Cristiano Ronaldo","Portugal","Real Madrid"],[2016,"Cristiano Ronaldo","Portugal","Real Madrid"],[2015,"Lionel Messi","Argentina","Barcelona"],[2014,"Cristiano Ronaldo","Portugal","Real Madrid"],[2013,"Cristiano Ronaldo","Portugal","Real Madrid"],[2012,"Lionel Messi","Argentina","Barcelona"],[2011,"Lionel Messi","Argentina","Barcelona"],[2010,"Lionel Messi","Argentina","Barcelona"],[2009,"Lionel Messi","Argentina","Barcelona"],[2008,"Cristiano Ronaldo","Portugal","Manchester United"],[2007,"Kaká","Brazil","AC Milan"],[2006,"Fabio Cannavaro","Italy","Real Madrid"],[2005,"Ronaldinho","Brazil","Barcelona"]
];

const credits = [
  {label:"Ronaldinho · Arageek player profile photo",url:"https://www.arageek.com/bio/ronaldinho"},
  {label:"Luka Modrić · Zerozero player profile photo",url:"https://www.playmakerstats.com/player/luka-modric/26872"},
  {label:"Kaká · Zerozero player profile photo",url:"https://www.zerozero.pt/jogador/kaka"},
  {label:"Karim Benzema · Ogol player profile photo",url:"https://www.ogol.com.br/jogador/karim-benzema/12913"},
  {label:"Harry Kane · Zerozero player profile photo",url:"https://www.zerozero.pt/jogador/harry-kane/180569"},
  {label:"Rodri · Wikimedia Commons file & license",url:"https://commons.wikimedia.org/wiki/File:Rodri_Argentina_v_Spain_19_July_2026-183.jpg"},
  {label:"Florian Wirtz · FourFourTwo/Yahoo Sports image",url:"https://uk.sports.yahoo.com/news/100-most-expensive-football-transfers-095332758.html"},
  {label:"Aitana Bonmatí · FourFourTwo/UEFA/Getty image",url:"https://www.fourfourtwo.com/features/who-is-the-best-paid-womens-footballer"},
  {label:"Lamine Yamal · Wikimedia Commons · CC BY-SA 4.0",url:"https://commons.wikimedia.org/wiki/File:Lamine_Yamal_France_v_Spain_7.24.26-143.jpg"},
  {label:"Jude Bellingham · Wikimedia Commons · CC BY-SA 4.0",url:"https://commons.wikimedia.org/wiki/File:25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_(cropped2).jpg"},
  {label:"Bukayo Saka · Wikimedia Commons file & license",url:"https://commons.wikimedia.org/wiki/File:Bukayo_Saka_England_v_Panama_27_June_26-065.jpg"},
  {label:"Raphinha · Wikimedia Commons file & license",url:"https://commons.wikimedia.org/wiki/File:Raphinha_Brazil_V_Morocco_13_June_2026-151.jpg"},
  {label:"Estêvão Willian · Wikimedia Commons file & license",url:"https://commons.wikimedia.org/wiki/File:Estevao-Palmeiras-Criciuma-sep24-2.jpg"},
  {label:"Pedri · FC Barcelona player photo",url:"https://www.fcbarcelona.com/"},
  {label:"Jamal Musiala · Bundesliga player image",url:"https://www.bundesliga.com/"},
  {label:"Mohamed Salah · Sky Sports editorial image",url:"https://www.skysports.com/football"},
  {label:"Ousmane Dembélé · Playmakerstats profile image",url:"https://www.playmakerstats.com/player/ousmane-dembele/488324"},
  {label:"Cole Palmer · Soccerzz player image",url:"https://www.soccerzz.com/player/cole-palmer/659019"},
  {label:"Endrick · TheSportsDB player cutout",url:"https://www.thesportsdb.com/player/34219641-Endrick"},
  {label:"Aitana Bonmatí · FC Barcelona player photo",url:"https://www.fcbarcelona.com/"}
];

const $ = selector => document.querySelector(selector);
const playerGrid = $("#playerGrid");
const playerSearch = $("#playerSearch");
const countryFilter = $("#countryFilter");
const sortSelect = $("#sortSelect");
const resultsLabel = $("#resultsLabel");
const emptyState = $("#emptyState");
const filterButtons = document.querySelectorAll(".filter-pill");
let activeFilter = "all";

function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function safeImage(url) { return esc(url); }
function renderImage(url, alt, className="") {
  return `<img class="${className}" src="${safeImage(url)}" alt="${esc(alt)}" loading="lazy" referrerpolicy="no-referrer">`;
}
function bindImageFallback(root=document) {
  root.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.dataset.failed = "true";
      img.style.display = "none";
      const fallback = img.parentElement?.querySelector(".visual-fallback");
      if (fallback) fallback.hidden = false;
      else if (img.parentElement) {
        img.parentElement.classList.add("image-failed");
        const marker = document.createElement("span");
        marker.className = "visual-fallback inline-fallback";
        marker.textContent = "⚽";
        img.parentElement.append(marker);
      }
    }, {once:true});
  });
}
function cardImage(url, alt, className="") {
  return `<div class="${className}">${renderImage(url,alt)}<div class="visual-fallback" hidden>⚽</div></div>`;
}

function renderLegends() {
  $("#legendsGrid").innerHTML = legends.map(item => `
    <article class="editorial-card">
      ${cardImage(item.image,item.name,"editorial-image")}
      <div class="editorial-body"><p class="card-kicker">${esc(item.kicker)}</p><h3>${esc(item.name)}</h3><p>${esc(item.body)}</p><div class="card-footer"><span>${esc(item.metric)}</span><a href="${esc(item.link)}" target="_blank" rel="noreferrer">${esc(item.source)}</a></div></div>
    </article>`).join("");
}
function populateCountries() {
  const countries = [...new Set(players.map(p=>p.country))].sort((a,b)=>a.localeCompare(b));
  countryFilter.innerHTML = `<option value="all">All countries</option>` + countries.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join("");
}
function renderStatistics() {
  $("#playersCount").textContent = players.length;
  $("#storiesCount").textContent = rivalries.length + seasons.length + whatIfStories.length + timeline.length + events.length;
  $("#competitionsCount").textContent = 8;
}
function renderPlayers() {
  const q = playerSearch.value.trim().toLowerCase();
  const country = countryFilter.value;
  let list = players.filter(p=>{
    const searchText = [p.name,p.country,p.position,p.club,p.bio,...p.tags].join(" ").toLowerCase();
    const filterOK = activeFilter==="all" || p.kind===activeFilter || (activeFilter==="barcelona" && p.barcelona);
    return searchText.includes(q) && (country==="all" || country===p.country) && filterOK;
  });
  const sort = sortSelect.value;
  if(sort==="young") list.sort((a,b)=>(a.kind==="rising"?-1:0)-(b.kind==="rising"?-1:0) || a.name.localeCompare(b.name));
  else if(sort==="legend") list.sort((a,b)=>(a.kind==="legend"?-1:0)-(b.kind==="legend"?-1:0) || a.name.localeCompare(b.name));
  else list.sort((a,b)=>a.name.localeCompare(b.name));
  resultsLabel.textContent = `${list.length} profile${list.length===1?"":"s"} in the vault`;
  emptyState.hidden = list.length!==0;
  playerGrid.hidden = list.length===0;
  playerGrid.innerHTML = list.map(p=>`
    <article class="player-card">
      <div class="player-image-wrap">${renderImage(p.image,p.name,"player-image")}<div class="visual-fallback" hidden>${esc(p.name.split(" ").map(x=>x[0]).slice(0,2).join(""))}</div><span class="player-award-badge">${p.wins>0?`🏆 ${p.wins}× Ballon d'Or`:p.kind==="rising"?"NEXT GENERATION":p.kind==="legend"?"THE IMMORTALS":"PLAYER PROFILE"}</span></div>
      <div class="player-card-body"><p class="player-nationality">${esc(p.country)}</p><h3 class="player-name">${esc(p.name)}</h3><p class="player-meta">${esc(p.position)} · ${esc(p.club)}</p><p class="player-bio">${esc(p.bio)}</p><div class="player-tags">${p.tags.slice(0,3).map(t=>`<span class="player-tag">${esc(t)}</span>`).join("")}</div><a class="player-source" href="${esc(p.link)}" target="_blank" rel="noreferrer">Read more · ${esc(p.source)} ↗</a></div>
    </article>`).join("");
  bindImageFallback(playerGrid);
}
function renderRivalries() {
  $("#rivalryGrid").innerHTML = rivalries.map(r=>`
    <article class="article-card">${cardImage(r.image,r.title,"article-image")}<div class="article-body"><span class="article-type">${esc(r.type)}</span><h3>${esc(r.title)}</h3><p class="article-teams">${esc(r.teams)}</p><p>${esc(r.intro)}</p><details class="story-details"><summary>Open the story <span>＋</span></summary><div class="story-body">${r.story.map(s=>`<p>${esc(s)}</p>`).join("")}<a href="${esc(r.link)}" target="_blank" rel="noreferrer">${esc(r.source)}</a></div></details></div></article>`).join("");
}
function renderSeasons() {
  $("#seasonGrid").innerHTML = seasons.map(s=>`
    <article class="season-card">${cardImage(s.image,s.title,"season-image")}<div class="season-body"><span class="season-year">${esc(s.year)}</span><h3>${esc(s.title)}</h3><div class="season-stat"><strong>${esc(s.metric)}</strong><span>${esc(s.metricLabel)}</span></div><p>${esc(s.body)}</p><a class="source-link" href="${esc(s.link)}" target="_blank" rel="noreferrer">${esc(s.source)}</a></div></article>`).join("");
}
function renderWhatIf() {
  $("#whatIfGrid").innerHTML = whatIfStories.map(s=>`
    <article class="whatif-card">${cardImage(s.image,s.title,"whatif-image")}<div class="whatif-body"><span class="whatif-label">${esc(s.label)}</span><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p><a class="whatif-source" href="${esc(s.link)}" target="_blank" rel="noreferrer">${esc(s.source)}</a></div></article>`).join("");
}
function renderTimeline() {
  $("#historyTimeline").innerHTML = timeline.map(item=>`<article class="timeline-item"><span class="timeline-year">${esc(item.year)}</span><div><h4>${esc(item.title)}</h4><p>${esc(item.body)}</p><a href="${esc(item.link)}" target="_blank" rel="noreferrer">Read more ↗</a></div></article>`).join("");
}
function renderEvents() {
  $("#eventsGrid").innerHTML = events.map(e=>`<article class="event-card">${cardImage(e.image,e.title,"event-image")}<div class="event-body"><span class="event-type">${esc(e.type)}</span><h3>${esc(e.title)}</h3><p>${esc(e.body)}</p><a href="${esc(e.link)}" target="_blank" rel="noreferrer">${esc(e.source)}</a></div></article>`).join("");
}
function renderAwards() {
  $("#awardTableBody").innerHTML = awards.map(([year,winner,nation,club])=>`<tr><td>${year}</td><td><span class="winner-name">${esc(winner)}</span></td><td>${esc(nation)}</td><td>${esc(club)}</td><td><span class="winner-chip">${winner==="No award"?"Cancelled":"Winner"}</span></td></tr>`).join("");
}
function renderCredits() {
  $("#imageCreditsList").innerHTML = credits.map(c=>`<a href="${esc(c.url)}" target="_blank" rel="noreferrer">${esc(c.label)} ↗</a>`).join("");
}

/* Hero slideshow: pre-load the next photo, update copy, and degrade gracefully. */
let heroIndex = 0;
let heroTimer = null;
const heroImg = $("#heroFeatureImage");
function applyHeroSlide(index) {
  const slide = heroSlides[index];
  const preload = new Image();
  preload.onload = () => {
    heroImg.classList.add("is-changing");
    window.setTimeout(()=>{
      heroImg.src = slide.image;
      heroImg.alt = slide.kicker;
      $("#heroFeatureCategory").textContent = slide.category;
      $("#heroFeatureKicker").textContent = slide.kicker;
      $("#heroFeatureTitle").innerHTML = slide.title;
      $("#heroFeatureSubtitle").textContent = slide.subtitle;
      $("#heroFeatureIndex").textContent = `FV / ${String(index+1).padStart(3,"0")}`;
      $("#heroSlideCounter").textContent = `${String(index+1).padStart(2,"0")} / ${String(heroSlides.length).padStart(2,"0")}`;
      requestAnimationFrame(()=>heroImg.classList.remove("is-changing"));
    },180);
  };
  preload.onerror = () => {
    console.warn("Hero image failed; moving to the next feature:", slide.image);
    if(index!==0) applyHeroSlide(0);
  };
  preload.src = slide.image;
}
function nextHero(delta=1) { heroIndex=(heroIndex+delta+heroSlides.length)%heroSlides.length; applyHeroSlide(heroIndex); }
$("#heroNext").addEventListener("click",()=>{nextHero(1);restartHeroTimer();});
$("#heroPrev").addEventListener("click",()=>{nextHero(-1);restartHeroTimer();});
function restartHeroTimer(){ if(heroTimer) window.clearInterval(heroTimer); if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) heroTimer=window.setInterval(()=>nextHero(1),6500); }

/* Search and filter interactions. */
filterButtons.forEach(button=>button.addEventListener("click",()=>{activeFilter=button.dataset.filter;filterButtons.forEach(b=>b.classList.toggle("active",b===button));renderPlayers();}));
playerSearch.addEventListener("input",renderPlayers);
countryFilter.addEventListener("change",renderPlayers);
sortSelect.addEventListener("change",renderPlayers);

/* The GOAT vote is a local demo, intentionally not persisted or sent anywhere. */
const voteCounts={messi:0,ronaldo:0};
document.querySelectorAll("[data-vote]").forEach(button=>button.addEventListener("click",()=>{const who=button.dataset.vote;voteCounts[who]++;$("#messiVotes").textContent=voteCounts.messi;$("#ronaldoVotes").textContent=voteCounts.ronaldo;document.querySelectorAll("[data-vote]").forEach(b=>b.classList.toggle("selected",b===button));$("#voteMessage").textContent=`You voted for ${who==="messi"?"Lionel Messi":"Cristiano Ronaldo"}. These demo counts reset when the page reloads.`;}));

/* Quick football quiz. */
const quizQuestions=[
  {q:"Which nation won the 2026 men's FIFA World Cup?",options:["Argentina","Spain","France","Brazil"],answer:"Spain",why:"Spain beat Argentina 1–0 after extra time in the final."},
  {q:"Which club won the 2015–16 Premier League title as a huge outsider?",options:["Tottenham","Leicester City","Liverpool","Everton"],answer:"Leicester City",why:"Leicester's title remains one of the competition's great underdog stories."},
  {q:"Who won the 2025 men's Ballon d'Or?",options:["Lamine Yamal","Rodri","Ousmane Dembélé","Mohamed Salah"],answer:"Ousmane Dembélé",why:"UEFA's 2025 winners list confirms Dembélé took the men's award."},
  {q:"Which player scored 91 official goals for club and country in calendar year 2012?",options:["Cristiano Ronaldo","Lionel Messi","Neymar","Robert Lewandowski"],answer:"Lionel Messi",why:"UEFA documents Messi's 91-goal calendar year."},
  {q:"What does a hat-trick mean in football?",options:["Three goals by one player","Three assists by one player","Three clean sheets","Three penalties saved"],answer:"Three goals by one player",why:"A traditional hat-trick is three goals scored by the same player in one match."}
];
let quizIndex=0;
function renderQuiz(){const q=quizQuestions[quizIndex];$("#quizQuestion").textContent=q.q;$("#quizFeedback").textContent="";$("#quizOptions").innerHTML=q.options.map(option=>`<button type="button" class="quiz-option" data-answer="${esc(option)}">${esc(option)}</button>`).join("");$("#quizOptions").querySelectorAll("button").forEach(button=>button.addEventListener("click",()=>{const correct=button.dataset.answer===q.answer;$("#quizOptions").querySelectorAll("button").forEach(b=>{b.disabled=true;if(b.dataset.answer===q.answer)b.classList.add("correct");else if(b===button)b.classList.add("incorrect");});$("#quizFeedback").textContent=(correct?"Correct. ":`Not quite — the answer is ${q.answer}. `)+q.why;}));}
$("#nextQuestion").addEventListener("click",()=>{quizIndex=(quizIndex+1)%quizQuestions.length;renderQuiz();});

/* Highlight the current nav link while scrolling. */
const observedSections=[...document.querySelectorAll("main section[id]")];
if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;document.querySelectorAll(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${visible.target.id}`));},{rootMargin:"-25% 0px -60% 0px",threshold:[0,.25,.5]});observedSections.forEach(s=>observer.observe(s));}

renderLegends();populateCountries();renderStatistics();renderPlayers();renderRivalries();renderSeasons();renderWhatIf();renderTimeline();renderEvents();renderAwards();renderCredits();bindImageFallback();renderQuiz();restartHeroTimer();
