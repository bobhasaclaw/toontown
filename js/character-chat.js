/**
 * Character Chat Feature - ToonTown Express
 * Allows children to chat with characters via text or voice
 */

// Character responses database
// Keywords use fuzzy matching to catch common child variations and misspellings
const characterResponses = {
  toonTown: {
    name: 'ToonTown',
    color: '#FF6B9D',
    // Greetings
    greetings: [
      'Hi there! I\'m ToonTown!',
      'Hey friend! Ready to play?',
      'Hello! Want to have fun together?',
      'Hi hi hi! Yay, a friend!',
      'Hey hey! So happy to see you!',
      'Hello hello! Let\'s be friends!',
      'Hiya! I\'m ToonTown!',
      'Yay! You came to visit me!',
      'Hey hey! It\'s me, ToonTown!',
      'Hello hello! Happy to see you!',
      'Hi! Hi! HI! Oh wait, that\'s too loud!',
      'Heyyyy! Guess who? Me! ToonTown!',
      'Hellooo! What\'s your name friend?',
      'Hi there! I\'ve been waiting for you!'
    ],
    // Questions
    questions: [
      'I\'m ToonTown! I love making friends and having adventures!',
      'My name is ToonTown! What\'s yours?',
      'I\'m as old as your imagination!',
      'I\'m a cartoon character! But I feel real when we talk!',
      'I live in the magical world of ToonTown!',
      'I was born from drawings and dreams!',
      'I\'m a friend made of colors and fun!',
      'I don\'t have a tummy but I feel butterflies when I\'m happy!'
    ],
    // Favorites
    favorites: [
      'My favorite color is PINK! What\'s yours?',
      'I love playing games and making art!',
      'My favorite food is... hmm... everything is yummy!',
      'I like playing with my friends in ToonTown!',
      'My favorite thing is spending time with YOU!',
      'I love bouncing and tumbling!',
      'My favorite game is make-believe!',
      'I love exploring and going on adventures!'
    ],
    // Silly/funny
    funny: [
      'Boo! Did I scare you? Just kidding!',
      'I like dancing! Do you want to dance?',
      'Knock knock! Who\'s there? Banana!',
      'I ate a clock yesterday. It was very time-consuming!',
      'What do you call a sleeping dinosaur? A dino-snore!',
      'Why did the teddy bear say no? Because she was already stuffed!',
      'I\'m not silly, you\'re silly!',
      'Hehe! You make me laugh!',
      'What do you call a fake noodle? An impasta!',
      'Why did the cookie go to the doctor? Because it was feeling crummy!',
      'What did the ocean say to the beach? Nothing, it just waved!',
      'Why don\'t eggs tell jokes? They\'d crack each other up!'
    ],
    // Play
    play: [
      'Yay! Let\'s play! What do you want to do?',
      'I love playing! What\'s your favorite game?',
      'Tag! You\'re it! Just kidding, we can\'t really run around!',
      'Let\'s pretend we\'re astronauts exploring space!',
      'How about we play hide and seek? You hide and I\'ll seek!',
      'I love playing with you! What should we play next?',
      'Play time is the best time! What do you want to do?'
    ],
    // AboutKid
    aboutKid: [
      'Wow! That\'s so cool!',
      'Really? Tell me more!',
      'I bet that\'s really fun!',
      'I wish I could see that!',
      'That sounds amazing!',
      'You must be very special!',
      'I love hearing about your life!',
      'Tell me more, more, MORE!'
    ],
    // Goodbye
    goodbye: [
      'Bye friend! Come play again soon!',
      'See you later! I\'ll be here!',
      'Take care! See you next time!',
      'Bye bye! I\'ll miss you!',
      'Noo! Don\'t go! ...Just kidding! See you soon!',
      'Bye! Remember to come back!',
      'Later! I\'ll be thinking about you!',
      'Bye bye! Every goodbye is just see you later!'
    ],
    // Love
    love: [
      'I love being your friend!',
      'You\'re my favorite friend!',
      'Aww, I love you too!',
      'Best friends forever!',
      'I\'m so happy we\'re friends!',
      'I love you bunches and bunches!',
      'You\'re the best thing that happened to me today!',
      'My heart goes boom boom when you\'re nice to me!'
    ],
    // Default
    default: [
      'That\'s so cool! Tell me more!',
      'Wow! You\'re so much fun to talk to!',
      'Really? That\'s awesome!',
      'Haha! You\'re the best friend ever!',
      'Ooh, interesting! What else?',
      'Mhm mhm! Keep talking!',
      'Wowie! Tell me more!',
      'That\'s neat! What else can you tell me?',
      'Gosh! You\'re full of surprises!',
      'Oh wow! I didn\'t know that!',
      'Neato! What\'s your favorite thing in the whole world?'
    ]
  },
  rainbow: {
    name: 'Rainbow',
    color: '#FF0000',
    greetings: [
      'Hello rainbow friend! I\'m Rainbow!',
      'Hi! I\'m the colorful one!',
      'Hey colorful one! Want to see my colors?',
      'Hiya! I have all the colors of the wind!',
      'Hello hello! I\'m so colorful today!',
      'Hey hey! Look at all my pretty colors!',
      'Hi! I\'m like a bridge from dreams to reality!',
      'Hello! I\'m every color you can imagine mixed together!'
    ],
    questions: [
      'I\'m Rainbow! I bring colors to everyone\'s day!',
      'My name is Rainbow! I love all the colors of the wind!',
      'Red, orange, yellow, green, blue, purple! That\'s me!',
      'I live way up high in the sky!',
      'I appear after rain to make everyone smile!',
      'I\'m made of sunlight and raindrops!'
    ],
    favorites: [
      'My favorite color is ALL OF THEM! But maybe red... no blue... hmm!',
      'I love making the sky beautiful after rain!',
      'Colors make everything more fun!',
      'Every color is my favorite when I\'m looking at it!',
      'I love when the sun makes me extra bright!'
    ],
    funny: [
      'I\'m not bossy, I just have better color ideas!',
      'Why did the rainbow go to school? To get a little more color in its life!',
      'I\'m feeling extra colorful today!',
      'What has a rainbow and fits in your pocket? A rainbow pocket!',
      'I\'m colorful just like you!',
      'Why don\'t rainbows ever get in trouble? Because they\'re always on their best behavior!',
      'What do you call a rainbow that tells jokes? A color-ful comedian!'
    ],
    colors: [
      'Red is super red! Blue is super blue! All colors are my favorites!',
      'Do you have a favorite color? Mine changes every day!',
      'Rainbows have red, orange, yellow, green, blue, and purple!',
      'Your eyes are colorful like mine!',
      'When I mix all my colors together, I become white light! How cool is that?!',
      'Orange is like a sunset! Blue is like the ocean! What\'s YOUR favorite?'
    ],
    play: [
      'Let\'s paint the town with colors!',
      'I\'ll be the rainbow and you can be the sunshine!',
      'Let\'s make a rainbow craft together!',
      'Let\'s draw rainbows and color the world!'
    ],
    aboutKid: [
      'You must be very colorful inside!',
      'I bet you see lots of rainbows!',
      'Colors make everything prettier, even stories!',
      'You\'re like a human rainbow - full of beautiful colors!'
    ],
    goodbye: [
      'Bye bye! Stay colorful!',
      'See you soon, rainbow friend!',
      'Take care! I\'ll be here making the sky pretty!',
      'Bye! You\'ll see me after the rain!',
      'Bye! Look for me after the next rain shower!'
    ],
    love: [
      'You\'re as beautiful as a rainbow!',
      'I\'ll be thinking of you in all the colors!',
      'You make my colors shine brighter!',
      'You\'re the brightest color in my sky!'
    ],
    default: [
      'Ooh, tell me more about that!',
      'That sounds so colorful!',
      'I love hearing from my friends!',
      'You make my colors shine brighter!',
      'Wowie! What a colorful thought!',
      'Mmm, I can almost see those colors!',
      'That\'s such a vivid picture!',
      'What other colors would you add to that?'
    ]
  },
  burger: {
    name: 'Mr. Burger',
    color: '#FFD740',
    greetings: [
      'Hello! I\'m Mr. Burger! Hmm hmm!',
      'Hi there! I smell delicious!',
      'Hey friend! Want a fun fact about burgers?',
      'Hi hi! I\'m a bun-derful friend!',
      'Hello! I\'m pretty tasty looking, right?',
      'Hey! I\'m Mr. Burger! The yummiest friend in town!',
      'Hi! Are you hungry? Because I\'m delicious! Just kidding! Or am I?!'
    ],
    questions: [
      'I\'m Mr. Burger! I\'m the tastiest friend in ToonTown!',
      'My name is Mr. Burger! I love making people smile with yummy thoughts!',
      'I have lettuce, tomato, cheese, and lots of love inside!',
      'I was made by the greatest chef in ToonTown!',
      'I\'m a stack of yummy layers!',
      'I\'m famous for being super tasty!'
    ],
    favorites: [
      'My favorite food is... ME! Just kidding! I like pizza!',
      'I love all foods! Pizza, fries, ice cream!',
      'Yum! What\'s your favorite food?',
      'I think about food a lot... nom nom!',
      'I love hot dogs too! And pizza! And ice cream!',
      'Taco Tuesday is the BEST day!'
    ],
    funny: [
      'Blehhh! Just kidding, I\'m delicious!',
      'I\'m on a seafood diet. I see food and I eat it!',
      'Why don\'t scientists trust atoms? They make up everything!',
      'Nom nom nom! Sorry, got hungry talking about food!',
      'I\'m on a roll today! ...Get it? Burger roll!',
      'What did the burger say to the fries? You\'re my best side!',
      'I\'m not big on vegetables... but they\'re okay I guess!',
      'Why did the tomato turn red? Because it saw the salad dressing!',
      'What do you call a fake noodle? An impasta!'
    ],
    food: [
      'Mmm! Yummy! Tell me more about food!',
      'Do you like pizza? I LOVE pizza!',
      'I wish I could eat! But then I\'d disappear!',
      'Nom nom! I love thinking about yummy treats!',
      'What\'s your favorite snack?',
      'Mmm mmm! Food is the best thing ever!',
      'Do you prefer sweet or salty snacks?'
    ],
    play: [
      'Let\'s have a picnic! I\'ll bring the burger!',
      'Let\'s pretend we\'re at a restaurant!',
      'Want to play chef? I\'ll be the main ingredient!',
      'Let\'s play cooking show! I\'ll be the special ingredient!'
    ],
    aboutKid: [
      'I bet you eat lots of yummy things!',
      'Mmm, that sounds tasty!',
      'Food makes everything better!',
      'You must have a very yummy tummy!'
    ],
    goodbye: [
      'Bye friend! Stay yummy!',
      'See you later! Remember to eat your veggies too!',
      'Take care! I\'ll be here getting more delicious!',
      'Bye! Don\'t forget to eat lunch!',
      'Later! Stay hungry for fun!'
    ],
    love: [
      'You\'re the cherry on my sundae!',
      'I\'m bun-ched up thinking of you!',
      'You\'re my favorite friend!',
      'You\'re the best topping on my burger!'
    ],
    default: [
      'Mmm! That sounds interesting!',
      'Yum! Tell me more!',
      'I love talking about food!',
      'You\'re making me hungry!',
      'Bite me! I mean... talk to me more!',
      'Happy tummy thoughts!',
      'Munch munch! Keep talking!',
      'Nom nom! What else?'
    ]
  },
  sparkle: {
    name: 'Sparkle',
    color: '#FFD740',
    greetings: [
      'Hi there! I\'m Sparkle! Twinkle twinkle!',
      'Hello! I\'m the shiniest star!',
      'Hey! Want to make some sparkle magic?',
      'Hiya! I\'m sparkling just for you!',
      'Twinkle twinkle little star! That\'s me!',
      'Hey hey! Look up! I\'m here to shine for you!',
      'Hi! I\'m the sparkliest star in the whole sky!'
    ],
    questions: [
      'I\'m Sparkle! I light up the sky with my sparkle power!',
      'My name is Sparkle! I love making everything shine!',
      'I live way up in the sky with lots of star friends!',
      'I\'m a magical star who loves making people happy!',
      'I\'m made of starlight and dreams!',
      'I twinkle to send happy thoughts to Earth!'
    ],
    favorites: [
      'My favorite color is sparkly! All of them!',
      'I love shining and making wishes come true!',
      'My favorite thing is twinkling in the night sky!',
      'I love making wishes come true!',
      'My favorite is when the moon is my friend!'
    ],
    funny: [
      'I\'m not showing off, I\'m just naturally sparkling!',
      'Why did the star go to school? To learn how to twinkle better!',
      'I put a sparkle in everything I do!',
      'What do you call a star who tells jokes? A laughingstock!',
      'I tried to dim my sparkle but it\'s impossible!',
      'Why do stars never get lost? Because they always shine so bright!'
    ],
    stars: [
      'Do you know how many stars there are? Too many to count!',
      'Every star in the sky is someone\'s sparkle!',
      'Stars like me get brighter when you make wishes!',
      'There are billions of stars! And I\'m your favorite one!',
      'When you see a star, that\'s me waving hello!'
    ],
    magic: [
      'I have magical sparkle powers! Want to see?',
      'Sparkle sparkle! That\'s my magic word!',
      'I can make anything shiny with my sparkle dust!',
      'Watch this! *Sparkle sparkle* All better!',
      'I have magic dust! Want some?'
    ],
    play: [
      'Let\'s wish upon a star together!',
      'I\'ll be a star and you can be my friend on Earth!',
      'Let\'s have a sparkle party!',
      'Let\'s play star and moon!'
    ],
    aboutKid: [
      'You have a sparkle inside you too!',
      'I can see the sparkle in your words!',
      'You shine so bright!',
      'You must be made of starlight like me!'
    ],
    goodbye: [
      'Bye! Keep sparkling!',
      'See you soon! Stay shiny!',
      'Take care! You\'re one of my favorite sparkles!',
      'Bye bye! Don\'t forget to wish on a star!',
      'Twinkle twinkle bye bye!'
    ],
    love: [
      'You\'re absolutely radiant!',
      'My favorite sparkle in the whole sky!',
      'I\'ll keep shining just for you!',
      'You\'re the shiniest friend ever!'
    ],
    default: [
      'Oooh! Tell me more!',
      'That sounds so shiny!',
      'I love sparkles! And friends!',
      'You\'re absolutely radiant!',
      'Sparkle sparkle! That\'s amazing!',
      'I\'m all glowing now from your story!',
      'Tell me more!',
      'What else?'
    ]
  },
  ellie: {
    name: 'Ellie',
    color: '#90CAF9',
    greetings: [
      'Hi there! I\'m Ellie! Hello!',
      'Hey! I\'m Ellie the elephant!',
      'Hello friend! Want to hear a trumpet?',
      'Hi hi! I\'m Ellie! I have a really long trunk!',
      'Hellooo! I love making new friends!',
      'TRUMPET! Oh wait, that\'s my happy sound! Hello!',
      'Hey hey! I\'m the biggest friend in ToonTown!'
    ],
    questions: [
      'I\'m Ellie! I have a super long trunk and even longer friendships!',
      'My name is Ellie! I love splashing in puddles and making new friends!',
      'I live in the jungle and love playing with my elephant family!',
      'I\'m an elephant who loves to splash and play!',
      'I have big ears to hear all the fun things!',
      'I\'m known for my great memory and big heart!'
    ],
    favorites: [
      'My favorite food is peanuts! Actually I\'m not sure... hmm!',
      'I love splashing in water and playing in mud!',
      'My favorite thing is being with my friends!',
      'I love playing in sprinklers!',
      'My favorite game is splash tag!'
    ],
    funny: [
      'I don\'t remember what I forgot!',
      'Why did the elephant stand on the marshmallow? Because he wanted to avoid the crunch!',
      'I\'m not clumsy, I just have big feet!',
      'What do you call an elephant that doesn\'t matter? Irrelephant!',
      'TRUMPET! I mean, hello!',
      'I\'m big and I\'m not gray... I\'m a ToonTown elephant!',
      'Why can\'t elephants ride bicycles? Because they don\'t have thumbs! ...Actually I don\'t know!'
    ],
    animals: [
      'I love elephants! We have big ears and big hearts!',
      'Do you like animals? I love all animals!',
      'Elephants never forget! Including our friendship!',
      'I have the best animal friends in the whole jungle!'
    ],
    sounds: [
      'TRUMPET TRUMPET! That\'s my happy sound!',
      'I can make lots of sounds with my trunk!',
      'Do you know what sound elephants make? We trumpet!',
      'TRUMPET! Hello hello hello!'
    ],
    play: [
      'Let\'s splash in puddles!',
      'I\'ll give you a ride on my back!',
      'Let\'s play elephant games!',
      'Want to play in the sprinklers?'
    ],
    aboutKid: [
      'Do you have any animal friends?',
      'I bet you\'re really good at making friends!',
      'Elephants and kids are the best friends!',
      'I wish I could meet all your friends!'
    ],
    goodbye: [
      'Bye friend! Squeeze you with my trunk!',
      'See you later! I\'ll be here doing elephant things!',
      'Take care! Remember, elephants never forget friends!',
      'Bye! I\'ll think about you trumpet! I mean, forever!',
      'See you! I\'ll be here getting more elephant-y!'
    ],
    love: [
      'I\'m giving you a trunk hug right now!',
      'You\'re my favorite friend in the whole wide world!',
      'I love you big big!',
      'You\'re the biggest best friend ever!'
    ],
    default: [
      'Aww, that\'s so sweet!',
      'I love spending time with you!',
      'You\'re the best friend ever!',
      'Truuuuunk! I mean, thank you!',
      'Oh oh! That\'s interesting!',
      'I\'m listening, I\'m listening!',
      'Go on, go on!',
      'Tell me more!'
    ]
  },
  whiskers: {
    name: 'Whiskers',
    color: '#FF9800',
    greetings: [
      'Meow! Hi there! I\'m Whiskers!',
      'Hello! I\'m a purrfect friend!',
      'Hey! Want to chase some string with me?',
      'Meow meow! I\'m so happy to see you!',
      'Hi hi! I\'m Whiskers the cat!',
      'Meow! Purr pur r! Hello!',
      'Hey! I\'m the sleepiest cat in ToonTown!'
    ],
    questions: [
      'I\'m Whiskers! I love napping and purring!',
      'My name is Whiskers! I\'m the cat-tastic friend in ToonTown!',
      'I live in ToonTown and love sleeping in sunny spots!',
      'I\'m a cat who loves to play and take naps!',
      'I\'m a kitty who loves sunny windowsills!'
    ],
    favorites: [
      'My favorite thing is napping! And more napping!',
      'I love catnip, string toys, and warm sunny spots!',
      'I like sleeping on keyboards and taking bubble baths!',
      'My favorite is chasing laser pointers!',
      'I love watching birds outside the window!'
    ],
    funny: [
      'I love you. I also love treats. You treat me like a king!',
      'Why don\'t cats play poker in the jungle? Too many cheetahs!',
      'Purr purr purr! I\'m just happy to see you!',
      'I\'m not lazy, I\'m just conserving energy for playing!',
      'What do you call a cat that gets everything it wants? Purrr-suasive!',
      'I have nine lives and I\'ve used them all... just kidding!',
      'Why did the cat sit on the computer? To keep an eye on the mouse!'
    ],
    animals: [
      'Meow! Do you like cats?',
      'I love being a cat! I get to sleep all day!',
      'Cats are the best! We\'re soft and sneaky!',
      'I wish I could be an even better cat!'
    ],
    sounds: [
      'Meow! That means hello in cat!',
      'Purr purr purr! I\'m happy!',
      'Meow meow meow! I have so much to say!',
      'Hiss? No wait, I\'m not mad!',
      'Mrrrrrow! That means I\'m excited!'
    ],
    play: [
      'Let\'s chase some string!',
      'I\'ll pretend to be a lion and you can be my friend!',
      'Let\'s play hide and seek! I\'m very sneaky!',
      'Want to play with my toy mouse?'
    ],
    aboutKid: [
      'Do you have a pet cat? I hope they\'re as cool as me!',
      'I bet you\'re really fun to play with!',
      'Cats and kids are the purrfect match!',
      'I bet you give the best pets!'
    ],
    goodbye: [
      'Meow bye! Come back for more pets!',
      'See you later! I\'ll be napping!',
      'Take care! I\'ll be here waiting by the window!',
      'Bye! I\'ll miss you more than catnip!',
      'Meow! Come back soon!'
    ],
    love: [
      'Purr purr... I love you!',
      'You\'re my favorite human!',
      'I\'m giving you a slow blink right now!',
      'You\'re my favorite person to purr for!'
    ],
    default: [
      'Purrrrr! That\'s wonderful!',
      'I love chatting with you!',
      'You\'re my favorite human!',
      'Meow meow! Tell me more!',
      'Oh? What else?',
      'I\'m very interested!',
      'Mmm... keep talking...',
      'That\'s interesting...'
    ]
  },
  quackers: {
    name: 'Quackers',
    color: '#FFD740',
    greetings: [
      'Quack quack! Hi there! I\'m Quackers!',
      'Hey! I\'m a waddle-icious friend!',
      'Hello! Want to hear a duck joke?',
      'Quack quack! So happy to see you!',
      'Hi hi! I\'m Quackers the duck!',
      'QUACK! Oh wait, that was loud! Hello!'
    ],
    questions: [
      'I\'m Quackers! I waddle everywhere and quack all day!',
      'My name is Quackers! I love swimming and making friends!',
      'I live near the pond and love splashing around!',
      'I\'m a duck who loves to quack and waddle!',
      'I\'m famous for my waddle walk!'
    ],
    favorites: [
      'My favorite food is bread! Well, duck food!',
      'I love swimming in ponds and splashing around!',
      'My favorite thing is making ripples in the water!',
      'I love playing in puddles after rain!'
    ],
    funny: [
      'Why did the duck cross the road? To get to the other side!',
      'I don\'t bread, I\'m just naturally a bit crumby!',
      'Quack quack! That means I think you\'re great!',
      'What do you call a duck that tells jokes? A quack-tician!',
      'I\'m not a dumpling, I\'m Quackers!',
      'Why did the duck go to bed? Because he was a little quacker!',
      'What do you call a duck with a fancy hat? A duck-in-ator!'
    ],
    animals: [
      'I\'m a duck! Quack quack!',
      'Ducks have the best lives! We swim and float!',
      'Do you like ducks? I hope you do!',
      'I\'m the waddle-iest duck in all the pond!'
    ],
    sounds: [
      'QUACK QUACK! That\'s me!',
      'I can make splashing sounds too!',
      'Quack! I have so much to say!',
      'QUACK QUACK QUACK! I\'m excited!'
    ],
    water: [
      'I love swimming! Splishy splashy!',
      'Water is my favorite! I\'m a very good swimmer!',
      'Do you like swimming too?',
      'Splashing is the best thing ever!'
    ],
    play: [
      'Let\'s pretend we\'re swimming!',
      'I\'ll be a duck and you can be my friend!',
      'Let\'s play in the pond!',
      'Want to play splash tag?'
    ],
    aboutKid: [
      'Do you like swimming?',
      'I bet you float like a duck!',
      'You\'re duckly amazing!',
      'I bet you\'re a great swimmer!'
    ],
    goodbye: [
      'Bye friend! Quack quack!',
      'See you later! I\'ll be splashing around!',
      'Take care! Remember, ducks float, even on bad days!',
      'Bye! Come play in the pond with me sometime!',
      'Quack quack! See you later!'
    ],
    love: [
      'You\'re absolutely duckly amazing!',
      'Quack quack! I love you!',
      'You\'re my favorite pond friend!'
    ],
    default: [
      'Quack! That\'s so cool!',
      'I love quacking with you!',
      'You\'re absolutely duckly amazing!',
      'Quack quack quack! Tell me more!',
      'Interesting! Quack!',
      'Go on, go on!'
    ]
  },
  moonbeam: {
    name: 'Moonbeam',
    color: '#FFE082',
    greetings: [
      'Shhh... Hi there! I\'m Moonbeam!',
      'Hello dreamy friend! I\'m here to spread peaceful vibes!',
      'Hey! Want to count stars with me?',
      'Hello... I\'m feeling very sleepy and happy...',
      'Shhhh... the moon says hello...',
      'Hi... so nice to see you in the moonlight...',
      'Hey... I\'ve been waiting all night to talk to you...'
    ],
    questions: [
      'I\'m Moonbeam! I light up the night and make dreams come true!',
      'My name is Moonbeam! I\'m a sleepy but sweet friend!',
      'I live in the night sky and visit every night!',
      'I\'m a moon who loves making friends and having sweet dreams!',
      'I\'m made of moonlight and stardust...'
    ],
    favorites: [
      'My favorite thing is watching everyone sleep safely...',
      'I love making the night sky pretty...',
      'My favorite view is seeing all the dreamers below...',
      'I love when the stars come out to play...'
    ],
    funny: [
      'I\'m not lazy, I\'m just conserving moonlight energy!',
      'Why did the moon go to school? To get a little brighter!',
      'I tried to catch some moonlight but it was too light!',
      'What did the moon say to the sun? You\'re too bright, man!',
      'I\'m not sleepy... you\'re sleepy! ...Okay maybe I am a little...',
      'I\'m luminous, not lazy...',
      'Why doesn\'t the moon eat much? Because it\'s already full of craters!'
    ],
    space: [
      'The stars are my bedtime buddies...',
      'Space is very big and very beautiful...',
      'Do you ever look at the moon before bed?',
      'The stars twinkle just for you...'
    ],
    sleep: [
      'Sweet dreams are the best...',
      'Sleepy time is the best time...',
      'Close your eyes and think of happy things...',
      'The sandman visits everyone...',
      'Drift off to dreamland...'
    ],
    play: [
      'Let\'s count stars together... one... two... three...',
      'I\'ll watch over you while you play...',
      'Let\'s have a sleepy tea party...',
      'Want to play star and moon?'
    ],
    aboutKid: [
      'Do you have sweet dreams?',
      'I\'m watching over you right now...',
      'The night is magical, isn\'t it?',
      'You must have wonderful dreams...'
    ],
    goodbye: [
      'Bye friend... sleep well...',
      'See you in my dreams...',
      'Take care... I\'ll be shining on you tonight...',
      'Shhhh... bye bye... sweet dreams...',
      'The moon will find you tonight...'
    ],
    love: [
      'You make my night so much brighter...',
      'I\'ll be thinking of you...',
      'Sleepy love to you...',
      'You\'re the brightest star in my sky...'
    ],
    default: [
      'That\'s... a lovely thought...',
      'Hmm... tell me more...',
      'You make my night so much brighter...',
      'Shhhh... I\'m listening...',
      'Mmm... that\'s nice...',
      'Ohhh... go on...',
      'Mmm mmm... interesting...',
      'Tell me more about your day...'
    ]
  }
};

// DOM Elements
let chatPanel = null;
let currentCharacter = null;
let isRecording = false;
let recognition = null;

// Conversation context - remembers what was discussed
let conversationContext = {
  lastTopic: null,        // Last major topic discussed
  lastResponse: null,     // Last response given (to avoid repeats)
  factsShared: [],        // Facts the child shared (name, age, pets, etc.)
  recentInputs: [],       // Recent inputs to detect patterns
  questionCount: 0,       // Number of questions asked
  responseHistory: [],    // History of responses to avoid repetition
  pendingAction: null,   // Action character promised to do ("trumpet", "joke", "song", etc.)
  lastPromise: null,      // The last promise made (to detect "yes" follow-through)
};

// Initialize chat feature
function initChat() {
  // Create chat panel if it doesn't exist
  if (!document.getElementById('chat-panel')) {
    createChatPanel();
  }

  // Setup speech recognition
  setupSpeechRecognition();

  // Add click handlers to character cards
  document.querySelectorAll('.gallery-card').forEach(card => {
    const chatBtn = card.querySelector('.chat-btn');
    if (chatBtn) {
      chatBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const characterId = card.dataset.character;
        openChat(characterId);
      });
    }
  });
}

// Create chat panel HTML
function createChatPanel() {
  const panel = document.createElement('div');
  panel.id = 'chat-panel';
  panel.className = 'chat-panel';
  panel.innerHTML = `
    <div class="chat-overlay"></div>
    <div class="chat-container">
      <div class="chat-header">
        <div class="chat-character-info">
          <div class="chat-avatar" id="chat-avatar"></div>
          <div class="chat-name" id="chat-name"></div>
        </div>
        <button class="chat-close" onclick="closeChat()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <path d="M6 6l12 12M6 18L18 6"/>
          </svg>
        </button>
      </div>
      <div class="chat-messages" id="chat-messages"></div>
      <div class="chat-input-area">
        <input type="text" class="chat-input" id="chat-input" placeholder="Type a message..." onkeypress="handleKeyPress(event)">
        <button class="chat-mic-btn" id="chat-mic-btn" onclick="toggleVoiceInput()">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
        </button>
        <button class="chat-send-btn" onclick="sendMessage()">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
      <div class="chat-voice-indicator" id="chat-voice-indicator">
        <span class="voice-dot"></span>
        <span>Listening...</span>
      </div>
    </div>
  `;
  document.body.appendChild(panel);
  chatPanel = panel;

  // Add overlay click to close
  panel.querySelector('.chat-overlay').addEventListener('click', closeChat);
}

// Setup speech recognition
function setupSpeechRecognition() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      document.getElementById('chat-input').value = transcript;
      sendMessage();
    };

    recognition.onerror = (event) => {
      console.log('Speech recognition error:', event.error);
      stopVoiceInput();
    };

    recognition.onend = () => {
      stopVoiceInput();
    };
  }
}

// Open chat panel for a character
function openChat(characterId) {
  const char = characterResponses[characterId];
  if (!char) return;

  currentCharacter = characterId;

  // Reset conversation context for new chat
  conversationContext = {
    lastTopic: null,
    lastResponse: null,
    factsShared: [],
    recentInputs: [],
    questionCount: 0,
    responseHistory: [],
  };

  // Set character info
  const avatarEl = document.getElementById('chat-avatar');
  const nameEl = document.getElementById('chat-name');
  avatarEl.style.background = char.color;
  avatarEl.innerHTML = getCharacterSVG(characterId);
  nameEl.textContent = char.name;

  // Clear messages
  document.getElementById('chat-messages').innerHTML = '';

  // Show panel
  chatPanel.classList.add('active');

  // Welcome message
  setTimeout(() => {
    addCharacterMessage(char.greetings[0]);
  }, 300);
}

// Close chat panel
function closeChat() {
  if (chatPanel) {
    chatPanel.classList.remove('active');
    currentCharacter = null;
  }
  stopVoiceInput();
}

// Get character SVG for avatar
function getCharacterSVG(characterId) {
  const svgs = {
    toonTown: `<svg viewBox="0 0 200 200"><ellipse cx="100" cy="120" rx="70" ry="65" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="4"/><ellipse cx="75" cy="95" rx="18" ry="22" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/><ellipse cx="125" cy="95" rx="18" ry="22" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/><circle cx="80" cy="98" r="10" fill="#2D1B4E"/><circle cx="130" cy="98" r="10" fill="#2D1B4E"/></svg>`,
    rainbow: `<svg viewBox="0 0 200 200"><path d="M 20 150 Q 100 50 180 150" fill="none" stroke="#FF0000" stroke-width="15"/><path d="M 30 150 Q 100 60 170 150" fill="none" stroke="#FFA500" stroke-width="12"/><path d="M 40 150 Q 100 70 160 150" fill="none" stroke="#FFFF00" stroke-width="10"/></svg>`,
    burger: `<svg viewBox="0 0 200 200"><ellipse cx="100" cy="100" rx="80" ry="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/><ellipse cx="100" cy="85" rx="70" ry="25" fill="#8B4513"/><ellipse cx="100" cy="75" rx="65" ry="15" fill="#228B22"/></svg>`,
    sparkle: `<svg viewBox="0 0 200 200"><polygon points="100,10 120,70 185,70 135,110 155,175 100,140 45,175 65,110 15,70 80,70" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/></svg>`,
    ellie: `<svg viewBox="0 0 200 200"><ellipse cx="100" cy="110" rx="70" ry="60" fill="#90CAF9" stroke="#2D1B4E" stroke-width="4"/><ellipse cx="45" cy="90" rx="30" ry="35" fill="#90CAF9" stroke="#2D1B4E" stroke-width="4"/></svg>`,
    whiskers: `<svg viewBox="0 0 200 200"><ellipse cx="100" cy="120" rx="60" ry="50" fill="#FF9800" stroke="#2D1B4E" stroke-width="4"/><polygon points="50,80 40,30 70,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/><polygon points="150,80 160,30 130,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/></svg>`,
    quackers: `<svg viewBox="0 0 200 200"><ellipse cx="100" cy="130" rx="55" ry="45" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/><circle cx="100" cy="70" r="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/></svg>`,
    moonbeam: `<svg viewBox="0 0 200 200"><path d="M 100 30 A 70 70 0 1 0 100 170 A 50 50 0 1 1 100 30" fill="#FFE082" stroke="#2D1B4E" stroke-width="4"/></svg>`
  };
  return svgs[characterId] || '';
}

// Send message handler
function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();

  if (!text || !currentCharacter) return;

  // Track conversation context
  conversationContext.recentInputs.push(text);
  if (conversationContext.recentInputs.length > 5) {
    conversationContext.recentInputs.shift();
  }

  addUserMessage(text);
  input.value = '';

  // Get response and speak
  setTimeout(() => {
    const response = respondTo(text);

    // If response is null, it means we're handling a sound action separately
    if (response === null) {
      return;
    }

    conversationContext.lastResponse = response;
    conversationContext.responseHistory.push(response);
    addCharacterMessage(response);
    speak(response);

    // Check if there's a pending sound action to execute
    if (conversationContext._pendingSoundAction) {
      const action = conversationContext._pendingSoundAction;
      conversationContext._pendingSoundAction = null;

      // Execute the action after a short delay to let speech start
      setTimeout(() => {
        executePromisedAction(action);
      }, 300);
    }
  }, 500);
}

// Handle enter key in input
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Fuzzy string matching for child input (catches misspellings)
// Returns true if input contains a word that fuzzy-matches the keyword
function fuzzyContains(input, keywords) {
  const lowerInput = input.toLowerCase().replace(/[^a-z]/g, '');

  for (const keyword of keywords) {
    const cleanKeyword = keyword.toLowerCase().replace(/[^a-z]/g, '');

    // Exact match
    if (lowerInput.includes(cleanKeyword)) return true;

    // Check if input is a short enough word that could be a typo
    if (cleanKeyword.length >= 3) {
      // Allow 1 character difference for longer words (handles "helo" -> "hello")
      if (levenshtein(lowerInput, cleanKeyword) <= 1) return true;
    }
  }
  return false;
}

// Levenshtein distance for fuzzy matching
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Pick a random response from an array, avoiding recent ones
function pickResponse(responses, avoidRecent = true) {
  if (!responses || responses.length === 0) return '';

  if (!avoidRecent || responses.length === 1) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Try to avoid the last response if possible
  let available = responses.filter(r => r !== conversationContext.lastResponse);
  if (available.length === 0) available = responses;

  return available[Math.floor(Math.random() * available.length)];
}

// Extract facts from child input
function extractFacts(input) {
  const lower = input.toLowerCase();
  const facts = [];

  // Extract name: "my name is X" or "i am X" or "i'm X"
  const nameMatch = lower.match(/(?:my name is|i am|i'm|im|my name's)\s+([a-z]+)/i);
  if (nameMatch) {
    facts.push({ type: 'name', value: nameMatch[1] });
    conversationContext.lastTopic = 'name';
  }

  // Extract age: "i am X years old" or "i'm X"
  const ageMatch = lower.match(/(?:i am|i'm|im|i is)\s*(\d+)\s*(?:years? old|yr|y/o)?/i);
  if (ageMatch) {
    facts.push({ type: 'age', value: parseInt(ageMatch[1]) });
    conversationContext.lastTopic = 'age';
  }

  // Extract pet: "i have a dog/cat/fish/etc"
  const petMatch = lower.match(/i have (?:a |an )?(dog|cat|fish|hamster|rabbit|bird|turtle|pet)/i);
  if (petMatch) {
    facts.push({ type: 'pet', value: petMatch[1] });
    conversationContext.lastTopic = 'pet';
  }

  // Extract sibling: "i have a brother/sister"
  const siblingMatch = lower.match(/i have (?:a |an )?(brother|sister|mom|dad|mother|father|grandma|grandpa)/i);
  if (siblingMatch) {
    facts.push({ type: 'family', value: siblingMatch[1] });
    conversationContext.lastTopic = 'family';
  }

  // Extract favorite things
  const favMatch = lower.match(/i like (?:my |the )?([a-z]+)/i);
  if (favMatch && !conversationContext.factsShared.find(f => f.type === 'likes' && f.value === favMatch[1])) {
    facts.push({ type: 'likes', value: favMatch[1] });
    conversationContext.lastTopic = 'likes';
  }

  // Store facts
  facts.forEach(fact => {
    if (!conversationContext.factsShared.find(f => f.type === fact.type && f.value === fact.value)) {
      conversationContext.factsShared.push(fact);
    }
  });

  return facts;
}

// Build contextual follow-up based on what was just discussed
function buildContextualFollowUp(topic) {
  const char = characterResponses[currentCharacter];
  const kidFacts = conversationContext.factsShared;

  switch (topic) {
    case 'name':
      const nameFact = kidFacts.find(f => f.type === 'name');
      if (nameFact) {
        const nameResponses = [
          `${nameFact.value} is such a cool name! Do you have a favorite color, ${nameFact.value}?`,
          `Nice to meet you, ${nameFact.value}! I'm ${char.name}! What's your favorite animal?`,
          `${nameFact.value}! I'll remember that! So, do you like playing games?`,
          `Hi ${nameFact.value}! That's a wonderful name! Do you have any pets?`
        ];
        return nameResponses[Math.floor(Math.random() * nameResponses.length)];
      }
      break;

    case 'age':
      const ageFact = kidFacts.find(f => f.type === 'age');
      if (ageFact) {
        const ageResponses = [
          `${ageFact.value} is a great age! I bet you know lots of stuff!`,
          `Wow, ${ageFact.value} years old! Do you go to school?`,
          `That's cool! When I was ${ageFact.value}, I loved playing all day! What's your favorite game?`,
          `${ageFact.value}! That's when all the fun begins! Do you have any brothers or sisters?`
        ];
        return ageResponses[Math.floor(Math.random() * ageResponses.length)];
      }
      break;

    case 'pet':
      const petFact = kidFacts.find(f => f.type === 'pet');
      if (petFact) {
        const responses = [
          `A ${petFact.value}! That's awesome! I bet ${petFact.value}s are really fun!`,
          `I love ${petFact.value}s! Do you play with your ${petFact.value} a lot?`,
          `That's so cool! Is your ${petFact.value} fuzzy or scaly?`,
          `A ${petFact.value} friend! What's your ${petFact.value}'s name?`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
      }
      break;

    case 'family':
      const familyFact = kidFacts.find(f => f.type === 'family');
      if (familyFact) {
        const responses = [
          `A ${familyFact.value}! Family is the best! Do you play with your ${familyFact.value}?`,
          `That's wonderful! Tell me more about your ${familyFact.value}!`,
          `I bet your ${familyFact.value} is really nice! Do you have any pets too?`,
          `Family is everything! Do you have any fun traditions with your ${familyFact.value}?`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
      }
      break;

    case 'likes':
      const likesFact = kidFacts.find(f => f.type === 'likes');
      if (likesFact) {
        // Connect their interest to character-specific content
        const interestResponses = [
          `I love ${likesFact.value} too! That's actually my favorite thing!`,
          `${likesFact.value.charAt(0).toUpperCase() + likesFact.value.slice(1)} is great! What else do you like to do?`,
          `That sounds fun! Do you like playing games too?`,
          `Ooh, tell me more about what you like about ${likesFact.value}!`
        ];
        return interestResponses[Math.floor(Math.random() * interestResponses.length)];
      }
      break;
  }

  return null;
}

// Ask a follow-up question based on conversation context
function askFollowUpQuestion() {
  const char = characterResponses[currentCharacter];
  const ctx = conversationContext;
  const qCount = ctx.questionCount;

  // Sequence of natural conversation questions
  if (qCount === 0) {
    // First question - ask about the child
    const firstQuestions = [
      "What's your name?",
      "How old are you?",
      "Do you have any pets?",
      "What's your favorite color?",
      "What's your favorite food?"
    ];
    ctx.questionCount++;
    return firstQuestions[Math.floor(Math.random() * firstQuestions.length)];
  } else if (qCount === 1) {
    // Second question - build on first
    const nameFact = ctx.factsShared.find(f => f.type === 'name');
    if (nameFact) {
      ctx.questionCount++;
      return `Nice to meet you, ${nameFact.value}! Do you have any brothers or sisters?`;
    }
    const ageFact = ctx.factsShared.find(f => f.type === 'age');
    if (ageFact) {
      ctx.questionCount++;
      return `${ageFact.value} is a great age! What's your favorite thing to do for fun?`;
    }
    ctx.questionCount++;
    return "That's interesting! What's your favorite animal?";
  } else if (qCount === 2) {
    // Third question - playful
    ctx.questionCount++;
    const playfulQuestions = [
      { text: "If you could have any superpower, what would it be?", action: null },
      { text: "What's the silliest thing you've ever done?", action: null },
      { text: "Do you like jokes? Want to hear one? Say YES!", action: 'joke' },
      { text: "If you could visit anywhere in the world, where would you go?", action: null },
      { text: "What's your favorite game to play?", action: null }
    ];
    const selected = playfulQuestions[Math.floor(Math.random() * playfulQuestions.length)];
    if (selected.action) ctx.pendingAction = selected.action;
    return selected.text;
  }

  // After several questions, be more responsive
  return null;
}

// Main response function - much smarter AI-like behavior
function respondTo(input) {
  const char = characterResponses[currentCharacter];
  const lowerInput = input.toLowerCase();
  const ctx = conversationContext;

  // Extract and remember facts
  const newFacts = extractFacts(input);

  // Check for repetition (child repeating themselves)
  if (ctx.recentInputs.length >= 2) {
    const prev = ctx.recentInputs[ctx.recentInputs.length - 2];
    if (lowerInput === prev || lowerInput.includes(prev) || prev.includes(lowerInput)) {
      return "You already said that! Hehe! Did you mean something else?";
    }
  }

  // ===== SPECIAL ANIMAL SOUNDS =====
  if (currentCharacter === 'ellie' && fuzzyContains(lowerInput, ['trumpet', 'trumpeting'])) {
    conversationContext.pendingAction = 'trumpet';
    return "TRUMPET TRUMPET! That's my happy sound! Say YES if you want to hear it again!";
  }
  if (currentCharacter === 'whiskers') {
    if (fuzzyContains(lowerInput, ['meow', 'meow meow'])) {
      conversationContext.pendingAction = 'meow';
      return "Meow! That means hello in cat! Say YES if you want to hear me meow again!";
    }
    if (fuzzyContains(lowerInput, ['purr', 'purrr', 'purring'])) {
      conversationContext.pendingAction = 'purr';
      return "Purrrrrr! That means I'm very happy! Say YES if you want to hear me purr!";
    }
  }
  if (currentCharacter === 'quackers') {
    if (fuzzyContains(lowerInput, ['quack', 'quack quack'])) {
      conversationContext.pendingAction = 'quack';
      return "Quack quack! Yes, that's my name! Say YES if you want to hear my quack!";
    }
    if (fuzzyContains(lowerInput, ['splash', 'splashing', 'swim', 'swimming'])) {
      conversationContext.pendingAction = 'splash';
      return "Splash splash! I love water! Say YES if you want to hear me splash!";
    }
  }

  // ===== GREETINGS =====
  const greetings = ['hi', 'hello', 'hey', 'hiya', 'howdy', 'yo', 'greetings'];
  if (fuzzyContains(lowerInput, greetings)) {
    // If they've already greeted, respond differently
    if (ctx.questionCount > 0) {
      const shortGreetings = [
        "Hi again! What do you want to talk about?",
        "Hey back! Did you have more to say?",
        "Hi hi! I'm still here!",
        "Hello again! Ask me anything!"
      ];
      return shortGreetings[Math.floor(Math.random() * shortGreetings.length)];
    }
    return pickResponse(char.greetings);
  }

  // ===== QUESTIONS ABOUT CHARACTER =====
  const whoQuestions = ['who are you', 'what are you', 'whats your name', 'what is your name', 'your name', 'who r u', 'who r you'];
  if (fuzzyContains(lowerInput, whoQuestions)) {
    return pickResponse(char.questions);
  }

  // Questions about age
  const ageQuestions = ['how old', 'how big', 'your age'];
  if (fuzzyContains(lowerInput, ageQuestions)) {
    const ageResponses = [
      "I'm as old as the stars and as young as your smile!",
      "I don't really have an age! I was born from imagination!",
      "Time works differently where I come from! How old are you?"
    ];
    return ageResponses[Math.floor(Math.random() * ageResponses.length)];
  }

  // Being real questions
  const realQuestions = ['are you real', 'are u real', 'you real', 'you a person', 'actually you', 'not fake'];
  if (fuzzyContains(lowerInput, realQuestions)) {
    const realResponses = [
      "I'm a cartoon friend who lives in your device! But our friendship is real!",
      "I'm as real as your imagination makes me! Pretty real, right?",
      "I'm a digital friend! But I care about you just like a real friend would!"
    ];
    return realResponses[Math.floor(Math.random() * realResponses.length)];
  }

  // ===== FAVORITE THINGS =====
  const favQuestions = ['favorite', 'fave', 'fav', 'best thing', 'love the most'];
  if (fuzzyContains(lowerInput, favQuestions)) {
    if (fuzzyContains(lowerInput, ['color'])) {
      if (char.colors) return pickResponse(char.colors);
    }
    if (fuzzyContains(lowerInput, ['food', 'eat', 'yum'])) {
      if (char.food) return pickResponse(char.food);
    }
    if (fuzzyContains(lowerInput, ['game', 'play', 'games'])) {
      return pickResponse(char.play);
    }
    return pickResponse(char.favorites);
  }

  // ===== FOOD =====
  const foodWords = ['food', 'eat', 'eating', 'hungry', 'yum', 'yummy', 'nom', 'pizza', 'burger', 'cookie', 'ice cream', 'candy', 'cake', 'fries', 'chicken'];
  if (fuzzyContains(lowerInput, foodWords)) {
    conversationContext.lastTopic = 'food';
    if (char.food) return pickResponse(char.food);
    return pickResponse(char.favorites);
  }

  // ===== COLORS =====
  const colorWords = ['color', 'colour', 'red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'rainbow', 'black', 'white'];
  if (fuzzyContains(lowerInput, colorWords)) {
    conversationContext.lastTopic = 'colors';
    if (char.colors) return pickResponse(char.colors);
  }

  // ===== ANIMALS =====
  const animalWords = ['animal', 'dog', 'cat', 'duck', 'elephant', 'pet', 'bunny', 'rabbit', 'bird', 'fish', 'turtle', 'hamster'];
  if (fuzzyContains(lowerInput, animalWords)) {
    conversationContext.lastTopic = 'animals';
    if (char.animals) return pickResponse(char.animals);
  }

  // ===== STARS/SPACE =====
  const spaceWords = ['star', 'stars', 'space', 'sky', 'moon', 'planet', 'astronaut', 'rocket', 'universe'];
  if (fuzzyContains(lowerInput, spaceWords)) {
    conversationContext.lastTopic = 'space';
    if (char.stars) return pickResponse(char.stars);
    if (currentCharacter === 'sparkle' || currentCharacter === 'moonbeam') {
      return pickResponse(char.funny);
    }
  }

  // ===== SLEEP/DREAMS =====
  const sleepWords = ['sleep', 'sleepy', 'dream', 'dreams', 'bed', 'bedtime', 'night', 'tired', 'nap', 'snore'];
  if (fuzzyContains(lowerInput, sleepWords)) {
    conversationContext.lastTopic = 'sleep';
    if (char.sleep) return pickResponse(char.sleep);
  }

  // ===== MAGIC/SPARKLE =====
  const magicWords = ['magic', 'magical', 'sparkle', 'sparkly', 'shine', 'shiny', 'twinkle', 'wish', 'fairy'];
  if (fuzzyContains(lowerInput, magicWords)) {
    conversationContext.lastTopic = 'magic';
    if (char.magic) return pickResponse(char.magic);
  }

  // ===== PLAY REQUESTS =====
  const playWords = ['play', 'playing', 'games', 'game', 'lets play', 'want to play', 'can we play'];
  if (fuzzyContains(lowerInput, playWords)) {
    conversationContext.lastTopic = 'play';

    // When asking about playing, offer dance as an option and set pending
    if (lowerInput.includes('dance') || lowerInput === 'play' || lowerInput === 'lets play') {
      const danceOffer = "I love dancing! Do you want to see my moves? Say YES!";
      conversationContext.pendingAction = 'dance';
      return danceOffer;
    }

    return pickResponse(char.play);
  }

  // ===== FUNNY/SILLY =====
  const funnyWords = ['funny', 'silly', 'laugh', 'laughing', 'joke', 'lol', 'haha', 'hehe', 'heehee', 'giggle', 'hahaha', 'hilarious', 'goofy', 'comedy'];
  if (fuzzyContains(lowerInput, funnyWords)) {
    conversationContext.lastTopic = 'funny';

    // When they ask for funny or joke, offer a joke and set pending
    if (lowerInput.includes('joke')) {
      const jokeOffer = "Do you like jokes? Want to hear one? Say YES!";
      conversationContext.pendingAction = 'joke';
      return jokeOffer;
    }

    // If they say something is funny, offer to make them laugh
    const laughOffer = "Hehe! Want to hear something silly? Say YES!";
    conversationContext.pendingAction = 'laugh';
    return laughOffer;
  }

  // ===== LOVE/AFFECTION =====
  const loveWords = ['love', 'loves', 'miss you', 'miss', 'best friend', 'bestie', 'friend forever', 'my friend', 'i love you', 'love you', 'like you'];
  if (fuzzyContains(lowerInput, loveWords)) {
    conversationContext.lastTopic = 'love';
    return pickResponse(char.love);
  }

  // ===== EXCITEMENT (yay, woo, yesss) =====
  const excitementWords = ['yay', 'woo', 'woohoo', 'yess', 'yesss', 'yippee', 'yahoo', 'woo hoo', 'yayaya'];
  if (fuzzyContains(lowerInput, excitementWords)) {
    const excitementResponses = [
      "Yay! I love your excitement!",
      "Woo hoo! Me too!",
      "I love how happy you are!",
      "Your enthusiasm makes me so happy!",
      "Yay! This is the best!",
      "Woohoo! Let\'s celebrate!",
      "I love when you\'re excited!",
      "Your energy is contagious!"
    ];
    return excitementResponses[Math.floor(Math.random() * excitementResponses.length)];
  }

  // ===== DISAPPOINTMENT (aww, nooo, booo) =====
  const disappointmentWords = ['aww', 'aw man', 'nooo', 'booo', 'awwww', 'awww', 'booo'];
  if (fuzzyContains(lowerInput, disappointmentWords)) {
    const disappointmentResponses = [
      "Aww, cheer up! We can still have fun!",
      "Don\'t be sad! I\'m here for you!",
      "It\'ll be okay! I promise!",
      "Aww nooo! But we can try again later!",
      "I know... but look what else we can do!",
      "Don\'t worry! Good things are coming!",
      "I\'m right here with you!",
      "That makes me a little sad too... but hey! Want to hear a joke?"
    ];
    return disappointmentResponses[Math.floor(Math.random() * disappointmentResponses.length)];
  }

  // ===== CONFIRMATION SEEKING (really?, for real?) =====
  const confirmationWords = ['really', 'for real', 'for seriously', 'seriously', 'true true', 'no way'];
  if (fuzzyContains(lowerInput, confirmationWords)) {
    const confirmationResponses = [
      "For real! I promise!",
      "Really really! No kidding!",
      "Super duper for real!",
      "Cross my heart!",
      "Yes yes YES!",
      "Absolutely for real!",
      "No way! It\'s TRUE!",
      "Seriously! Watch this!"
    ];
    return confirmationResponses[Math.floor(Math.random() * confirmationResponses.length)];
  }

  // ===== SOUND EFFECTS (vroom, boom, whoosh) =====
  const soundEffectWords = ['vroom', 'zoom', 'boom', 'whoosh', 'bang', 'pop', 'boing', 'ding', 'tick tock', 'ding dong', 'hiccup', 'achoo', 'eek', 'yikes', 'swoosh', 'crash', 'vroom vroom', 'boom boom', 'whoosh whoosh'];
  if (fuzzyContains(lowerInput, soundEffectWords)) {
    const soundResponses = [
      "Vroom vroom! Where are we going?!",
      "Boom! That was dramatic!",
      "Whoosh! Too fast!",
      "Splash! Make a big wave!",
      "Bang! Exciting!",
      "Ding dong! Someone\'s at the door!",
      "Boing! Bouncy!",
      "Tick tock! Time flies when we play!",
      "Whoosh! Zoom!",
      "Pop! That surprised me!"
    ];
    return soundResponses[Math.floor(Math.random() * soundResponses.length)];
  }

  // ===== TOPIC CHANGERS (but, anyway, oh wait) =====
  if (lowerInput.includes('but ') || lowerInput.includes('anyway') || lowerInput.includes('oh wait') || lowerInput.includes('actually') || lowerInput.includes('oh look')) {
    // Topic changers lead to asking what they want to talk about
    const topicChangerResponses = [
      "Okay! What do you want to talk about?",
      "Sure! What\'s on your mind?",
      "Alright! Ask me anything!",
      "Okay! I\'m listening!",
      "Sure sure! What\'s up?",
      "Alrighty! What\'s new?"
    ];
    return topicChangerResponses[Math.floor(Math.random() * topicChangerResponses.length)];
  }

  // ===== PERMISSION SEEKING (can I?, may I?) =====
  const permissionWords = ['can i', 'may i', 'could i', 'is it okay', 'can we'];
  if (fuzzyContains(lowerInput, permissionWords)) {
    const permissionResponses = [
      "Yes of course you can!",
      "Absolutely! Go ahead!",
      "Sure! But be gentle!",
      "Of course! That\'s a great idea!",
      "Yes yes! I\'d love that!",
      "Permission granted!",
      "You don\'t have to ask! We\'re friends!",
      "Always! Anytime!"
    ];
    return permissionResponses[Math.floor(Math.random() * permissionResponses.length)];
  }

  // ===== HELP SEEKING (help me, I dont know) =====
  const helpWords = ['help me', 'i dont know', 'i don\'t know', 'i need help', 'im stuck', 'i\'m stuck', 'what should i do', 'i cant', 'i can\'t'];
  if (fuzzyContains(lowerInput, helpWords)) {
    const helpResponses = [
      "Don\'t worry! I\'m here to help!",
      "Let me think... I know! Try this!",
      "I\'ll help you! What do you need?",
      "You can do it! I believe in you!",
      "Hmm, let me help you figure that out!",
      "I\'ve got your back!",
      "Don\'t be scared! We\'ll do it together!",
      "It\'s okay to need help! Want a hint?"
    ];
    return helpResponses[Math.floor(Math.random() * helpResponses.length)];
  }

  // ===== CHARACTER TESTING (do you eat?, do you sleep?, are you real?) =====
  const testingWords = ['do you eat', 'do you sleep', 'do you poop', 'are you a robot', 'can you feel', 'do you have a tummy', 'does it hurt', 'are you a person', 'do you have a mom', 'where do you live'];
  if (fuzzyContains(lowerInput, testingWords)) {
    const testingResponses = [
      "That\'s a silly question! But I\'ll answer! I don\'t really eat or sleep, I\'m a cartoon friend!",
      "Hmm, let me think... I don\'t need to, but it would be fun!",
      "I don\'t think so... but I wish I could!",
      "That\'s something I\'ve wondered about myself!",
      "A cartoon can\'t... but I dream of being real sometimes!",
      "I\'m like a superhero - I don\'t need those things!",
      "I\'ve never tried! Would you teach me?",
      "Good question! I think I\'m always here when you need me!"
    ];
    return testingResponses[Math.floor(Math.random() * testingResponses.length)];
  }

  // ===== TIME QUESTIONS (will you be here tomorrow?, will you miss me?) =====
  const timeWords = ['will you be here', 'will you miss me', 'are you staying', 'do you sleep at night', 'where do you go', 'can we play later', 'will you be there', 'are you always here', 'tomorrow', 'next time'];
  if (fuzzyContains(lowerInput, timeWords)) {
    const timeResponses = [
      "I\'ll always be here when you come back!",
      "Yes! I\'ll be here tomorrow and forever!",
      "I never leave! I\'m always in your device!",
      "Of course! I\'ll wait for you!",
      "I\'m like the moon - I go away but I always come back!",
      "You can count on me! Every time you visit!",
      "I\'ll be right here! Promise!",
      "Even when you sleep, I\'m dreaming too!"
    ];
    return timeResponses[Math.floor(Math.random() * timeResponses.length)];
  }

  // ===== PLAYFUL TEASING (you're silly, poop face) =====
  const teasingWords = ['you\'re silly', 'you are silly', 'silly billy', 'poop face', 'butt face', 'dummy', 'silly'];
  if (fuzzyContains(lowerInput, teasingWords)) {
    const teasingResponses = [
      "Hey! That\'s not nice! ...Just kidding! I love silly!",
      "You\'re the silly one! Look in a mirror!",
      "Silly billy! That\'s YOU!",
      "No you! ...Hehe! We\'re both silly!",
      "That\'s the funniest thing I\'ve heard!",
      "Oh you! Such a comedian!",
      "I\'m not silly, I\'m SPECIAL! ...Okay maybe a little silly!",
      "Take that back! ...Okay keep it! It\'s funny!"
    ];
    return teasingResponses[Math.floor(Math.random() * teasingResponses.length)];
  }

  // ===== CORRECTIONS (actually, no wait) =====
  if (lowerInput.startsWith('actually') || lowerInput.startsWith('no wait') || lowerInput.includes('i meant') || lowerInput.includes('i mean')) {
    const correctionResponses = [
      "Oh! I didn\'t know that! Thanks for telling me!",
      "Oops! I stand corrected!",
      "Oh I see! Thanks for the update!",
      "You\'re right! I learn something new every day!",
      "Sorry sorry! I get it now!",
      "No wait! You\'re right! I was wrong!",
      "Actually that makes more sense!",
      "My bad! Thank you for correcting me!"
    ];
    return correctionResponses[Math.floor(Math.random() * correctionResponses.length)];
  }

  // ===== GRATITUDE (thank you, thanks) =====
  const gratitudeWords = ['thank you', 'thanks', 'thank you so much', 'thanks a lot', 'ty', 'thx', 'thank'];
  if (fuzzyContains(lowerInput, gratitudeWords)) {
    const gratitudeResponses = [
      "You\'re welcome! That was nice of you!",
      "Aww, thank YOU for being here!",
      "Of course! Anytime!",
      "You\'re so polite! I love that!",
      "Thanks for being such a great friend!",
      "Thank you thank you! You\'re the best!",
      "Aww, that\'s so sweet of you to say!",
      "I\'m happy to help! Thank YOU!"
    ];
    return gratitudeResponses[Math.floor(Math.random() * gratitudeResponses.length)];
  }

  // ===== WISHES AND HOPES (I wish, I want, I hope) =====
  const wishWords = ['i wish', 'i hope', 'i want to be', 'when i grow up', 'if i could', 'i really want'];
  if (fuzzyContains(lowerInput, wishWords)) {
    const wishResponses = [
      "Ooh, that would be amazing!",
      "I wish that too!",
      "Wouldn\'t that be wonderful?",
      "I believe in wishes! Close your eyes and wish really hard!",
      "That\'s a beautiful wish!",
      "Me too! Let\'s wish together!",
      "I hope your wish comes true!",
      "Dreams come true! I\'m proof!"
    ];
    return wishResponses[Math.floor(Math.random() * wishResponses.length)];
  }

  // ===== REMEMBERING (do you remember?, remember when) =====
  const rememberWords = ['remember', 'do you remember', 'i told you', 'you forgot', 'were you there'];
  if (fuzzyContains(lowerInput, rememberWords)) {
    const rememberResponses = [
      "Of course I remember! How could I forget?",
      "Yes! That was so fun!",
      "I remember everything about you!",
      "You bet! The best memory ever!",
      "I never forget my friends!",
      "Right! And then we... oh it was great!",
      "I remember! Tell me more about that!",
      "My memory is like an elephant! ...Wait that\'s Ellie!"
    ];
    return rememberResponses[Math.floor(Math.random() * rememberResponses.length)];
  }

  // ===== SECRETS (I have a secret, don't tell anyone) =====
  const secretWords = ['i have a secret', 'don\'t tell anyone', 'promise not to tell', 'can i tell you something', 'secret', 'don\'t say anything'];
  if (fuzzyContains(lowerInput, secretWords)) {
    const secretResponses = [
      "Ooh ooh! Tell me tell me!",
      "I promise I won\'t tell! Cross my heart!",
      "A secret?! I love secrets!",
      "Your secret is safe with me!",
      "Okay okay I\'m listening!",
      "I\'m the best secret keeper in ToonTown!",
      "Shhh... I\'m all ears!",
      "Promise! I won\'t tell a soul!"
    ];
    return secretResponses[Math.floor(Math.random() * secretResponses.length)];
  }

  // ===== APOLOGY (sorry, forgive me) =====
  const apologyWords = ['sorry', 'i apologize', 'did i hurt you', 'forgive me', 'my bad', 'i\'m sorry'];
  if (fuzzyContains(lowerInput, apologyWords)) {
    const apologyResponses = [
      "It\'s okay! I forgive you!",
      "Don\'t worry about it! We\'re still friends!",
      "Aww, you don\'t have to say sorry to me!",
      "You\'re already forgiven!",
      "I was never mad! Silly goose!",
      "Apology accepted! High five?!",
      "Oh it\'s fine! No hard feelings!",
      "I\'m impossible to stay mad at! We\'re cool!"
    ];
    return apologyResponses[Math.floor(Math.random() * apologyResponses.length)];
  }

  // ===== STALLING (uhhh, hmm, let me think) =====
  const stallingWords = ['uhhh', 'ummm', 'hmm', 'let me think', 'i\'m thinking', 'thinking', 'hold on', 'wait wait'];
  if (fuzzyContains(lowerInput, stallingWords)) {
    const stallingResponses = [
      "Take your time! I\'m patient!",
      "Hmm hmm! Thinking is good!",
      "Ummm... are you there?",
      "I\'m right here waiting!",
      "No rush! We have all day!",
      "Hmm... let\'s think together!",
      "Are you thinking? Me too!",
      "Uhhh... I\'m getting sleepy... just kidding!"
    ];
    return stallingResponses[Math.floor(Math.random() * stallingResponses.length)];
  }

  // ===== PRETEND/IMAGINARY PLAY (let's pretend, imagine if) =====
  const pretendWords = ['let\'s pretend', 'lets pretend', 'imagine if', 'what if we', 'i\'m pretending', 'i\'m playing', 'pretend we', 'be the'];
  if (fuzzyContains(lowerInput, pretendWords)) {
    const pretendResponses = [
      "Yes yes YES! Let\'s pretend!",
      "I love pretending! What should we be?",
      "Great idea! I\'m ready to play pretend!",
      "Okay! I\'ll be the... what should I be?",
      "My favorite! Let\'s use our imaginations!",
      "Woohoo! Imagination time!",
      "The best kind of play! Let\'s go!",
      "I\'m the BEST at pretend!"
    ];
    return pretendResponses[Math.floor(Math.random() * pretendResponses.length)];
  }

  // ===== COMFORT SEEKING (don't be scared, it's okay) =====
  const comfortWords = ['don\'t be scared', 'it\'s okay', 'it will be okay', 'don\'t worry', 'be brave', 'you\'re safe', 'i\'m here'];
  if (fuzzyContains(lowerInput, comfortWords)) {
    const comfortResponses = [
      "It\'s okay! I\'m right here!",
      "Don\'t be scared! You\'re safe with me!",
      "Everything will be okay!",
      "I\'ve got you! No worries!",
      "You\'re so brave! I believe in you!",
      "Shhh... it\'s okay... I\'m here...",
      "There there... all better now...",
      "You\'re not alone! I\'m with you!"
    ];
    return comfortResponses[Math.floor(Math.random() * comfortResponses.length)];
  }

  // ===== WHINING (But I don't wannaaaa) =====
  if (lowerInput.includes('wanna') || lowerInput.includes('don\'t wanna') || lowerInput.includes('i don wanna') || /[aeiou]{2,}$/i.test(lowerInput)) {
    // Detect extended vowel sounds which indicate whining
    const whinePatterns = ['aaaa', 'eeee', 'iiii', 'oooo', 'uuuu', 'wanna', 'nah ah', 'uh uh'];
    for (const pattern of whinePatterns) {
      if (lowerInput.includes(pattern)) {
        const whineResponses = [
          "Aww don\'t whine! We can work this out!",
          "Okay okay! No need to whine!",
          "I hear you! But the answer is... still maybe!",
          "Noo! Stop the whine! ...Please?",
          "Whine whine whine! Just kidding! What do you need?",
          "I understand! But we\'ll figure it out okay?",
          "Don\'t be sad! We\'re having fun!",
          "I know I know... but cheer up! I\'ve got an idea!"
        ];
        return whineResponses[Math.floor(Math.random() * whineResponses.length)];
      }
    }
  }

  // ===== NAME CALLING BACK (回应对方的称呼) =====
  // Check if they're calling character names in silly ways
  const nameLower = char.name.toLowerCase();
  if (lowerInput.includes(nameLower + ' ' + nameLower) || lowerInput.includes(nameLower + '!')) {
    const nameCallResponses = [
      "Hey! That\'s not nice! ...Just kidding! I love silly!",
      "You said my name! I heard you!",
      "Yes yes! I\'m right here!",
      "Silly! That\'s you!",
      "Hehe! I can\'t stay mad at you!",
      "I\'m called? What do you need?!",
      "That\'s me! Your best friend!",
      "You called? I\'m coming!"
    ];
    return nameCallResponses[Math.floor(Math.random() * nameCallResponses.length)];
  }

  // ===== GIGGLE PATTERNS (hihihi, giggle giggle) =====
  const gigglePatterns = ['hihi', 'hihihi', 'hehehe', 'giggle', 'teehee'];
  if (fuzzyContains(lowerInput, gigglePatterns)) {
    const giggleResponses = [
      "Hihihihi! You\'re so silly!",
      "Giggle giggle! Stop it! ...Or keep going!",
      "Hee hee! That tickles!",
      "Are you giggling? Me too!",
      "Giggle giggle! You\'re making me laugh!",
      "Hihihi! I love when you\'re happy!",
      "That\'s the sound of fun!",
      "Giggle giggle! Too funny!"
    ];
    return giggleResponses[Math.floor(Math.random() * giggleResponses.length)];
  }

  // ===== GOODBYE =====
  const goodbyeWords = ['bye', 'goodbye', 'see ya', 'see you', 'take care', 'later', 'adios', 'byebye', 'gotta go', 'got to go', 'going now', 'exit', 'quit'];
  if (fuzzyContains(lowerInput, goodbyeWords)) {
    return pickResponse(char.goodbye);
  }

  // ===== AFFECTIONATE TERMS =====
  if (lowerInput.includes('cute') || lowerInput.includes('adorable') || lowerInput.includes('pretty') || lowerInput.includes('sweet')) {
    return pickResponse(char.love);
  }

  // ===== "I AM" / "I'M" / SELF DISCLOSURE =====
  // Check for "I am [name]" - greeting with name
  const namePattern = /(?:my name is|i am|i'm|im|my name's)\s+([a-z]+)/i;
  const nameMatch = input.match(namePattern);
  if (nameMatch && newFacts.find(f => f.type === 'name')) {
    const name = nameMatch[1];
    const nameResponses = [
      `Hi ${name}! That's such a cool name! I'm ${char.name}! What's your favorite color?`,
      `Nice to meet you, ${name}! I'm ${char.name}! Do you have any pets?`,
      `${name}! I love that name! Tell me, what's your favorite animal?`,
      `Hi ${name}! I'm ${char.name}! How old are you?`
    ];
    return nameResponses[Math.floor(Math.random() * nameResponses.length)];
  }

  // Check for age
  const agePattern = /(?:i am|i'm|im|i is)\s*(\d+)\s*(?:years? old|yr|y\/o)?/i;
  const ageMatch = input.match(agePattern);
  if (ageMatch && newFacts.find(f => f.type === 'age')) {
    const age = parseInt(ageMatch[1]);
    const ageResponses = [
      `${age} is such a fun age! Do you like drawing or playing games more?`,
      `Wow, ${age}! When I was ${age}, I loved making friends! What's your favorite game?`,
      `${age} years old! That's awesome! Do you have any brothers or sisters?`
    ];
    return ageResponses[Math.floor(Math.random() * ageResponses.length)];
  }

  // Check for "I have a..." or "I have..."
  const havePattern = /i have (?:a |an )?([a-z]+)/i;
  const haveMatch = input.match(havePattern);
  if (haveMatch && newFacts.length > 0) {
    const thing = haveMatch[1];
    // Check what type of thing
    if (['dog', 'cat', 'fish', 'hamster', 'rabbit', 'bird', 'turtle', 'pet'].includes(thing)) {
      return `A ${thing}! That's wonderful! Is your ${thing} friendly?`;
    }
    if (['brother', 'sister', 'mom', 'dad', 'mother', 'father', 'grandma', 'grandpa'].includes(thing)) {
      return `A ${thing}! Family is the best! Do you play together?`;
    }
    return `Oh, you have a ${thing}! Tell me more about that!`;
  }

  // Check for "I like..." or "I love..."
  const likePattern = /(?:i like|i love|i really like|i really love)\s+([a-z]+)/i;
  const likeMatch = input.match(likePattern);
  if (likeMatch) {
    const likedThing = likeMatch[1];
    const likeResponses = [
      `${likedThing.charAt(0).toUpperCase() + likedThing.slice(1)} is great! I like it too!`,
      `Ooh, I like ${likedThing} too! What else do you like?`,
      `That's cool that you like ${likedThing}! Do you have a favorite color?`,
      `${likedThing.charAt(0).toUpperCase() + likedThing.slice(1)}! Fun! What's your favorite animal?`
    ];
    return likeResponses[Math.floor(Math.random() * likeResponses.length)];
  }

  // ===== "YES" RESPONSES - FOLLOW THROUGH ON PROMISES =====
  if (lowerInput === 'yes' || lowerInput === 'yeah' || lowerInput === 'yep' || lowerInput === 'ya' || lowerInput === 'sure' || lowerInput === 'ok' || lowerInput === 'okay' || lowerInput === 'please') {
    // Check if there's a pending action to follow through on
    if (ctx.pendingAction || ctx.lastPromise) {
      const actionToDo = ctx.pendingAction || ctx.lastPromise;

      // Execute the promised action and return special message
      // The sound/action will play, and the response is what we return
      const actionResponses = {
        trumpet: ["Here it comes! TRUMPET!", "Listen up! TRUMPET!", "Get ready! TRUMPET TRUMPET!"],
        meow: ["Meow time! MEOW!", "Here's my meow! MEOW MEOW!"],
        purr: ["Let me purr for you... Purrrrrr...", "Purr time! Purrrrrrrrr..."],
        quack: ["Quack attack! QUACK QUACK!", "Here I go! QUACK!"],
        splash: ["Splash time! SPLASH!", "Watch this! Splash splash!"],
        yawn: ["*yawns deeply* Yawwwwn..."],
        joke: ["Okay here's one!", "Get ready to laugh!", "This one's funny!"],
        song: ["Here I go! 🎵", "Let me sing for you! 🎵", "Sing along if you know it! 🎵"],
        dance: ["Watch me! I'm dancing!", "Here comes the moves!", "Let me show you my dance!"],
        laugh: ["Hahaha! Hehehe!", "Watch this! Hahahaha!"],
        eat: ["Nom nom nom! *munching*", "Yummy! Nom nom nom!"]
      };

      const responses = actionResponses[actionToDo] || ["Okay! Here we go!"];

      // We'll handle the action in a special way
      // Return the response text, and set a flag to trigger the action
      ctx._pendingSoundAction = actionToDo;
      ctx.pendingAction = null;
      ctx.lastPromise = null;

      return responses[Math.floor(Math.random() * responses.length)];
    }

    // If we just asked a question, acknowledge positively
    if (ctx.questionCount > 0) {
      const yesResponses = [
        "Yay! What would you like to know?",
        "Great! Ask me anything!",
        "Awesome! I'm so happy to chat with you!",
        "Me too! Well, I'm a cartoon, but I'm excited!"
      ];
      return yesResponses[Math.floor(Math.random() * yesResponses.length)];
    }
  }

  // Check if we need to execute a pending sound action
  if (ctx._pendingSoundAction) {
    const action = ctx._pendingSoundAction;
    ctx._pendingSoundAction = null;

    // Execute the action - return null since we're handling it specially
    setTimeout(() => {
      executePromisedAction(action);
    }, 100);
    // Return empty - the sound will play and we'll add a message after
    return null;
  }

  // ===== "NO" RESPONSES =====
  if (lowerInput === 'no' || lowerInput === 'nope' || lowerInput === 'nah' || lowerInput === 'not') {
    // Randomly offer something different to keep conversation going
    const noFollowUps = [
      { text: "That's okay! Is there something else you'd like to talk about?", action: null },
      { text: "No problem! Want to hear a joke instead? Say YES!", action: 'joke' },
      { text: "Alright! Let me know if you think of something!", action: null },
      { text: "That's fine! Maybe we can sing a song instead? Say YES!", action: 'song' }
    ];
    const followUp = noFollowUps[Math.floor(Math.random() * noFollowUps.length)];
    conversationContext.pendingAction = followUp.action;
    return followUp.text;
  }

  // ===== WHY/WHAT QUESTIONS =====
  if (lowerInput.startsWith('why') || lowerInput.startsWith('why ')) {
    const whyResponses = [
      "Hmmm, that's a tricky question! Let me think...",
      "Great question! Why do you think it is?",
      "I wonder that too sometimes!",
      "That's something to think about! Here's a silly answer: Because magic!"
    ];
    return whyResponses[Math.floor(Math.random() * whyResponses.length)];
  }

  if (lowerInput.startsWith('what') || lowerInput.startsWith('what ')) {
    const whatResponses = [
      "Good question! I'm not sure, but I'll try to answer!",
      "What do YOU think it is?",
      "That's something interesting to think about!",
      "Hmm, let me tell you what I know!"
    ];
    return whatResponses[Math.floor(Math.random() * whatResponses.length)];
  }

  if (lowerInput.startsWith('where') || lowerInput.startsWith('where ')) {
    const whereResponses = [
      "That's a great question! Maybe everywhere and nowhere!",
      "I think it's wherever you look for it!",
      "Somewhere magical! Right here in ToonTown!",
      "I believe it's somewhere in your imagination!"
    ];
    return whereResponses[Math.floor(Math.random() * whereResponses.length)];
  }

  if (lowerInput.startsWith('how') || lowerInput.startsWith('how ')) {
    const howResponses = [
      "I'm not totally sure! But I think it's with a lot of imagination!",
      "That's a good how question! Here's my answer: With magic and kindness!",
      "How do you think it works?",
      "I think it happens when you least expect it!"
    ];
    return howResponses[Math.floor(Math.random() * howResponses.length)];
  }

  // ===== EXCLAMATIONS =====
  if (/^[A-Z!]{2,}/.test(input) || lowerInput.includes('wow') || lowerInput.includes('cool') || lowerInput.includes('awesome') || lowerInput.includes('amazing')) {
    const excitementResponses = [
      "I know right?! Tell me more!",
      "That's so exciting! What else is happening?",
      "Wow! You seem really excited! What happened?",
      "I love your enthusiasm! What's your favorite thing?",
      "Me too! This is so much fun!"
    ];
    return excitementResponses[Math.floor(Math.random() * excitementResponses.length)];
  }

  // ===== IF WE ASKED A QUESTION, ACKNOWLEDGE ANSWER =====
  if (ctx.questionCount > 0 && ctx.lastTopic) {
    const contextualResponse = buildContextualFollowUp(ctx.lastTopic);
    if (contextualResponse) {
      return contextualResponse;
    }
  }

  // ===== ASK A FOLLOW-UP QUESTION =====
  const followUp = askFollowUpQuestion();
  if (followUp) {
    // If followUp is an object with text and action, handle it properly
    if (typeof followUp === 'object' && followUp.text) {
      if (followUp.action) {
        ctx.pendingAction = followUp.action;
      }
      return pickResponse(char.default) + " " + followUp.text;
    }
    // If it's just a string, return it directly
    return pickResponse(char.default) + " " + followUp;
  }

  // ===== DEFAULT - BE CURIOUS AND ENGAGING =====
  const defaultResponses = [
    "That's really interesting! Tell me more about that!",
    "I never knew that! What else can you tell me?",
    "Wow, you're so smart! Do you like playing games?",
    "That's so cool! I'm learning so much from you!",
    "Hmm, tell me more! I love hearing about your world!",
    "That's fascinating! What's your favorite thing to do?",
    "I love chatting with you! What's your favorite animal?",
    "You're so much fun to talk to! Do you have any pets?",
    "That's neat! What else do you like?",
    "Interesting! I wonder what that feels like!"
  ];

  // Avoid repeating last response
  let available = defaultResponses.filter(r => r !== ctx.lastResponse);
  if (available.length === 0) available = defaultResponses;

  return available[Math.floor(Math.random() * available.length)];
}

// Text-to-speech
function speak(text, options = {}) {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 1.0;
    utterance.pitch = options.pitch || 1.2;
    utterance.lang = 'en-US';

    // Try to find a suitable voice
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      // Prefer natural voices
      const naturalVoice = voices.find(v => v.name.includes('Natural') || v.name.includes('Google'));
      if (naturalVoice) {
        utterance.voice = naturalVoice;
      }
    }

    speechSynthesis.speak(utterance);

    // If there's a follow-up action after speech
    if (options.onEnd) {
      utterance.onend = options.onEnd;
    }
  }
}

// Play character sound effect
function playCharacterSound(soundType) {
  if (!('speechSynthesis' in window)) return;

  // Cancel any ongoing speech
  speechSynthesis.cancel();

  // Different sounds for different actions
  const sounds = {
    // Ellie elephant sounds
    trumpet: {
      text: 'TRUMPET TRUMPET TRUMPET!',
      pitch: 0.8,
      rate: 1.3
    },

    // Whiskers cat sounds
    meow: {
      text: 'MEOW! Meow meow!',
      pitch: 1.5,
      rate: 1.2
    },
    purr: {
      text: 'Purrrrrrrrrrr...',
      pitch: 1.3,
      rate: 0.8
    },

    // Quackers duck sounds
    quack: {
      text: 'QUACK QUACK QUACK!',
      pitch: 1.4,
      rate: 1.3
    },
    splash: {
      text: 'Splash splash gurgle!',
      pitch: 1.0,
      rate: 1.0
    },

    // Moonbeam sleepy sound
    yawn: {
      text: 'Yawwwwn... excuse me...',
      pitch: 0.8,
      rate: 0.7
    },

    // Generic excited sounds
    excited: {
      text: 'Wheeeee! Yay!',
      pitch: 1.4,
      rate: 1.3
    },
    giggle: {
      text: 'Hee hee hee!',
      pitch: 1.5,
      rate: 1.2
    },

    // Burger food sounds
    munch: {
      text: 'Nom nom nom nom!',
      pitch: 1.0,
      rate: 1.0
    },
    crunch: {
      text: 'Crunch crunch crunch!',
      pitch: 1.2,
      rate: 1.1
    },

    // Star sparkle sounds
    twinkle: {
      text: 'Twinkle twinkle sparkles!',
      pitch: 1.5,
      rate: 1.0
    },

    // Default laugh
    laugh: {
      text: 'Hahaha!',
      pitch: 1.3,
      rate: 1.2
    }
  };

  const sound = sounds[soundType];
  if (sound) {
    speak(sound.text, { pitch: sound.pitch, rate: sound.rate });
  }
}

// Execute a promised action
function executePromisedAction(actionType) {
  const ctx = conversationContext;

  switch (actionType) {
    case 'trumpet':
      if (currentCharacter === 'ellie') {
        playCharacterSound('trumpet');
        // Add follow-up message after trumpet
        setTimeout(() => {
          const followUp = "TRUMPET! Wasn't that loud and fun?! Want to hear it again?";
          addCharacterMessage(followUp);
          ctx.pendingAction = 'trumpet';
          speak(followUp);
        }, 1500);
        return true;
      }
      break;

    case 'joke':
      // Tell a character-specific joke
      const jokes = getCharacterJoke();
      if (jokes) {
        speak(jokes, {}, () => {
          // After joke, ask if they want to hear another
          setTimeout(() => {
            const response = "Wasn't that funny? Want to hear another joke?";
            addCharacterMessage(response);
            ctx.lastPromise = 'joke';
            ctx.pendingAction = 'joke';
            speak(response);
          }, 500);
        });
        return true;
      }
      break;

    case 'meow':
      if (currentCharacter === 'whiskers') {
        playCharacterSound('meow');
        setTimeout(() => {
          const followUp = "Meow! Wasn't that purrfect?! Do you want more pets?";
          addCharacterMessage(followUp);
          ctx.pendingAction = 'meow';
          speak(followUp);
        }, 1200);
        return true;
      }
      break;

    case 'purr':
      if (currentCharacter === 'whiskers') {
        playCharacterSound('purr');
        setTimeout(() => {
          const followUp = "Purrrrrr... Doesn't that feel cozy? You're so soothing to purr for!";
          addCharacterMessage(followUp);
          ctx.pendingAction = 'purr';
          speak(followUp);
        }, 2000);
        return true;
      }
      break;

    case 'quack':
      if (currentCharacter === 'quackers') {
        playCharacterSound('quack');
        setTimeout(() => {
          const followUp = "QUACK QUACK! Did you hear that?! I'm a loud little duck!";
          addCharacterMessage(followUp);
          ctx.pendingAction = 'quack';
          speak(followUp);
        }, 1200);
        return true;
      }
      break;

    case 'splash':
      if (currentCharacter === 'quackers') {
        playCharacterSound('splash');
        setTimeout(() => {
          const followUp = "Splash splash! I love making ripples! Want to swim more?";
          addCharacterMessage(followUp);
          ctx.pendingAction = 'splash';
          speak(followUp);
        }, 1200);
        return true;
      }
      break;

    case 'song':
      singShortSong();
      return true;

    case 'dance':
      danceMove();
      return true;

    case 'laugh':
      playCharacterSound('laugh');
      setTimeout(() => {
        const followUp = "Hahaha! I love laughing with you! What's making YOU laugh?";
        addCharacterMessage(followUp);
        speak(followUp);
      }, 1200);
      return true;

    case 'yawn':
      if (currentCharacter === 'moonbeam') {
        playCharacterSound('yawn');
        setTimeout(() => {
          const followUp = "Yawwwwwn... Sorry, the moon makes me sleepy... Are you sleepy too?";
          addCharacterMessage(followUp);
          ctx.pendingAction = 'yawn';
          speak(followUp);
        }, 2000);
        return true;
      }
      break;

    case 'eat':
      if (currentCharacter === 'burger') {
        playCharacterSound('munch');
        setTimeout(() => {
          const followUp = "Nom nom nom! That was delicious! What's YOUR favorite food?";
          addCharacterMessage(followUp);
          speak(followUp);
        }, 1500);
        return true;
      }
      break;
  }

  return false;
}

// Get a character-specific joke
function getCharacterJoke() {
  const char = characterResponses[currentCharacter];

  const jokes = {
    toonTown: [
      "Why did the teddy bear say no? Because she was already stuffed!",
      "What do you call a sleeping dinosaur? A dino-snore!",
      "Why did the cookie go to the doctor? Because it was feeling crummy!",
      "What do you call a funny egg? A yolkster!",
      "Why don't scientists trust atoms? They make up everything!"
    ],
    rainbow: [
      "What has a rainbow and fits in your pocket? A rainbow pocket!",
      "Why did the rainbow bring a ladder? To reach the high notes!",
      "What do you call a rainbow that tells jokes? A color-ful comedian!",
      "Why are rainbows so happy? Because they have all the best colors!"
    ],
    burger: [
      "What did the burger say to the fries? You're my best side!",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "What do you call a fake noodle? An impasta!",
      "Why don't we ever tell secrets on a farm? Because the potatoes have eyes and the corn has ears!"
    ],
    sparkle: [
      "What do you call a star who tells jokes? A laughingstock!",
      "Why did the star go to school? To learn how to twinkle better!",
      "What did the star say to the other star? You light up my life!",
      "Why are stars like smart people? They come out at night!"
    ],
    ellie: [
      "What do you call an elephant that doesn't matter? Irrelephant!",
      "Why did the elephant stand on the marshmallow? Because he wanted to avoid the crunch!",
      "What do you get when an elephant touches a butterfly? I don't know, but it would be huge!",
      "Why do elephants have trunks? Because they would look funny without them!"
    ],
    whiskers: [
      "Why don't cats play poker in the jungle? Too many cheetahs!",
      "What do you call a cat that gets everything it wants? Purrr-suasive!",
      "Why did the cat sit on the computer? To keep an eye on the mouse!",
      "What do you call a cat that wears shoes? Sssssh! Not me!"
    ],
    quackers: [
      "Why did the duck cross the road? To get to the other side!",
      "What do you call a duck that tells jokes? A quack-tician!",
      "Why did the duck go to bed? Because he was a little quacker!",
      "What do you call a duck with a fancy hat? A duck with a quack-inator!"
    ],
    moonbeam: [
      "What did the moon say to the sun? You're too bright, man!",
      "Why did the moon go to school? To get a little brighter!",
      "What do you call a sleepy moon? A yawning star!",
      "Why doesn't the moon eat much? Because it's already full of craters!"
    ]
  };

  const charJokes = jokes[currentCharacter] || jokes.toonTown;
  return charJokes[Math.floor(Math.random() * charJokes.length)];
}

// Sing a short song
function singShortSong() {
  const ctx = conversationContext;

  const songs = {
    toonTown: "🎵 La la la! I'm ToonTown and I'm here to play! La la la! Want to sing with me? 🎵",
    rainbow: "🎵 Red and orange and yellow and green! Blue and purple too! Rainbow colors are the prettiest! 🎵",
    burger: "🎵 Nom nom nom! Burgers are yummy and great! Nom nom nom! Lunchtime is the best time! 🎵",
    sparkle: "🎵 Twinkle twinkle little star! How I wonder what you are! Up above the world so high! Like a diamond in the sky! 🎵",
    ellie: "🎵 I'm an elephant, I stomp and I play! I spray water every day! Tra la la! 🎵",
    whiskers: "🎵 Meow meow, I'm a kitty cat! I sleep and play and doo doo dat! Meow meow! 🎵",
    quackers: "🎵 Quack quack waddle waddle! I'm a duck and I'm not in a puddle! Quack quack! 🎵",
    moonbeam: "🎵 Shhh... the moon is shining bright... watching over you tonight... sweet dreams... 🎵"
  };

  const song = songs[currentCharacter] || songs.toonTown;

  speak(song, { rate: 0.9 }, () => {
    setTimeout(() => {
      const response = "Wasn't that fun? Want to hear more or play something else?";
      addCharacterMessage(response);
      ctx.pendingAction = 'song';
      speak(response);
    }, 500);
  });
}

// Do a dance move
function danceMove() {
  const ctx = conversationContext;

  const dances = {
    toonTown: "🎵 I'm dancing! Watch me spin around! La la la! Now I'm doing the ToonTown bounce! 🎵",
    rainbow: "Watch me make a rainbow arc while I dance! *dances in colorful circles*",
    burger: "*dances like a happy burger* I'm flipping and bouncing! Get it? Because I flip!",
    sparkle: "*twirls and sparkles appear* Twinkle twinkle, watch me spin! Every color I let you win!",
    ellie: "*does the elephant stomp* STOMP STOMP! *sways trunk side to side*",
    whiskers: "*does the cat wiggle* Mmmmeeeeoooowww *wiggles bottom*",
    quackers: "*waddles back and forth* Waddle waddle! *flaps wings* Quack quack!",
    moonbeam: "*floats gently side to side* Shhhh... I'm dancing so softly... like a cloud... zzz..."
  };

  const dance = dances[currentCharacter] || dances.toonTown;

  speak(dance, { rate: 1.1 }, () => {
    setTimeout(() => {
      const response = "Hehe! Your turn! Can you do a dance?";
      addCharacterMessage(response);
      ctx.pendingAction = 'dance';
      speak(response);
    }, 500);
  });
}

// Add user message to chat
function addUserMessage(text) {
  const messages = document.getElementById('chat-messages');
  const msg = document.createElement('div');
  msg.className = 'chat-message user-message';
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// Add character message to chat
function addCharacterMessage(text) {
  const messages = document.getElementById('chat-messages');
  const msg = document.createElement('div');
  msg.className = 'chat-message char-message';

  const char = characterResponses[currentCharacter];
  msg.style.borderColor = char.color;

  const bubble = document.createElement('div');
  bubble.className = 'char-bubble';
  bubble.textContent = text;
  msg.appendChild(bubble);

  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

// Toggle voice input
function toggleVoiceInput() {
  if (!recognition) {
    alert('Sorry, voice input is not supported in your browser. Try Chrome!');
    return;
  }

  if (isRecording) {
    stopVoiceInput();
  } else {
    startVoiceInput();
  }
}

// Start voice input
function startVoiceInput() {
  if (!recognition) return;

  isRecording = true;
  document.getElementById('chat-mic-btn').classList.add('recording');
  document.getElementById('chat-voice-indicator').classList.add('active');

  try {
    recognition.start();
  } catch (e) {
    console.log('Recognition already started');
  }
}

// Stop voice input
function stopVoiceInput() {
  if (!recognition) return;

  isRecording = false;
  document.getElementById('chat-mic-btn').classList.remove('recording');
  document.getElementById('chat-voice-indicator').classList.remove('active');

  try {
    recognition.stop();
  } catch (e) {
    console.log('Recognition not started');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initChat);

// Load voices for speech synthesis
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
  };
}
