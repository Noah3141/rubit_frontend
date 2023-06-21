import Head from "next/head";
import React from "react";
import Header from "~/components/header";
import Image from "next/image";
import вы from "./../images/вы-SemanticMap.jpg";
import говорить from "./../images/говоритьTree.jpg";
import кинуть from "./../images/кинутьTree.jpg";
import класть from "./../images/кластьTree.jpg";
import слать from "./../images/слатьTree.jpg";
import судить from "./../images/судитьTree.jpg";
import ездить from "./../images/ездитьTree.jpg";
import Footer from "~/components/footer";

const tree_model = () => {
    const imageWidth = 600;
    const imageHeight = 800;
    return (
        <>
            <Head>
                <title>Tree Model</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main className="flex min-h-screen bg-stone-950 p-2 pb-16 pt-8  font-main text-xl text-stone-300 sm:flex sm:flex-col sm:items-center sm:p-8">
                <div className="px-4 transition-all duration-200 sm:w-[600px] md:w-[700px] lg:w-[800px]">
                    <h1 className="mb-4 text-center text-3xl">
                        Anki Flashcard Deck in the Verb Tree Model
                    </h1>
                    <p>
                        Anki is a digital flashcard application that provides
                        time-delayed exposure. Below you can download a deck
                        which contains a large number of Russian verb trees,
                        presented as: Rootspace (-Branch Imperfective). The deck
                        also contains multiple explanation cards, diagrams,
                        example verb tree demonstrations, and semantic snapshots
                        of the Russian verbal prefixes.
                    </p>
                    <p>
                        {" "}
                        The verb tree model presents Russian verbs as routinely
                        derived sets of branch pairs, generated predictably from
                        a small number of Rootspace arrangements.
                    </p>
                    <p>
                        The footers "Rootspace" and "Branchspace" are intended
                        to be considered systematically paired. That is, a
                        Rootspace of (-ать/-нуть) should be assumed at baseline
                        to result in a doubled perfective branch, etc.
                    </p>
                    <p>
                        The basic rule of this model follows what has become
                        standard fare in Russian linguistic literature: prefixes
                        perfectivize, suffixes imperfectivize.
                    </p>
                    <p>
                        While it is true that given the Rootspace, one can
                        derive the resulting Branchspace, organizing the model
                        that way would be pedagogically verbose, as students
                        would need learn the corresponding Branchspace
                        arrangements for each of the Rootspace prototypes. By
                        minimally increasing the length of the vocabulary token
                        to include the Rootspace and the branch imperfective
                        stem, the model provides a robust, simple, and efficient
                        system of packaging Russian verbs for learning.
                    </p>
                    <p>
                        {" "}
                        So, where the tree model is utilized, the tree is
                        distilled as: Rootspace (-Branch Imperfective)
                    </p>
                    <br />
                    <br />
                    <p>
                        Here, you can download the deck for use in Anki. Below
                        are the contents of the deck.
                    </p>
                    <a
                        href="/static/Verb Root Master List (10-3-22).apkg"
                        download
                    >
                        {" "}
                        <button className="my-4 text-orange-600 hover:text-orange-700">
                            Download Anki Deck
                        </button>{" "}
                    </a>
                    <h1>Verb Tree List</h1>
                    <h2>Trees with Example Diagrams</h2>
                    <div>
                        говорить (-говаривать) <br />
                        судить (-суживать, -суждать) <br />
                        кидать / кинуть (-кидывать)
                        <br />
                        класть / (положить) (-кладывать, -лагать) <br />
                        слать (-сылать)
                        <br />
                        ехать / ездить (-езжать, -езживать) <br />
                    </div>
                    <div className=" flex flex-col lg:flex-row">
                        <Image
                            className=" lg:-translate-x-1/3"
                            src={говорить}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                        <Image
                            className=" lg:-translate-x-1/3"
                            src={судить}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                    </div>
                    <div className=" flex flex-col lg:flex-row">
                        <Image
                            className=" lg:-translate-x-1/3"
                            src={кинуть}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                        <Image
                            className=" lg:-translate-x-1/3"
                            src={класть}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Image
                            className=" lg:-translate-x-1/3"
                            src={слать}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                        <Image
                            className=" lg:-translate-x-1/3"
                            src={ездить}
                            alt="diagram"
                            width={imageWidth}
                            height={imageHeight}
                        ></Image>
                    </div>
                    The 'ехать' image shows absolute canonical motion verb tree
                    format, whereby each root forms their respective branch.
                    Despite this pattern, some motion verbs get more
                    complicated, such as ехать/ездить, which has a doubled
                    perfective branch: в<u>ы</u>ехать в<u>ы</u>ездить both
                    exist.
                    <br />
                    It's important to note that this, because motion verbs
                    require a <i>different than usual metric </i>to judge
                    aspect: заходить is not perfective! In motion verb trees,
                    the "abstract" root forms the imperfective tree. So,
                    usually, there aren't doubled perfective branches in motion
                    verbs.
                    <br />
                    This verb, however, looks more like a usual verb tree. ;
                    <br />
                    Note that ложить is now a proscribed word. The branches that
                    come from it, however, are perfectly ubiquitous. -лагать
                    based imperfectives tend towards a bit more formality. This
                    evidences the myth-mnemonic to help you remember: класть
                    came into fashion pushing out older ложить, in all sorts of
                    spots in the tree, but first the root. Common quirks
                    include: <br />
                    Doubled Perfective Branch, when either of two roots can be
                    prefixed to make perfectives (кинуть)
                    <br />
                    Doubled Imperfective, when multiple endings (or consonant
                    mutations) are possible to create imperfective forms
                    (судить)
                    <br />
                    <h2>Tree List ~ 300</h2>
                    <br />
                    <h4>General Verbs</h4>
                    <br />
                    гадать (-гадывать) to guess, conjecture, surmise, to divine
                    <br />
                    стр<u>о</u>ить (-стр<u>а</u>ивать) to build, make, construct
                    <br />в<u>е</u>сить (-вешивать) to weigh, to hang вешать -
                    to hang (execute)
                    <br />
                    хром<u>а</u>ть (-храмывать) [хромой, хромота] to limp, to be
                    lame; to be poor, far from perfect, not up to standard
                    <br />
                    кур<u>и</u>ть (-куривать) to smoke (e.g. tobacco,
                    cigarettes)
                    <br />
                    крут<u>и</u>ть (-кручивать) to twist, twirl, roll <br />{" "}
                    "скрутить / скручивать - to twist down &gt; "to overpower,
                    subdue, bring to submission"
                    <br />
                    вернуть (-вёртывать); воротить (-ворачивать) to turn (the
                    direction of something), roll, fold
                    <br />
                    бр<u>о</u>сить / брос<u>а</u>ть (-брасывать) to throw, toss
                    <br />
                    вал<u>и</u>ть (-валивать) to heave, hurl, throw (heavily);
                    to screw off
                    <br />
                    одол<u>е</u>ть / одолевать to overcome, to conqeur
                    <br />
                    жать (ж<b>м</b>у, ж<b>м</b>ёшь, ж<b>м</b>ут; ;-жи
                    <b>м</b>ать) to press, squeeze (нажми на кнопку)
                    <br />
                    жать (ж<b>н</b>у, ж<b>н</b>ёшь, ж<b>н</b>ут; -жи<b>н</b>
                    ать) to reap, to crop (whence ужин, which created a second,
                    differently stressed "<b>у</b>жинать)
                    <br />
                    мелькать / мелькнуть (-мелькивать) to flash, flit, blip, be
                    glimpsed
                    <br />
                    мерцать to shimmer, twinkle, glimmer, flicker
                    <br />
                    швыр<u>нут</u>ь / швырять (-швыривать) to toss, hurl, chuck,
                    fling
                    <br />
                    трясти / тряхнуть (-тряхивать or -трясать) to shake, quake,
                    jolt
                    <br />
                    гляд<u>е</u>ть / гл<u>я</u>нуть (-глядывать) to look
                    (attempt to see with eyes) "Stress of -глянуть based
                    perfective branch moves to the -нуть, off of the 'я'."
                    <br />
                    сов<u>а</u>ть / <u>сун</u>уть (-совывать) to put, slip,
                    stick, poke
                    <br />
                    конч<u>а</u>ть / к<u>о</u>нчить ; (-канчивать) to finish,
                    end, conclude ; Unprefixed forms left mainly to sexual
                    meaning, use о- or за-!
                    <br />с<u>ы</u>пать (-<u>а</u>ть) to pour (of solids, e.g.
                    grains, sands, money) с<u>ы</u>пать &gt; обс
                    <u>ы</u>пать / обсып<u>а</u>ть
                    <br />
                    обс<u>ы</u>плю, обсыплешь, обсыплют
                    <br />
                    обсып<u>а</u>ю, обсыпаешь, обсыпают
                    <br />
                    дв<u>и</u>нуть / дв<u>и</u>гать (-<u>а</u>ть) to move
                    (direct something to a position) <br /> Note that stress
                    contrasts aspect when using -дв<u>и</u>гать for Branch
                    forms: <br /> perf. продв
                    <u>и</u>гать / imp. продвиг<u>а</u>ть (suffixed over with -
                    <u>а</u>ть), but also possible is perf. продвинуть.
                    <br />
                    тя<u>нут</u>ь (-тягивать) to pull, draw, haul
                    <br />
                    толк<u>а</u>ть / толкн<u>у</u>ть (-талкивать) ;to push, to
                    shove, to thrust
                    <br />
                    лить (-ливать) to pour (liquids)
                    <br />п<u>о</u>мнить (-помин<u>а</u>ть) to remember,
                    recollect, keep in mind
                    <br />
                    зв<u>я</u>кнуть / зв<u>я</u>кать (-звякивать) to tinkle
                    (make light clinking sounds)
                    <br />
                    свиреп<u>е</u>ть [свирепый] to grow vicious, furious, fierce{" "}
                    ; <br /> "Whenever an -еть verb is made from an adjective,
                    as occurs here, in the meaning "to become that adjective",
                    the conjugation is -<u>е</u>ю, -<u>е</u>ешь, -<u>е</u>ют."
                    <br />
                    пуст<u>и</u>ть / пуск<u>а</u>ть (-пуск<u>а</u>ть) to let, to
                    allow, to permit
                    <br />
                    ждать (-жидать) to wait
                    <br />
                    тереть (-тирать) to rub, wipe ; тру, трёшь, трут
                    <br />
                    стирать (-стирывать) to clean, wash ; Came from тереть + с-
                    + ать = imperfective (wipe down, wipe off). Now its own
                    root, for its own tree.
                    <br />
                    будить (-бужд<u>а</u>ть) to wake, awake, waken
                    <br />
                    делить (-делить / -делять) to divide, share ; Multiple
                    prefixes can occur with this word at once: -ить always the
                    perfective, -ять the imperfective.
                    <br />
                    ныр<u>я</u>ть / ныр<u>нут</u>ь to dive (to plunge into
                    something headlong)
                    <br />
                    звонить (-званивать) to ring, to call (contact by telephone)
                    <br />
                    звать (-зывать) to call, invite
                    <br />
                    том<u>и</u>ть (-томлять) to weary, torment, languish
                    <br />
                    коп<u>и</u>ть (-капливать, -каплять) to accumulate, gather,
                    amass, save up, conceal
                    <br />
                    пр<u>ы</u>гать / пр<u>ы</u>гнуть (-прыгивать) to jump,
                    spring, leap
                    <br />
                    ставить (-ставлять) to put, to place, to set
                    <br />
                    кар<u>а</u>бкаться (-карабкиваться) to clamber, scramble
                    <br />
                    мет<u>а</u>ть / мет<u>нут</u>ь (-мётывать) to throw, to
                    cast, to hurl
                    <br />
                    плес<u>нут</u>ь / плеск<u>а</u>ть (-плёскивать) to splash
                    (e.g. in water), to spill, to flutter (of flags, sails), to
                    flail (arms)
                    <br />
                    бар<u>а</u>хтаться to flounder, roll, wallow
                    <br />
                    корм<u>и</u>ть (-кармливать) to feed, to maintain
                    <br />
                    шат<u>а</u>ть / шат<u>нут</u>ь (-шатывать) to sway, to rock,
                    to stagger
                    <br />
                    колых<u>а</u>ть / колых<u>нут</u>ь (-колыхивать) to sway
                    (rhythmically), to rock gently
                    <br />
                    лов<u>и</u>ть / поймать (-лавливать) to catch, to trap, get
                    hold of ;
                    <br />
                    лежать ; (-лёживать) to lie (in a horizontal position), to
                    be situated
                    <br />
                    (ложиться) / pf. лечь (-легать) to lay, to lie (be situated
                    not standing)
                    <br />
                    сидеть (-сиживать) to sit (intransitive) ; (See садить for
                    transitive)
                    <br />
                    садить, саж<u>а</u>ть (-саживать, -саждать) to sit
                    (someone), to plant (something) (transitive. See сидеть for
                    intransitive.) <br /> These are not a pair, both are
                    potential roots, садить and сажать. <br /> Mostly садить is
                    the main root, сажать is also possible, but because it
                    causes branch-confusion, is less widespread. <br /> e.g.
                    досаж
                    <u>а</u>ть is <i>perfective</i>, even though one might guess
                    otherwise (see New Word Aspect Recognition)
                    <br />в<u>и</u>снуть (-вис<u>а</u>ть) (intransitive) to hang
                    (have a position off an edge) See весить for transitive.
                    <br />
                    знать (-знавать) to know, be familiar with
                    <br />
                    пуг<u>а</u>ть / пугн<u>у</u>ть (-пугивать) to frighten, to
                    scare (someone something)
                    <br />
                    рвать / рва<u>нут</u>ь (-рывать) to tear, to break
                    <br />
                    драть (-дирать) to tear, pull, strip off <br /> придраться \
                    придираться - to undeservedly find fault, to rebuke for
                    small or apparent guilt; к чему, к кому
                    <br />
                    плест<u>и</u> ;(-плетать) to braid, to weave, to lace, to
                    twine
                    <br />
                    бить (-бивать) to beat
                    <br />п<u>а</u>дать / пасть (-пад<u>а</u>ть) to fall (lose
                    height), lots of similar figurative senses
                    <br />
                    ред<u>е</u>ть (-реживать, -режать) to thin, to thin out
                    [редкий]
                    <br />р<u>е</u>зать (-рез<u>а</u>ть, -резывать) to cut,
                    slice, carve <br /> вр<u>е</u>
                    зываться or врез<u>а</u>ться / вр<u>е</u>заться - "to cut
                    oneself into" - also means "to collide with, run into"
                    <br />
                    клон<u>и</u>ть (-клонять) to incline, to bend, to lean
                    "Distantly related to колено - "knee". Some forms refer to
                    kneeling, but the Tree involves mostly "lean" based
                    meanings."
                    <br />
                    менять / -менить (-менять) to change (switch forms, places,
                    states)
                    <br />
                    тесн<u>и</u>ть (-теснять) to squeeze
                    <br />г<u>а</u>снуть (-гас<u>а</u>ть) to go out (of fire,
                    lights), to die away
                    <br />
                    влечь (-влекать) to attract, to draw
                    <br />
                    тес<u>а</u>ть (-тёсывать) to cut by axe, to hew, to shave a
                    layer (with an axe)
                    <br />
                    лиз<u>а</u>ть / лиз<u>нут</u>ь (-лизывать) to lick
                    <br />
                    брать / (взять) (-бирать) to take; (+ся) to take oneself
                    somewhere, to get somewhere
                    <br />
                    рыть (-рыв<u>а</u>ть) to dig, burrow
                    <br />
                    коп<u>а</u>ть / коп<u>нут</u>ь (-капывать) to dig
                    <br />
                    хват<u>и</u>ть / хват<u>а</u>ть (-хватывать) to seize,
                    grasp, snatch; <br /> (impersonal) to suffice, to be enough
                    For second sense: кому, или у кого, хватит чего
                    <br />
                    ткнуть / т<u>ы</u>кать (-тык<u>а</u>ть) to poke, to stick,
                    jab, prod; to hit <br /> спотык<u>а</u>
                    ться / спотк<u>нут</u>ься - to jab oneself along, with
                    something, i.e. to be going along, and smack oneself with
                    something: "to trip" or "stumble"
                    <br />
                    стег<u>а</u>ть (-стёгивать) to whip, to zip (e.g. backpack),
                    buckle (e.g. of a coat), fasten (of buttons), quilt
                    <br />
                    жев<u>а</u>ть (-жёвывать) to chew (grind with teeth) ; жу
                    <u>ю</u>, жу<u>ё</u>шь, жу<u>ю</u>т
                    <br />
                    беречь (-берегать) to guard, to take care of, to keep safe
                    <br />
                    хранить (-хранять) to keep (maintain possession of),
                    preserve, store, guard, save, protect
                    <br />
                    тр<u>о</u>нуть / тр<u>о</u>гать (-трагивать) "to touch
                    (contact, also emotionally, also 'touch off' as in start
                    moving)"
                    <br />
                    др<u>о</u>гнуть / дрож<u>а</u>ть (-драгивать) to shiver,
                    shake, tremble
                    <br />
                    кос<u>и</u>ть (-кашивать) (1) to mow (systematically cut in
                    large amounts)
                    <br />
                    кос<u>и</u>ть (-кашивать) (2) to twist, to slant, to squint
                    <br />
                    кос<u>нут</u>ься / кас<u>а</u>ться (-кас<u>а</u>ться) to
                    touch (make physical contact with), to concern (have
                    relevance to) <br /> соприкоснуться / соприкасаться - to
                    come into contact with, to touch, to be contiguous
                    <br /> касаться чего, касающийся чего-то
                    <br />к<u>а</u>шлять / к<u>а</u>
                    шлянуть ;(-кашливать) to cough
                    <br />
                    кал<u>е</u>чить (-калечивать) to maim, cripple, mutilate;
                    pervert, twist, warp
                    <br />
                    смотреть (-сматривать) to watch, to look at
                    <br />
                    гл<u>а</u>дить (-глаживать) [гладкий] lit. to smooth, to
                    iron (clothes), to pet (animals), to stroke [smooth]
                    <br />
                    печ<u>а</u>тать (-печатывать) to print, to type, to seal
                    (stamp)
                    <br />
                    равн<u>я</u>ть (-равнивать) [равный] to equalize, equate
                    [equal]
                    <br />
                    кипеть (-кипать) to boil, to seethe, to burn
                    <br />п<u>я</u>литься to stare, to gaze
                    <br />п<u>я</u>лить (-пяливать) to stretch, to stretch
                    tight; (idiomatic) пялить глаза - to stare
                    <br />
                    жечь (-жигать) to burn (apply fire)
                    <br />
                    пал<u>и</u>ть (-паливать, or -палять) to singe, destroy with
                    fire, scorch, to fire (discharge a gun)
                    <br />
                    стрел<u>я</u>ть / стрель<u>нут</u>ь (branches: pf. -стрелить
                    / imp. -стреливать) to shoot (to fire a weapon) <br />{" "}
                    пристрелить - to shoot down (i.e. to shoot a plane to the
                    ground)
                    <br />
                    отстрелить - to shoot something off
                    <br />
                    застрелить - to shoot (beyond key reference point, i.e. to
                    kill by shooting)
                    <br />
                    держ<u>а</u>ть (-держивать) to hold, to have in hands, to
                    grasp
                    <br />
                    крепить (-креплять) [крепкий] to fasten, secure, to
                    strengthen [strong, robust]
                    <br />
                    раз<u>и</u>ть (-ражать) to strike, to hit, -flict, -flect
                    возразить / возражать - to strike up, i.e. to object, to
                    protest
                    <br />
                    отразить / отражать - to strike off, i.e. reflect (e.g.
                    mirror), ward off
                    <br />
                    заразить / заражать - to strike into, i.e. to infect (with
                    disease), to contaminate
                    <br /> ;- / подражать - to imitate, to copy, to ape (see
                    *под-)
                    <br />
                    выразить / выражать - to strike out (from within), i.e. to
                    express, to convey
                    <br />
                    поразить / поражать - to strike along, i.e. to amaze, to
                    stagger, to affect
                    <br />
                    сразить / сражать - strike down (defeat)
                    <br />
                    сражение - con-flict, a battle
                    <br />
                    разразить / разражать - to strike out (in many directions),
                    to burst out (of war, into tears, laughter)
                    <br />
                    льстить (-льщ<u>а</u>ть) to flatter (adulate, compliment) ;
                    кому чем
                    <br />
                    ман<u>и</u>ть (-манивать) to beckon, to wave; to attract,
                    lure, entice
                    <br />
                    мах<u>а</u>ть / мах<u>нут</u>ь (-махивать) to wave (e.g.
                    hand, kerchief, flag), to flap, to brandish
                    <br />
                    кол<u>о</u>ть (-калывать) to stab, thrust, prick, cleave кол
                    <u>ю</u>, к<u>о</u>лешь, к<u>о</u>лют
                    <br />
                    раст<u>и</u>ть (-ращивать) to grow (something) "Contrast
                    against "расти". This word is as in "I grow flowers"
                    (transtive)."
                    <br />
                    зреть (-зирать) (most forms archaic) to watch, to look at ;
                    зрю, зришь, зрят
                    <br />
                    зреть (-зревать) ripen, mature
                    <br />м<u>е</u>тить (-мечать) to mark, label "наметить /
                    намечать - "mark up", put on markings/labels"
                    <br />
                    крыть (-крывать) to cover
                    <br />с<u>луш</u>ать (-слушивать) to listen "вслушаться /
                    вслушиваться - to listen in, listen attentively
                    <br />
                    заслушаться / заслушиваться - to be engrossed listening, to
                    be sucked in listening
                    <br />
                    прислушаться / прислушиваться - to listen in (e.g. ear 'up
                    to' a door)
                    <br />
                    наслушаться / наслушиваться - to hear one's fill, to hear
                    plenty"
                    <br />
                    пнуть / пинать (-пинать) to kick (hit with foot) запнуться /
                    запинаться - lit. to kick oneself over, i.e. to trip over
                    something, to stumble (о что, на чём)
                    <br />т<u>и</u>скать / т<u>и</u>снуть (-тискивать) to
                    squeeze, snuggle, print "протискиваться - to squeeze/elbow
                    one's way through (e.g. a crowd)"
                    <br />
                    мотать (-матывать) to wind, to reel; to wave or shake
                    <br />
                    чин<u>и</u>ть (-чинивать, -чинять) (1) to repair, to fix; to
                    sharpen
                    <br />
                    чин<u>и</u>ть (-чинять) (2) to administer, to give place
                    <br />
                    гореть (-горать) to burn (instr.), to be alight, on fire, to
                    gleam
                    <br />
                    сосать (-сасывать) to suck
                    <br />
                    гнуть (-гибать) to bend
                    <br />
                    дав<u>и</u>ть (-давливать; potentially -давлять) to weigh,
                    press, apply pressure, to crush
                    <br />
                    imp. гнать and ; imp. гонять Motion verb imperfective
                    doublet, forms the tree:
                    <br /> гнать (-гонять)
                    <br /> to chase, drive
                    <br />
                    мять (-минать) to rumple, crumple, wrinkle, knead ; Contrast
                    meaning against жать (press). Мять &gt; я мну, ты мнёшь, они
                    мнут.
                    <br />
                    грести (-гребать) to rake, row, scrape, scull, shovel
                    <br />
                    деть / девать (-девать) to put, to place, to do with, mislay
                    <br />
                    любить (-люблять) to love
                    <br />
                    кач<u>а</u>ть / кач<u>нут</u>ь (-качивать) to rock, shake,
                    toss; to pump (move through pipes)
                    <br />
                    красть (-крадывать) to steal ; -а
                    <u>
                        д<i>у</i>,
                    </u>{" "}
                    ;-адёшь, -а<u>дут</u>
                    <br />в<u>е</u>ять (-веивать, -вевать) to blow gently,
                    drift, wave or flutter
                    <br />
                    pf. купить (-купать) to buy <br /> Infrequent case of a lone
                    -ить Root Verb being perfective. Rest of tree looks as
                    expected.
                    <br />
                    варить (-варивать) to cook, to boil, to brew
                    <br />
                    мерить (-мерять, -меривать) to find size of something (e.g.
                    use a ruler, try on clothes), to measure
                    <br />
                    мор<u>и</u>ть (-маривать) to kill, exterminate, exhaust
                    <br />
                    мар<u>а</u>ть (-марывать) to soil, stain, dirty, sully,
                    tarnish
                    <br />
                    руб<u>и</u>ть (-руб<u>а</u>ть) to axe, to chop, to hack
                    <br />
                    сп<u>о</u>рить (-спаривать) to argue, to dispute, discuss,
                    fight
                    <br />
                    сл<u>е</u>довать (-сл<u>е</u>довать) to follow, to go after
                    (perfective/imperfective identical)
                    <br />
                    след<u>и</u>ть (-слеживать) to watch, follow, spy; to leave
                    footprints
                    <br />
                    вязать (-вязывать) to tie, to bind
                    <br />
                    цар<u>а</u>пать / цар<u>а</u>пнуть (-царапывать) to scratch,
                    to scrape, to scrawl, to scribble
                    <br />
                    сечь (-секать) to cut, to chop, to slash, to cleave; to
                    catch on, to get (understand)
                    <br />
                    пр<u>я</u>тать (-прятывать) to conceal, to hide (transitive)
                    <br />д<u>о</u>хнуть / д<u>ы</u>хать (-дых<u>а</u>ть) to
                    breathe
                    <br />
                    хвал<u>и</u>ть (-хваливать, -хвалять) to compliment, to
                    praise
                    <br />
                    стать / становаиться (-ставать) to become, to stand, to
                    start остаться / оставаться - to remain, to be left
                    <br /> достать / доставать - to get, to take out, retrieve,
                    to attain, obtain
                    <br /> встать / вставать - to arise, to stand up (of people)
                    <br /> восстать / восставать - to arise, rebel, revolt
                    <br />н<u>и</u>кнуть (-ник<u>а</u>ть) to hang down, wither,
                    droop* "*Very odd word to try to define,
                    <br /> Few main uses are:
                    <br /> проникнуть / проникать - to penetrate, perforate,
                    permeate
                    <br /> возникнуть / возникать - to arise, appear, emerge, to
                    spring up "Возник вопрос... Кто я такой?"
                    <br /> вникнуть / вникать - to penetrate, to delve into, to
                    consider carefully"
                    <br />
                    вонять (-ванивать) to stink, to reek
                    <br />
                    цвести (-цветать) to bloom, blossom, flower
                    <br />
                    вол<u>о</u>чь (-волакивать) (coll.) to drag, to haul
                    <br />
                    решить / реш<u>а</u>ть (-реш<u>а</u>ть) to solve, to settle,
                    to decide, resolve
                    <br />
                    искать (-искивать) to look for, to search ;искать чего, что
                    [ищу, ищешь, ищут]. Spelled with -ы- after prefixes ending
                    in hard consonants.
                    <br />
                    мешать (-мешивать) to stir, mix, blend; hinder, interfere
                    <br />
                    платить (-плачивать) to pay (give money)
                    <br />
                    груз<u>и</u>ть (-гружать) to load (a file on a computer, a
                    truck with cargo, a thing with things etc.)
                    <br />
                    леч<u>и</u>ть (-лечивать) to heal
                    <br />
                    винт<u>и</u>ть ; (-винчивать) to screw (a screw, a
                    bottlecap, lid) отвинтить
                    <br />
                    брест<u>и</u> (-бред<u>а</u>ть) to stroll, plod, walk
                    (slowly, casually, or aimlessly) Technically a
                    unidirectional motion verb; compare multidirectional
                    бродить.
                    <br />
                    <u>щуп</u>ать (-щупывать) to feel, probe, grope (to use
                    hands in order to feel)
                    <br />
                    вить (-вивать) to create (something) by twisting or weaving
                    привить / прививать - vaccinate, innoculate
                    <br /> развить / развивать - to develop (grow and evolve)
                    <br />
                    пих<u>а</u>ть / пих<u>нут</u>ь (-пихивать) (coll.) to shove,
                    push, elbow
                    <br />
                    расти (-растать) to grow (e.g. of plants or people), to
                    increase (e.g. numbers) Past tenses: рос, росл<u>о</u>, росл
                    <u>а</u>, росл<u>и</u>
                    <br />
                    топ<u>и</u>ть (-тапливать) to heat, to stoke (an oven); to
                    melt (fat)
                    <br />
                    топ<u>и</u>ть (-топлять) to sink, to drown (something)
                    <br />
                    то<u>нут</u>ь (-топать) to drown (in), to wallow
                    <br />т<u>о</u>пать / т<u>о</u>пнуть (-топывать) "to stomp,
                    to stamp one's foot"
                    <br />
                    тер<u>я</u>ть (-теривать) to lose (no longer have)
                    <br />
                    <u>пут</u>ать (-путывать) to tangle, mix up, confuse
                    <br />
                    кал<u>и</u>ть (-каливать) to incandesce, to heat, to roast
                    <br />
                    дёргать / дёрнуть (-дёргивать) to pull, tug, twitch, jerk
                    <br />м<u>а</u>зать (-мазывать) Actions to do with a viscous
                    liquid being moved, applied, etc. Better than a definition,
                    see some of the more specified prefixed meanings:
                    <br /> см<u>а</u>зать / смазывать - apply grease; wipe off;
                    to blur a photo; to diminish clarity
                    <br /> замазать
                    <br />
                    печь (-пекать) to bake пе<u>ку</u>, печёшь, пе<u>кут</u>
                    <br />
                    пляс<u>а</u>ть (-плясывать) to dance (esp. folk styles, hop,
                    jig) ; пля<u>шу</u>, пл<u>я</u>шешь, пл<u>я</u>
                    шут
                    <br />
                    врать (-вирать) to lie, to be inaccurate, tell tales [вру,
                    врёшь, врут]
                    <br />
                    лгать (-лыгать) to lie, to tell lies [лгу, лжёшь, лгут]
                    <br />
                    туш<u>и</u>ть (-тушать) to extinguish, put out, turn off,
                    quench, suppress
                    <br />
                    сто<u>я</u>ть (-ст<u>а</u>ивать) to stand, be situated; to
                    stop (i.e. stand not walk)
                    <br />
                    клев<u>а</u>ть / кл<u>ю</u>нуть (-клёвывать) to peck, to
                    pick (of birds), to bite (a lure or bait)
                    <br />
                    долб<u>и</u>ть (-далбливать) to peck, gouge, to repeatedly
                    hit, etc.
                    <br />
                    шарить (-шаривать) to fumble, to rummage; (coll.) to
                    understand, to have knowledge of
                    <br />
                    грызть (-грызать) to gnaw, to nibble, to crack (nuts)
                    <br />
                    сесть (-седать, -саживать) to sit down (intr.) Compare
                    сидеть. See садить for transitive.
                    <br />в<u>е</u>дать (-ведывать, -в<u>е</u>довать) [archaic
                    root] to know; to govern, manage control Root itself is
                    archaic/poetic, but branch forms are seen.
                    <br />
                    зн<u>а</u>чить (-знач<u>а</u>ть) to mean, to signify, matter
                    <br />
                    переть (-пирать) <br /> intransitive: to go (ignoring
                    obstacles or prohibitions, often long journey)
                    <br /> transitive: carry or trudge, snag (steal) <br /> Very
                    hard to translate simply. Useful forms:
                    <br />
                    опираться / опереться - to lean against, to rest on, to rely
                    on
                    <br />
                    упереть / упирать - to rest against, to set (something)
                    against
                    <br />
                    Some forms focus on "locks":
                    <br />
                    отпереть / отпирать - to unlock (e.g. door with key)
                    <br />
                    запереть / запирать - to lock, to block up, blockade
                    <br />
                    лохм<u>а</u>тить (-лохмачивать) to dishevel, to tousle,
                    ruffle
                    <br />
                    греть (-гревать) to warm, to heat (something) разогреть(ся)
                    / разогревать(ся) - to warm up (e.g. sports)
                    <br />
                    молоть (-малывать) to grind (make smaller by crushing)
                    кофемолка
                    <br />
                    дуть (-дувать) to blow Дуть на кружку чая
                    <br />м<u>а</u>ять (-маивать) to exhaust (tire out)
                    <br />
                    колотить (-колачивать) pound, bash, hammer (action of
                    installing nails) коло<u>чу</u>, кол<u>о</u>тишь, кол
                    <u>о</u>тят
                    <br />
                    мигать / мигнуть (-мигивать) "to blink (one's eye), to wink
                    (sending a message), to blink (of lights, candles,
                    stoplights etc.)" "Branch imperfectives are all with
                    -мигивать, and there is a doubled perfective branch (like
                    you can assume with most -ать / -нуть root pairs). замигать
                    exists, but замигнуть not so much. подмигнуть exists, but
                    подмигать not so much. This makes sense, given the
                    explanation at the bottom of the Trees section"
                    <br />
                    глот<u>а</u>ть / глот<u>нут</u>ь (-глатывать, -глощать /
                    -глотить) to swallow "глот<u>о</u>к - a gulp, a swallow
                    <br /> гл<u>о</u>тка - throat, gullet, pharynx
                    <br /> While "глотить" on its own is not seen,
                    understandably the tree takes the form:
                    <br /> <i>Root Verbs</i>: глотать / глотнуть
                    <br /> <i>Branch Verbs</i>: заглотать / заглатывать and
                    sometimes the pattern поглотить / поглащать
                    <br /> The most common perfective, for simple reasons, is
                    проглотить ("swallow through")."
                    <br />
                    чеканить (-чеканивать) to perform repetitive actions
                    forcefully and with separation to mint, to coin, to stamp
                    (an image on metal)
                    <br />
                    черкать / черкнуть (-чёркивать) to write, scribble The
                    stress can also be such that it is чёркать.
                    <br />т<u>а</u>ять (-таивать) to melt, thaw, melt away See
                    таить
                    <br />
                    та<u>и</u>ть (-таивать) to hide, conceal, harbour, keep
                    secret Imperfective branch forms collide with those of
                    таять.
                    <br />
                    прос<u>и</u>ть (-прашивать) to ask, to request "Most forms
                    can "request кого" or "request у кого делать"
                    <br /> попросить / попрашивать - to request someone to do
                    something
                    <br /> расспросить / расспрашивать - ask apart, delive
                    rmultiple questions with an aim to find something out
                    <br /> спросить / спрашивать - to ask a question (request
                    down from someone's mind)
                    <br /> в<u>ы</u>просить / выпрашивать - receive or achieve
                    by intensive requesting
                    <br /> запросить / запрашивать - to overask (to sell for an
                    unreasonable high price) etc.
                    <br /> порасспросить / порасспрашивать - to spend some time
                    asking apart by question
                    <br /> по-рас-с-просить"
                    <br />
                    стер<u>е</u>чь (-стерегать) to guard, to watch (stay at to
                    protect)
                    <br />
                    править (-правлять) to direct, rule
                    <br />
                    ясн<u>и</u>ть (-яснять) to clarify "ясный - bright
                    (therefore visible)
                    <br /> 'яснить' in and of itself is practically not a real
                    word (ясниться exists)--the point is that a tree exists with
                    many useful words:
                    <br /> пояснить / пояснять - to clarify
                    <br /> выяснить / выяснять - clear up
                    <br /> разъяснить / разъяснять - remove unclarity, make
                    clear (parse)
                    <br /> объяснить / объяснять - to explain
                    <br /> уяснить / уяснять - make clear, understandable, come
                    to understand
                    <br /> The difference between forms is, of course, subtle,
                    ignorable, artful, and described by the prefix section."
                    <br />
                    хлынуть (-хлынивать) gush, flow, pour Used sometimes with
                    emotions, about crowds, or all sorts of figurative uses
                    <br />
                    хлестать / хлестнуть (-хлёстывать) lash, slash, slosh <br />{" "}
                    "to hit with something non-solid" (whether that be something
                    pliable and bendy, like a whip, or a stream of water) ;"
                    <br />
                    плавить (-плавять, -плавливать) to melt, fuse, smelt, soften
                    by heating
                    <br />
                    гранить (-гранивать) to facet, to cut, to form a face in
                    some kind of hard material грань - face (of a polyhedron),
                    facet, border, verge
                    <br /> граница - border, edge, boundary
                    <br />
                    сверкать / сверкнуть to sparkle, twinkle, glitter, glare
                    <br />
                    прыскать / прыснуть (-прыскивать) spray, splash (actions
                    related to droplets) "Also used to mean "burst into
                    laughter"
                    <br /> впрыскать / впрыскивать - to inject
                    <br /> (compare "плескать / плеснуть")"
                    <br />
                    шм<u>ы</u>гать / шмыг<u>нут</u>ь (-шмыгивать) (colloquial)
                    to dart, dash, run quickly шм<u>ы</u>гать / шм<u>ы</u>гнуть
                    носом - to sniff loudly
                    <br />
                    <br /> <h4>Sound and Vocalization Verbs</h4>
                    <br />
                    ныть (-нывать) to whimper, to whine, snivel; to ache (of a
                    bodypart) крыть style conjugation
                    <br />
                    выть (-вывать) to howl, to wail
                    <br />
                    стонать ; (-станывать) to moan, to groan ; -<u>ну</u>, -
                    <u>о</u>нешь, -<u>о</u>нут
                    <br />
                    шип<u>е</u>ть (-шипывать) to hiss (steady crackling sound)
                    <br />
                    орать to yell, bawl, (coll.) to laugh
                    <br />
                    крич<u>а</u>ть / кр<u>и</u>кнуть (-крикивать) to yell, shout
                    <br />
                    звенеть (-звенивать) to ring, to jingle, to clink [compare:
                    звонить (-званивать)]
                    <br />
                    сопеть (-сапывать) to wheeze (make loud difficult breaths
                    through nose), sniffle сопл<u>ю</u>, соп<u>и</u>
                    шь, соп<u>я</u>т
                    <br />
                    хрип<u>е</u>ть (-хрипывать) to wheeze, to speak hoarsely, to
                    crackle ; хрипл<u>ю</u>, хрип<u>и</u>
                    шь, хрип<u>я</u>т
                    <br />
                    ворчать mutter, grumble
                    <br />п<u>и</u>скнуть / пищ<u>а</u>ть (-пискивать) to
                    squeak, to peep
                    <br />
                    <br /> <h4>Trees without Rootspaces</h4>
                    <br />
                    -становить / -станавливать or -становлять to stand, to
                    place, set up
                    <br />
                    -вратить / -вращать to turn (multiple senses) возвратить /
                    возвращать - to return, give back
                    <br /> обратить / обращать (внимание) - to turn (attention)
                    <br /> превратить(ся) / превращать(ся) - to turn (into
                    something - во что)
                    <br /> отвратить / отвращать - to turn offward, ward off,
                    avert
                    <br /> отвратительный - disgusting
                    <br />
                    -личить / -личать <br /> from лицо - to give a face, "to
                    distinguish" обличить / обличать - to reveal the face, to
                    umask, to condemn
                    <br /> различить(ся) / различать(ся) - to distinguish, tell
                    apart, discriminate
                    <br /> отличить(ся) / отличать(ся) - to differ, tell from
                    <br />
                    -прячь / -прягать to stretch; to harness [compare imperative
                    of прятать]
                    <br />
                    -мкнуть / -мыкать to close, to lock, to join (of a formation
                    to lose a gap or opening, e.g. a circle, a military unit)
                    <br />
                    -слон<u>и</u>ть / -слон<u>я</u>ть to lean (set at an angle)
                    <br />
                    -ст<u>и</u>гнуть or -стичь / -стиг<u>а</u>ть to catch,
                    reach, get up to
                    <br />
                    -ветвить / -ветвлять to branch (e.g. of tunnels, structures)
                    ветвь, ветка - branch
                    <br />
                    -скоч<u>и</u>ть / -ск<u>а</u>кивать to jump (hop, leap)
                    <br />
                    -местить / -мещать [место] to place, to put, to move
                    <br />
                    -шиб<u>и</u>ть / -шиб<u>а</u>ть to hit, hurt, smack
                    <br />
                    -речь / -рекать to say, to speak (in high register contexts)
                    [речь - speech]
                    <br />
                    <h1>Trees</h1>
                    Trees are tokenized as: imperfective root / root
                    (imperfective branch -ывать/-ивать, or -ать/-ять) <br />
                    Cards are designed to give you the information to form the{" "}
                    <i>entire tree </i>(see говорить card's image), just from
                    information in the card.
                    <br />
                    The most common card (verb tree) is laid out like so:
                    <br /> 1. Imperfective root verb (branch imperfective form)
                    <br /> 2. English translation
                    <br /> 3. Additional things of note, especially hard
                    conjugations etc.
                    <br />
                    <br />
                    Otherwise, there is a pair:
                    <br />
                    imperfective / perfective (imperfective branch form)
                    <br />
                    <br />
                    Since Roots can reliably be distinguished for which aspect
                    they are (according to the rules below and in "New Word
                    Aspect Recognition &amp; Pair Derivation"), they are listed
                    in <i>either aspect first, randomly</i>.
                    <br />
                    <br />
                    -ить (-ивать)
                    <br />
                    <br />
                    <u>Roots:</u>
                    <br />
                    Where a '-нуть' root is alone, it may be imperfective.
                    <br />
                    Where "-нуть / -ать or -ять" occurs, -нуть always the
                    perfective, e.g. perfective дрогнуть, imperfective дрожать.
                    <br />
                    Where "-ать / -ить" occurs, -ить is the perfective, e.g.
                    perfective пустить, imperfective пускать
                    <br />
                    This is often because "-ать" is an added, imperfectivizing
                    suffix.
                    <br />
                    <br />
                    Look out for 'surrogate perfectives.' This is when an
                    imperfective root is said to be paired with a very different
                    looking perfective root: what has actually occured is that a
                    prefixed root (therefore perfective) from a different tree
                    has become a stand-in perfective. Note that the tree for
                    such an odd pair is reliably formable from the imperfective
                    root. For example,
                    <br />
                    говорить / сказать (imp. казать out of style)
                    <br />
                    ловить / поймать (по- plus a root related to the -имать /
                    -ять in взять / взимать)
                    <br />
                    брать / взять (вз- + ять, now an obsolete word meaning take,
                    related to имать, -нимать)
                    <br />
                    класть / положить (imp. ложить out of style)
                    <br />
                    <br />I have put one of the verbs in a pair in parentheses
                    at times, to show that the parenthetical form is a kind of
                    surrogate, so that you know that the tree in question is
                    formed off of the other, e.g. (ложиться) / лечь (-легать),
                    where ложиться is coming in from a different tree to fill
                    that role, and for this tree, everything is based on -лечь /
                    -легать, e.g. облечь / облегать, to cover (literally: to lay
                    something 'about' something)
                    <br />
                    <br />
                    <b>
                        <u>Lone</u> -ить
                    </b>
                    , -еть, -ать{" "}
                    <b>roots should be assumed imperfective (the default).</b>
                    <br />
                    <br />
                    Some roots have underlying consonants (hidden by -сти or
                    -нуть) which reemerge whenever these are removed, i.e.
                    imperfective branches (having gained -ывать/-ивать, or
                    -ать/-ять).
                    <br />
                    <br />
                    The bulk of cards show:
                    <br />
                    imperfective -ить Root Verb (-ивать form which makes its
                    imperfective branch)
                    <br />
                    The perfective branch is then formed with any old prefix put
                    onto the Root Verb, where the prefix defines a 'criterion of
                    completion state' necessary for perfectiveness (see Example
                    Verb cards)
                    <br /> ;
                    <br />
                    <u>
                        Branches:
                        <br />
                    </u>
                    Additional notes on each card list conjugations, useful,
                    interesting, or strange Branch verbs and their meanings, or
                    for some verbs, lists the few forms that can actually be
                    made from the root (e.g. many verbs never officially reach
                    imperfective branches, being prefixed by only two or three
                    prefixes).
                    <br />
                    <br />
                    Prefixes can vary in spelling due to voicing and consonant
                    clusters: раз-, раc-, разо-; в-, во-; о-, об-, обо-; от-,
                    ото-, etc. Keep in mind that the prefix will weave in and
                    out of spellings as forms change, too: размять &gt; я раз
                    <b>о</b>м<u>ну</u>
                    <br />
                    <br />
                    вы- is a prefix which always claims stressed-syllable status{" "}
                    <i>in the perfective</i>. This distinguishes the Root Verb
                    вы-conjugation from the Prefixed Forms вы-conjugation:
                    <br />в<u>ы</u> ;говор<u>и</u>те (you all speak)
                    <br />
                    vs
                    <br />в<u>ы</u>говорите (you all will express)
                    <br />
                    but since -ивать removes this necessity:
                    <br />
                    выгов<u>а</u>риваете (you all are expressing)
                    <br />
                    Otherwise, they would be confused in speech.
                    <br />
                    <br />A root verb with a prefix added becomes perfective.
                    With roots verbs that come in an aspectual pair, sometimes
                    either root can be used for the branch perfectives, creating
                    a doubled perfective branch (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D1%81%D0%B2%D0%B8%D1%81%D1%82%D0%B0%D1%82%D1%8C#Russian"
                    >
                        https://en.wiktionary.org/wiki/свистать#Russian
                    </a>
                    ). This is mostly something not to worry about, although the
                    details are explained further below.
                    <br />
                    <br />
                    Some very short words (петь, деть, пить, лить, стать) are
                    governed using -вать to make imperfectives.
                    <br />
                    <br />
                    <u>
                        Almost all verbs use -ывать/-ивать to form branch
                        imperfectives
                    </u>{" "}
                    (-иваю, -иваешь, -ивают), which always brings stress change
                    to the syllable immediately preceding the -ивать, e.g.
                    говор-<u>и</u>ть &gt; выгов<u>а</u>р-ивать (often words
                    mutate during this, changing unstressed 'о' to stressed 'а',
                    or revealing an underlying 'ё' when a previously unstressed
                    'е' gains stress). (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D0%B6%D0%B5%D0%B2%D0%B0%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/жевать
                    </a>
                    )<br />
                    <br />
                    While every verb's -ывать/-ивать branch imperfective form is
                    listed, the point is mainly that the verb gets <i>
                        that
                    </i>{" "}
                    ending, rather than -ать/-ять (the part to learn with a new
                    verb: -ывать or -ать?), because, apart from the odd
                    mutation, the addition of -ывать/-ивать and the resulting
                    form is wildly predictable, as you'll see. Technically, even
                    the mutations can be intuited in many cases, with
                    experience.
                    <br />
                    <br />
                    If a word is listed with no parenthetical, there appears to
                    exist no imperfective branch for it. So, there is the root,
                    and whatever perfectives can be made with prefixes, but no
                    need generally to have gone any further and made a branch
                    imperfective. Do not be surprised however if a writer forces
                    any old word to gain по- + -ывать.
                    <br />
                    <br />
                    The suffix -<u>а</u>ть is intrinsically stressed. In roots,
                    where it is sometimes implicitly used, this is mostly
                    reliable. In branch perfectives, this is totally reliable.
                    No matter what, words that have indeed been suffixed with -
                    <u>а</u>ть are "-<u>а</u>ю, -<u>а</u>ешь, -<u>а</u>ют" etc.
                    (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D0%B2%D1%8B%D1%81%D1%8B%D0%BF%D0%B0%D1%82%D1%8C#Russian"
                    >
                        https://en.wiktionary.org/wiki/высыпать#Russian
                    </a>
                    )<br />
                    <br />
                    Because of this and the way -ывать/-ивать works, the
                    stressed syllable of imperfective branch verbs (which
                    near-misses making up about half of the verbs you'll
                    encounter!) is always predictable! Ура!
                    <br />
                    <br />A few root verbs ending in "ать" are not actually
                    stressed on this syllable (hypothetically because it's not{" "}
                    <i>the</i> ;suffix "-<u>а</u>ть"), but their branch forms
                    are, indicating that -<u>а</u>ть has been added overtop. For
                    example, "sprinkle along," i.e. "to strew"
                    <br />
                    <i>imperfective</i> с<u>ы</u>пать (я с<u>ы</u>плю) &gt;{" "}
                    <i>perfective</i> пос<u>ы</u>пать (я пос<u>ы</u>плю)&gt;{" "}
                    <i>imperfective</i> посып<u>а</u>ть (я посып<u>а</u>ю)
                    <br />
                    <br />
                    The adding of suffixes often induces mutation letters such
                    as судить &gt; -суживать, or цепить &gt; -цеплять. (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D0%BB%D1%8E%D0%B1%D0%B8%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/любить
                    </a>
                    )<br />
                    <br />
                    Branch imperfectives are listed with a hiphen to denote that
                    the form does not consitute a word on its own, but rather
                    occurs with a prefix, e.g. -суживать &gt; отсуживать,
                    подсуживать, ссуживать. Sometimes, a historic root has lost
                    function, and there remains only a pair of prefixable forms,
                    perfective and imperfective, only seen with prefixes. (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/-%D1%81%D0%BA%D0%BE%D1%87%D0%B8%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/-скочить
                    </a>
                    )<br />
                    <br />
                    There are also instances where the root has essentially gone
                    out of usage, but the many prefixed forms are frequent, e.g.
                    казать (now an archaic word) gives us сказать, показать,
                    заказать, оказаться, as well as сказывать (poetic),
                    показывать, заказывать, оказываться.
                    <br />
                    <br />
                    Occasionally, the branch imperfectives can be made using
                    different options, making a doubled imperfective branch
                    (-суждать, -суживать). (
                    <a
                        target="_blank"
                        className="link"
                        href="https://en.wiktionary.org/wiki/%D1%81%D1%83%D1%88%D0%B8%D1%82%D1%8C"
                    >
                        https://en.wiktionary.org/wiki/сушить
                    </a>
                    )<br />
                    <br />
                    It is not inherently clear whether -ать was added before or
                    after the prefix of a word (which would make it perfective
                    or imperfective, respectively). This accounts for the
                    prevelance of -ывать, -ивать, which does not have this
                    problem. To avoid this pitfall, <u>when in doubt</u>, add
                    your prefixes to the -ить or -нуть root, whenever roots
                    occur in an -ать/-нуть or -ать/-ить pair.
                    <br />
                    <br />
                    Some special, common words (Basal Pairs or Quirky Pairs,
                    whatever you want to call them, they deserve a specific
                    name, and special attention to learn their list) have a
                    special branch imperfective form, generally using an infixed
                    -и-, and ending in the usual -ать. A few common ones, to see
                    the pattern, are: <br />
                    жать &gt; -жимать, <br />
                    мять &gt; -минать
                    <br />
                    тереть &gt; -тирать, <br />
                    гнуть &gt; -гибать, <br />
                    мереть &gt; -мирать,
                    <br />
                    слать &gt; -сылать (я шлю, ты шлёшь and я посылаю, ты
                    посылаешь)
                    <br />
                    брать &gt; -бирать
                    <br />
                    спать &gt; -сыпать (e.g. просыпаться - literally: to sleep
                    oneself through, i.e. "wake up")
                    <br />
                    <br />
                    While the left-hand form has a wacky conjugation, the right
                    hand ones will all have standard -ать ones.
                    <br />
                    <br />
                    Similarly, -чь words tend to reveal underlying constants in
                    their conjugations, which are seen in their paired -ать
                    forms. ;
                    <br />
                    <br />
                    мочь - помочь - помогать
                    <br />я мо<u>гу</u>, помогу, помогаю
                    <br />
                    ты можешь
                    <br />
                    <br />
                    влечь - привлечь - привлекать
                    <br />Я вле<u>ку</u>, привлеку, привлекаю
                    <br />
                    ты влечёшь
                    <br />
                    <br />
                    сечь - отсечь - отсекать
                    <br />Я се<u>ку</u>, ; отсеку, отсекаю
                    <br />
                    Ты сечёшь
                    <br />
                    <br />
                    <br />
                    <u>In verbs with doubled perfective branches</u>, the
                    difference between the two perfectives is often that the
                    -нуть/-ить/-еть one denotes singular instance (something
                    -нуть is especially known for), while the -ать does not,
                    perhaps emphasizing the prefix completion-state over
                    'one-timeness.' So, подсвистнул might mean a{" "}
                    <i>single whistle up</i> at something, while подсвистел
                    would simply emphasize that the whistling occured from
                    below, and perhaps that it had gotten their attention
                    (succeeded). Another example might be скинуть, to do a
                    single <i>throwing together</i> action (one throw), versus
                    скидать, to throw together (emphasizing that the "together"
                    happened and is finished, although probably in many
                    individual 'throws').
                    <br />
                    <br />Я отбросил одежды на кровать, и потом... (It got
                    thrown on the bed in one chuck.)
                    <br />
                    Я отбросал одежды на кровать, и потом... (It took multiple
                    throws, but it got done.)
                    <br />
                    Я отбрасывал одежду на кровать, когда я заметил... (The
                    action of throwing clothes to the side was occuring,
                    when...)
                    <br />
                    <br />
                    If we're being completely accurate, -ывать -ивать can be
                    added even to roots alone (rarely, with certain words). Its
                    function is along the lines of "iterativity", multiple
                    timed-ness (многократное действие). This is most relevant
                    for motion verbs which tend to develop pretty complex trees.
                    To illustrate, see the following words:
                    <br />
                    говаривать - многократное к "говорить" - to say multiple
                    times. In past tense ~ "used to say"
                    <br />
                    певать - многократное к глаголу "петь"
                    <br />
                    бивать - многократное к "бить"
                    <br />
                    лёживать - многократное к "лежать"
                    <br />
                    слеживать - for следить
                    <br />
                    ганивать - гнать-гонять (whose tree doesn't even have
                    -ивать)
                    <br />
                    <br />
                    You can use these forms when emphasizing the habituality or
                    repeated quality of an action, rather than the <i>
                        doing
                    </i>{" "}
                    ;of the action (as opposed to <i>not doing</i> ;of an act),
                    and when also not interested in specifying any sort of
                    completion criterion or specificity in the type of act (that
                    is to say, сговорить is like a specific type of говорить).
                    If you say "Don't care, just want the verbs raw action, but
                    iterative.", use these, or just say много раз or something
                    like that.
                    <br />
                    For obvious reasons, such forms are exceedingly rare in the
                    present tense, often relegated to past tense."
                    <br />
                    ять, -нять / имать ; (-ымать, -имать, -нимать) to take, grab
                    "These are all no longer root words, but we retain many of
                    their branch forms. So ять / имать is obsolete, but you'll
                    see:
                    <br /> поднять / поднимать - to take up, i.e. "to raise"
                    (archaic, poetic: подъять / подымать)
                    <br /> снять / снимать - take off (e.g. a hat)
                    <br /> объять / обымать, обнимать - take about, envelop;
                    comprehend
                    <br /> внять / внимать - (stilted, poetic, literary) to
                    hark, listen, heed ("take in"); from whence we get the
                    frequently seen "внимательный" (attentive, focused in,
                    mindful)
                    <br /> взять / взимать or взымать (or just брать) -
                    literally "take up", grab, acquire (as opposed to "take
                    away" or "take off")
                    <br /> изъять / изымать - to remove, to withdraw ("take
                    out")
                    <br /> понять / понимать - take along, "to understand"
                    [proposing that you take information on your journey :) ]
                    <br /> The associated noun for this tree is ём. (Compare
                    related иметь)"
                    <br />
                    <h1>Concept of Perfectivity</h1> Unprefixed root verbs can
                    be considered "Acts" (Imperfective). They refer to the
                    action of the words meaning.
                    <br />
                    From there, by adding a prefix we{" "}
                    <u>specify a criterion for completion-state</u> ;(apartness,
                    throughness, downness, togetherness), by virtue of the
                    meaning of the prefix. Prefixes add a direction-destination,
                    whether abstract or physical, by which it is not only
                    possible but<u> logical </u>that the verb become
                    "perfective" - a prefix defines a criterion for a form of
                    completedness. Then, instead of acts, we refer to "goals"
                    (some of which are literal "completion," but the prefix
                    applied can mean a variety of things other than). ;
                    <br />
                    <br />
                    Perfectivity is not completion, precisely—it's goal-emphasis
                    rather than act-emphasis
                    <br />
                    писать - writing as an act in and of itself
                    <br />
                    пописать - passing some amount of time (по-), writing
                    (писать)
                    <br />
                    пописал - spent some time writing
                    <br />
                    пописывать - the act of writing (in the context of spending
                    some time doing it)
                    <br />
                    пописывал - engaged in the act of spending some time writing
                    <br />
                    <br />
                    This explains how perfectivity-imperfectivity is{" "}
                    <i>more interchangeable than you think</i>, and that the
                    usual rules do not encompass the variety of usages you can
                    encounter.
                    <br />
                    <br />
                    -нуть perfectives can be perfective without a prefix
                    generally because they refer to singular actions, especially
                    singular instantaneous actions (actions with no duration).
                    <br />
                    <h1>
                        Prefix Usage Guide - Philosophy of Language Learning
                    </h1>{" "}
                    Recognition is easiest - noticing that a verb is prefixed.
                    This leads to exposure to examples, which leads to having
                    understood examples, which leads to unconscious
                    generalization: an intuition for meanings, both in
                    production and in comprehension, that is, the ability to get
                    a sense for the prefixes in new words without a dictionary,
                    thus unlocking over half of the verbs on a page. Production,
                    of course, will always be harder, and involve awkward
                    mistakes.
                    <br />
                    <br />
                    What is "the perfective" of a verb? As you can see in the
                    Example Verb sections, the whole idea is somewhat
                    questionable. There is, in some sense, no such thing. There
                    are many perfectives made from their own prefixes, and
                    sometimes, especially the more advanced and abstract the
                    word, there is a default or most common prefix, but in
                    reality this is nothing terribly official. This means that
                    exposure to lots of input is necessary to get a sense for
                    what the best perfective would be. Instead of rote
                    memorization of a pair, this means coming to really
                    understand what's being done when there is a particular
                    perfective to use, over others.
                    <br />
                    "Completion" or "single-instance" are perfective qualities,
                    yes, but for most verbs out there, such states aren't
                    inherently conceivable. Instead, they get perfectivity from
                    the frame added by a prefix.
                    <br />
                    <br />
                    Lots of the words in this list are not ones you would want
                    to try to add prefixes to yourself, but it is a central task
                    in reading Russian text, which hasn't been pre-prepared for
                    you, to be able to recognize, parse, and surmise the meaning
                    of novel words based on their parts. Once you can do this,
                    you can read fluidly, even after only learning a couple
                    hundred roots (a far cry from the <u>
                        tens of thousands
                    </u>{" "}
                    of vocab words that the standard model suggest you need);
                    once you can read fluidly, you have an infinite amount of
                    mostly comprehensible (and engaging) language input, which
                    you can use to come across all the different forms you might
                    want to use, in context of sentences, and in the context of
                    narratives, all of which helps to specify and maintain
                    memory.
                    <br />
                    <br />
                    Verbs are not only the center of syntax for sentences, but
                    they are probably also the main players in forming
                    "context." They provide the meat of the mental image
                    produced by "understanding." Because of this, a person who
                    has learned many nouns can only guess (and therefore learn
                    without looking up, read without stopping) so many verbs
                    (often you'll have no chance of this at all), but by
                    contrast, a person who has learned many verbs not only has
                    access to the morphological root ("качалка looks like its
                    from качать!"-each meaning has its group of nouns, verbs,
                    adjectives etc made for it, and so the meaning can be
                    accessed through entry by any of the parts of speech;
                    though, perhaps most effectively through the door of
                    "verbs"), they also can manage to create a mental image of
                    an unfolding story, which gives much stronger clues for the
                    nouns in the sentence! Compare:
                    <br />
                    <br />
                    "He walked over to the ___, moved to the side a ____, and
                    looked closely at the ______, in order to plan his ____."
                    <br />
                    vs
                    <br />
                    "He _____ to the table, ______ a mug, _____ at the map, in
                    order to ____ his journey."
                    <br />
                    Which of these provides a more understandable, engaging
                    mental image? Which makes you feel more confident to move on
                    to the next sentence? Which gives you the best basis for
                    understanding that next sentence? Which tells a story? Which
                    has blanks that are easier to guess?
                    <div>
                        I propose the former. (Our psychology probably defines
                        nouns in the first place by way of action and verb, so
                        there is yet further reason to put in the primary focus
                        VERBS)
                        <br />
                        Combine this with the fact that there are a small number
                        of verbs used in a disproportionate number of sentences{" "}
                        <i>no matter</i> the topic (which cannot be said quite
                        the same about nouns, where topics can really,{" "}
                        <i>really</i> change the set of words: people are always
                        getting on, getting off, saying, noticing, being afraid,
                        picking up and putting down, but just imagine the
                        difference between the vocab involved in a library,
                        versus a warzone, or a hospital!), and the right
                        technique becomes clear: Learn verbs. Then you can parse
                        the key elements of sentences, and the rest (nouns) can
                        be accessed through contextualized experience. If
                        somebody "picks something up to cut"-in a hospital you
                        can guess "scalpel", library guess "scissors", warzone
                        guess "knife."
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        Plus, you can express yourself far more versatilely with
                        a handful of verbs, than with a handful of nouns.
                        <br />
                        Further, on the average page, the vast majority of verbs
                        are, so to speak, native Russian (говорить doesn't look
                        at all like "speak"), whereas its quite a bit more
                        likely that a noun you run across on a given page may be
                        a loan word, resembling something you can guess like
                        "лифт" (a lift, elevator)
                        <br /> ;(As if, people have been doing the same things
                        everywhere and forever, just with different objects.)
                        <br />
                        <br />
                        Now, one could argue the opposite, and say "How many
                        actions do you do with coffee" Pour, sip, drink, heat.
                        Maybe a few others. How many objects might you "hit"?
                        Too many possibilities to list! Thus nouns can, in some
                        instances, be impossible to guess, and verbs actually
                        somewhat easy. While this is true, I still suspect, в
                        конце концов, the preceding argument holds more weight
                        in the process of trying to read on one's own.
                        <br />
                        <br />
                        <br />
                        Once you know 30 verbs with the prefix за-, <i>
                            and
                        </i>{" "}
                        ;the 30 root-verbs that those are made out of, then you
                        can come to get a sense of the meanings of за-, when
                        which meaning applies, and how the word formation
                        process occurs. But this requires learning root verbs,
                        and prefixes,
                        <i> in two separate acts</i>. In the traditional model,
                        you may be given 100 words that are prefixed with за-,
                        but never given the roots <i>in isolation</i>, so it is
                        next to impossible to get a feel for the prefix in
                        isolation (and therefore, to generalize it). One could
                        easily miss that засыпаться is derived from спать.
                        <br />
                        <br />
                        Some prefixes are easier than others. The ones used most
                        easily for <i>ad hoc</i> creation, on-the-fly invention,
                        are probably по- and пере-. You can immediately be
                        confident that you can slap пере- on a verb of your
                        choosing to say "re-do", "re-watch", "re-think," or по-
                        to mean "for a little bit, for some time." But even this
                        varies, and пере- will not always result in the intended
                        sense in the listener. ;
                        <br />
                        <br />
                        On the other end of the spectrum might be "про-" in the
                        meaning of 'mistakenly.' As far as I am aware right now,
                        it is not likely to make sense doing this randomly on
                        one's own. Instead, use this knowledge to help{" "}
                        <i>remember</i> encountered instances of that meaning.
                        <br />
                        <br />
                        Many meanings of prefixes, even when they have multiple,
                        are so stable that you can assume that a verb prefixed
                        with по- could mean "arbitrary time limit" even if
                        dictionaries do not list this as one of the meanings. It
                        is possible, and happens more than you think! Without
                        this system, you might be at a loss - "There's no
                        dictionary entry for it!". With this system, you can
                        confidently keep reading and understanding, having not
                        even checked a dictionary, and seemlessly enjoyed the
                        compact artful conveyence of meaning that is the великий
                        могучий русский язык.
                        <br />
                        <br />
                        Some verb-trees are easier than others. They can equate
                        very closely to phrasal verbs in English: cut off, cut
                        through, cut out, cut in, cut away, cut across. Others,
                        however, are harder to understand the connection between
                        the root and its prefixed forms. Attempts can and should
                        be made to understand these as two meanings, prefix and
                        root, separately added together, even though this is
                        difficult and often seemingly fruitless, because such an
                        act radically increases memorability (by virtue of being
                        a moderately less arbitrary "mind-palace"), and bolsters
                        one's sense of the prefix. ;
                        <br />
                        <br />
                        Although the prefix cards make an effort to point out
                        the supreme similarity, larger than you might suspect,
                        between English phrasal verbs and Russian prefixed
                        verbs, fundamentally at the end of the day it's not
                        precisely so much about translating words and finding
                        equivilants, as it is about seeing the <i>image</i>
                        -embodied experiential-sensory contents:
                        stories-expressed by the word in Russian. A word, which
                        is a tool-package of such contents. Разлить по кружкам -
                        should this be equated to "Pour apart", "pour between"?
                        Perhaps a relevant question. But what is definitely
                        important is that you can acquire from the phrase the
                        intended image: Someone pouring a single container of
                        liquid into multiple, as they would for a set of guests
                        etc.
                    </div>
                    <h1>Prefixes</h1>
                    <br />
                    <br />
                    <h2>*по- "along"</h2>
                    <br />
                    1. Along some kind of length
                    <br />
                    2. For an arbitrary time limit ("for some time")
                    <br />
                    3. An arbitary amount of the course of the action makes it
                    'along' its way (arbitrary directionality)
                    <br />
                    4. Arbitrary amount of action started along its way
                    (beginning of action emphasized, starting)" "Compare the
                    phrases
                    <br />
                    "He whistled along down the street." (1 and 2)
                    <br />
                    "He pulled along a cart behind him." (3)
                    <br />
                    "After that, he went along." (4) Arbitrary directionality
                    naturally starts to include a deemphasis in direction or
                    course, and to take up emphasis on the basic beginning of
                    movement.
                    <br />
                    <br />
                    Sense 3 is one of the best and quickest ways to understand
                    the meaning and usage of пойти--de-emphasis on
                    directionality, emphasis on "along-its-way", whatever that
                    may be."
                    <br />
                    <br />
                    <h2>*c(о)- "together (with) // down (off)"</h2>
                    <br />
                    1a. (from с+gen) off of a surface
                    <br />
                    1b. downward
                    <br />
                    2a. (from c+instr) combining by the action
                    <br />
                    2b. something coming together or forming together by the
                    action (product emphasis)
                    <br />
                    3. (c- + -ся) mutual convergence
                    <br />
                    <br />
                    cкидывать / cкинуть - throw down, throw off; throw together
                    <br />
                    сорвать / срывать - rip off, ; pluck. Он сорвал покрытие
                    подарка.
                    <br />
                    составить / составлять - put with, put together, stack
                    (things together), compose, gather
                    <br />
                    столкнуть / сталкивать - to push off or away, push together.{" "}
                    ;
                    <br />
                    слить / сливать - to pour together; to pour off a surface,
                    pour off the top (to separate). .<br />
                    сговорить / сговаривать - converge by speaking, come to
                    agreement
                    <br />
                    смять / сминать - (from c+inst) squeeze into a lump; (from
                    с+gen) to squeeze down (e.g. driving over grass)
                    <br />
                    сжать / сжимать - press together (e.g. teeth, enemy forces)
                    <br />
                    созывать or сзывать / созвать - call together (e.g. a town)
                    <br />
                    соглас<u>и</u>ться / соглаш<u>а</u>ться [голос - voice] -
                    voice oneself together with, i.e. to agree
                    <br />
                    <br />
                    Обстоятельства столкнули их вместе. Он столкнул вора, и
                    убежал.
                    <br />
                    Дождь слилась с крыш. Давайте сливаем эти бутылки в один
                    большой стакан.
                    <br />
                    "Ад и Земля сольються воед<u>и</u>но." (into one, together)"
                    "What's the deal with multi-meaning prefixes? Most prefixes
                    come with a short list of meanings, which are generally
                    tangled together, and derived in a series, from physical to
                    abstract. с-, however, has two completely different
                    <i> physical </i>meanings in play which can be hard to
                    parse.
                    <br />
                    <br />
                    <h2>*раз- "apart, out (all over), dis-, between"</h2>
                    <br />
                    1. Divergence, or happening in multiple/different
                    <i> destinations</i> or<i> directions </i>(2 is enough)
                    <br />
                    2. Spreading apart
                    <br />
                    3. (of emotional verbs) arising, growing, emerging: "to
                    become" (злить / разозлить; сердить / рассердить)
                    <br />
                    <br />
                    рассмотреть / рассматривать - to look apart, to look in
                    detail, to look in order to discern parts or details
                    <br />
                    разложить / разлагать (or раскладывать) - to lay out, lay
                    apart, spread out, place out; to separate
                    <br />
                    разлить / разливать - to pour apart, separate pouring, to
                    pour so much it spills over edges in all directions
                    <br />
                    разговорить / разговаривать - speaking in both directions,
                    speaking that has a listener, rather than the mere act of
                    speaking говорить ;
                    <br />
                    растерять / растеривать - to lose everything of much of what
                    one had; to lose bit by bit (lose in every which direction)
                    <br /> "По-русски разговариваешь?" isn't merely asking "Can
                    you engage in production (in a void)?" (говорить
                    по-русски)--it's "Do you convese in both directions?"
                    <br />
                    <br />
                    <h2>*у- "away, at, tó (stressed form, see examples)</h2>
                    <br />
                    1. Emphasis on a particular proximity, spot, area, where
                    action occurs (conveying aimedness, or catching)
                    <br />
                    2. Emphasis that action has moved out of particular spot or
                    proximity (disappearence)
                    <br />
                    <br />
                    уйти / уходить - going left this proximity, i.e. to leave
                    <br />
                    урваться / урываться - tear away
                    <br />
                    уставить / уставлять - to place or set a space (уставить что
                    чем, уставить что куда)
                    <br />
                    улить / уливать - excessively pour, pour over completely
                    (i.e. fill up the space)
                    <br />
                    уп<u>а</u>сть / упад<u>а</u>ть - to fall (out of intended
                    area) (this is so often meant by "it fell" that упасть is
                    considered default perfective of п<u>а</u>
                    дать)
                    <br />
                    уложить / улагать (or укладывать) - place within certain
                    limits, a certain way, or covering a certain space (place to
                    bed, fix one's hair)
                    <br />
                    углядеть / углядывать - to spot, "to see at a spot", "to
                    look to upon something."
                    <br />
                    ухватить / ухватывать - to "grasp at," catch
                    <br />
                    унять / унимать - to take to (a baby), calm, quiet soothe
                    <br />
                    <br />
                    <h2>*вы- out (from within)</h2>
                    <br />
                    1. Emergence
                    <br />
                    2. The consequence of emergence, i.e. exhaustion or emptying
                    <br />
                    3. Emergence of a pattern
                    <br />
                    <br />
                    выпить / выпивать - to drink (something empty)
                    <br />
                    <Image
                        className="semantic-map-2"
                        src={вы}
                        alt="diagram"
                        width={imageWidth}
                        height={imageHeight}
                    ></Image>{" "}
                    Nesset, Tore, Anna Baydimirova, and Laura A. Janda. 2009.
                    Poljarnyj Vestnik 12 (January):72-84.
                    https://doi.org/10.7557/6.1294. <br />
                    <br />
                    <br />
                    <br />
                    <h2>*за- "over, beyond, into</h2>
                    <br />
                    <Image
                        className="prefix-image"
                        src="/images/за-image.jpg"
                        alt="diagram"
                        width={imageWidth}
                        height={imageHeight}
                    ></Image>
                    <div className="text-adjacent">
                        1. Beyond a point of reference (behind it); to cover
                        over by action (action back-around) ["paint over"]
                        <br />
                        2. Beyond an entrance point ("in", emphasing "showing
                        up" rather than act of entering) ["come over"]
                        <br />
                        3. Beyond a point of reference (extremeness)
                        [equivilants in English ambiguous with пере-]
                        <br />
                        4. (esp. sound verbs) to start action
                        <br />
                        (You can search the cards for each of these roots to
                        compare)
                        <br />
                        <br />
                        закинуть / закидывать - throw over (cover by throwing
                        something)
                        <br />
                        забить / забивать - to beat in (e.g. a nail); or, to
                        stuff (one's mouth)
                        <br />
                        заколотить / заколачивать - to hammer over (close
                        something off by nailing boards over); to insert by
                        pounding; to begin pounding
                        <br />
                        закрутить / закручивать - start to spin; to spin
                        something into something (e.g. scew)
                        <br />
                        захватить / захватывать - "take over"
                        <br />
                        заглянуть / заглядывать - look into, look deep into the
                        details
                        <br />
                        заткнуться / затыкаться - to shut up (almost literally:
                        to stuff it) "Заткнись!"
                        <br />
                        <br />
                        открыть / открывать <i>versus</i> закрыть / закрывать -
                        to cover off (open), to cover over (close)
                        <br />
                        <br />
                        зажать / зажимать - to press over (зажимать рот рукой)
                        <br />
                        <br />
                        зайти / заходить - not merely "go behind" but "go over"
                        <br />
                        <br />
                        <br />
                        засомневаться - to begin to doubt" "Do not think of за
                        primarily as "behind"! This is a mistake in the history
                        of translating this word. It is "beyond" or "over," as
                        in "over those hills" or "beyond those hills." This
                        being the central meaning clarifies how за- the prefix
                        manages to encompass the meanings that it does, keeping
                        in mind of course, these are not one-to-one equivilants
                        ("over" in phrasal verbs often coindices with пере-, for
                        instance). One has to parse the meaning of the English
                        prepositions into multiple parts to organize the
                        connections. "Over" in the sense (one must imagine
                        things physical-visually, from whence language emerged
                        non-relativistically) of a path which extends above,
                        beyond, and landing on the other side of something--that
                        is the sense of за- which explains it meaning "behind,"
                        while also meaning "extremely", "into", and eventually
                        "start to." We even say, at times, in English "To go to
                        the store over bread" or "start a war over an argument",
                        which incorporates other aspects of за-, and explains
                        why they share the same word.
                        <br />
                        Use this image to imagine the connection between за's
                        meanings, and what a verb might mean.
                    </div>
                    <br />
                    <Image
                        className="semantic-map-1"
                        src="/images/за-SemanticMap.jpg"
                        width={imageWidth}
                        height={imageHeight}
                        alt="diagram"
                    ></Image>
                    "over", "behind", "beyond"
                    <br />
                    covering a distance, reaching a point, passing it, revealing
                    oneself to the other side, revealing the other side to
                    oneself
                    <br />
                    <br />
                    "солнце заходит за горы (acc)" - The sun is going (to) over
                    the mountains (going behind the mountains)
                    <br />
                    but also ;
                    <br />
                    "заходите сюда еще раз" - "Come over (here) again"
                    <br />
                    "over", therefore, in strictly physical meanings with motion
                    verbs means either "behind (over)" or "to our side of
                    something (over)", that is, "showing up somewhere." Really,
                    both meanings are the same, Russian uses other parts of the
                    sentence to specify whether the "over" is 'to' or 'fro.'"
                    <br />
                    <br />
                    <h2>*в(о)- "in, into</h2>
                    <br />
                    1. Entrance, insertion
                    <br />
                    [2. For words referring to 'standing up' (as if a sitting
                    person must stand up to 'enter' in the discussion)]
                    <br />
                    <br />
                    вкидывать / вкинуть - throw into
                    <br />
                    ворваться / врываться - tear into, rush into, burst in,
                    enter by force
                    <br />
                    вставить / вставлять - insert, put in
                    <br />
                    втолкнуть / вталкивать - push in, shove in, cram
                    <br />
                    влить / вливать - pour in, instill
                    <br />
                    вскочить / вскакивать - to jump up, to stand up quickly
                    <br />
                    встать / вставать - to arise, to stand up"
                    <br />
                    <br />
                    <h2>*при- "up to, to</h2>
                    <br />
                    1. Arrival
                    <br />
                    2. Small approach, small addition, small action
                    <br />
                    <br />
                    поднять / поднимать - to raise; приподнять / приподнимать -
                    to raise a little bit
                    <br />
                    прилить / приливать - add a little by pouring; arrive by
                    flowing "Кровь прилила к лицу."
                    <br />
                    приставить / приставлять - to place up to, place against
                    "Приставил пистолет к голове"
                    <br />
                    <br />
                    <h2>*от- "off, away, back"</h2>
                    <br />
                    1. Small departure, addition of small distance
                    <br />
                    2. Removal of small amount
                    <br />
                    3. (sometimes with +ся) cessation of action, or removal of
                    self from something
                    <br />
                    <br />
                    оторвать / отрывать - tear off, rip off, detach by pulling
                    or tugging
                    <br />
                    оторваться / отрываться - detach oneself (used to describe
                    shifting attention off something, with effort)
                    <br />
                    откинуться / откидываться - to throw oneself off, to roughly
                    lean back
                    <br />
                    <br />
                    When an verb refers to an action that has no direction, and
                    only occurs at a short distance, you can bet that от- is
                    likely to mean "finish doing", since movement off would mean
                    the creation of a distance across which it can't occur." "By
                    imagining a natural emphasis on that which is right in front
                    of us (where our eyes and hands point, and so our
                    attention), "off" or 'от' can mean "back" since it is "off
                    from the thing in front" implicitly."
                    <br />
                    <br />
                    <h2>*до- "unto, until, up to, out (finish)"</h2>
                    <br />
                    1. Emphasizes the removal of final distance to some aim,
                    point, place, space, level
                    <br />
                    2. Emphasizes reaching a goal, measure
                    <br />
                    3. Pre- (before)
                    <br />
                    <br />
                    допить / допивать - drink till the end (notice that this
                    emphasizes reaching the end after a process, in contrast to
                    выпить which emphasizes emptying of the drink. It's a very
                    slight difference, not the end of the world!)
                    <br />
                    долить / доливать - to add by pouring (reaching, say, a
                    particular amount)
                    <br />
                    допечь / допекать - to bake unto the necessary amount, to
                    reach doneness in baking (emphasizes <i>reaching</i> an
                    amount, whereas напечь emphasizes amount merely in the sense
                    of quantity or extent, whether it be correct or surprising)
                    <br />
                    дожечь / дожигать - to burn until the end (e.g. a candle)"
                    "The abstract meanings of prefixes are conceivably later
                    derivatives of the realm of physical, movement meanings they
                    have. до- often can mean physically something is done unto
                    something (generally carrying a sense of 'small addition'),
                    or it can mean something was done unto <i>an amount</i>. The
                    same verb, like with all prefixes, can mean any of the
                    options, depending on context. One useful rule of thumb is
                    that if the clause (sentence) you find the prefixed verb in
                    contains the a preposition (e.g. перейти через, налить на,
                    вбить в, дойти до, вбить из, отойти к), you can suspect the{" "}
                    <i>physical</i> ;meaning (often listed first in this deck).
                    Without a prepositional phrase, which generally describe
                    movement directions, the prefix is more likely to not be
                    describing movement, but rather the more abstact senses of
                    the prefix (e.g. за- as extreme action, rather than
                    "behind")"
                    <br />
                    <br />
                    <h2>*на- "up, upon"</h2>
                    <br />
                    1. Up to a surface (onto a surface)
                    <br />
                    2. Into contact with a surface (bumping into, collision)
                    <br />
                    3. Up to a certain amount (emphasizes a quantity)
                    <br />
                    <br />
                    <br />
                    написать / написывать - to write (an amount)
                    <br />
                    напиться / напиваться - to drink one's fill, to get drunk
                    <br />
                    налететь / налетать - come flying to somewhere, to fly into
                    (e.g. a wall)
                    <br />
                    найти / находить - to walk upon, to come upon, i.e. to find
                    <br />
                    наговорить / наговаривать - to speak much of something
                    (quantity emphasis); to falsely accuse someone"
                    <br />
                    <br />
                    <h2>*о(бо)- about, around, mis-</h2>
                    <br />
                    1. About or around something
                    <br />
                    2. Including all sides
                    <br />
                    3. (+ся) mistaken action (probably from 'об+ acc', meaning
                    "upon, up against)
                    <br />
                    4. Downward (synonymous with one sense of с-
                    <br />
                    <br />
                    оглянуть or оглядеть / оглядывать - to look about something,
                    look at all sides
                    <br />
                    оглядеться, оглянуться / оглядываться - to look about
                    oneself, i.e. look round, to look behind
                    <br />
                    <br />
                    <br />
                    ослышаться / -- - to mishear, to hear incorrectly
                    <br />
                    оговориться / оговариваться - to mispeak, make a mistake in
                    speech (wrong word etc.)
                    <br />
                    ошибиться / ошибаться - (to bump up against oneself) to be
                    mistaken"
                    <br />
                    <br />
                    <h2>*про- past, through</h2>
                    <br />
                    1. Through the points along a line
                    <br />
                    2. Through the point of interest &gt; accidentally beyond
                    point &gt; mistaken action
                    <br />
                    3. To engage in through a specific length of time
                    (emphasizes non-arbitrary length)
                    <br />
                    <br />
                    прор<u>е</u>зать / прорез<u>а</u>ть - cut through (from one
                    end of something to the other)
                    <br />
                    прокар<u>а</u>бкаться / прокар<u>а</u>бкиваться - to
                    scramble past (through)
                    <br />
                    пролить / проливать - to spill (something), etc.
                    <br />
                    <br />
                    <h2>*пере- "across, over"</h2>
                    <br />
                    1. Between two emphasis points (especially crossing 'over' a
                    border between)
                    <br />
                    2. From one instance of action, crossing into another (to do
                    something again, redo something)
                    <br />
                    3. Crossing the point of interest, doing something too much
                    <br />
                    <br />
                    пересмотреть / пересматривать - to rewatch, to watch again,
                    to watch over (and over)
                    <br />
                    перелить / переливать - (1) pour from one container, to
                    another, (3) overpour, to pour up too much, more than the
                    needed amount (2) to empty and fill again anew
                    <br />
                    переп<u>о</u>лнить / переполнять - fill up / fill over,
                    above a certain measure-- to overfill
                    <br />
                    перекричать / перекрикивать - to shout over, to shout loud
                    enough to drown out other sounds" "Meaning 2 is one of the
                    more <i>ad hoc</i> ;prefixes in use: you can fairly reliably
                    add that to whatever and it will work. It may be odd and
                    creative and non-standard, but it will 'work.'"
                    <br />
                    <br />
                    <h2>*под- "up, under, down"</h2>
                    <br />
                    1. Action occuring under ("upward")
                    <br />
                    2. Action aiming under ("downward"), or low down ;
                    <br />
                    3. Action as if underneath, following along, or supporting
                    in tandum
                    <br />
                    4. Action that is subversive, secretive, or subtle
                    <br />
                    <br />
                    поддержать / поддерживать- to hold under, i.e. to support
                    <br />
                    подбросить / подбрасывать - to throw upward; to throw
                    beneath; to secretly place something or plant fake evidence
                    (e.g. drugs)
                    <br />
                    поднять / поднимать - to raise up, "to take up"
                    <br />
                    подсказать / подсказывать - to help someone pronounce
                    something by saying it correctly quietly or subtly
                    <br />
                    поддакнуть / поддакивать - to utter affirmative words or
                    sounds in conversation as a token that the listener is
                    following along or agreeing
                    <br />
                    подвыть / подвывать - to howl in echo another's howling; to
                    howl or wail at a low drone, weakly" "Because с- already
                    takes up many meanings of "down", you'll rarely see this
                    mean "to under" or "down" and much more often see its other
                    sense, "upward" (since воз- is out of style for that, there
                    was a job opening)"
                    <br />
                    <br />
                    <h2>*воз- "up, above (also вз-, вос, вс)</h2>
                    <br />
                    1. Upward movement, arising
                    <br />
                    2. (especially for movements that first went downward) re-,
                    again, bring back up (returnment)
                    <br />
                    3. Old prefix, not very in use, and so, remains with some
                    poetic or antiquated forms
                    <br />
                    <br />
                    <br />
                    вспомнить / вспоминать - recall, to bring back up into
                    memory
                    <br />
                    воссесть / восседать - dated/ironic way of saying "sit"
                    (solemnly)
                    <br />
                    восстановить / восстанавливать - renew, renovate,
                    reconstruct, restore
                    <br />
                    возникнуть / возникать - arise, appear, emerge, spring up
                    <br />
                    взять / взимать or взымать (or just брать) - literally "take
                    up", grab, acquire (as opposed to "take away" or "take off")
                    <br />
                    взметнуть or взметать / взмётывать - to hurl up (upwards)"
                    <br />
                    <br />
                    <h2>
                        *недо- 1. Under-, insufficiently, poorly, without
                        reaching intended point
                    </h2>
                    <br />
                    <br />
                    недослушать / недослушивать - to listen inattentively, in
                    part, or not to the end
                    <br />
                    <br />
                    <h2>*из- forth, out (from within)</h2>
                    <br />
                    1. Same as вы- but tends towards higher register, more
                    abstract senses
                    <br />
                    <br />
                    <h2>*пре- "forth, out (from the rest)</h2>
                    <br />
                    1. Separation from a row by moving out of line
                    (exceedingness, totalness, breaking formation)
                    <div>
                        <br />
                    </div>
                    <div>
                        In older, speech (for instance liturgical language), can
                        be added to adjectives to strengthen them (similar to
                        Spanish "re-")
                    </div>
                    " As part of a latin loan word, it can be a transliteration
                    of Latin pre- (before, beforehand).
                    <br />
                    <br />
                    <h2>*пред- "before, fore-</h2>
                    <br />
                    1. In front of (передо мной = before me, "in front of me")
                    <br />
                    <br />
                    представиться / представляться - to put oneself before
                    someone, i.e. to introduce or present
                    <br />
                    предсказать / предсказывать - foretell, foresay"
                    <br />
                    <h1>Example Verbs</h1>
                    <br />
                    <br />
                    <h2>Example Verb: делать - to do/make</h2>
                    сделать - often used as the perfective because the с- on
                    this verb denotes "coming together to form something", so,
                    when using the verb as in "to make" something, this is
                    generally the perfective. However, there also is used:
                    <br />
                    наделать / наделывать - to make (emphasizing quantity)
                    <br />
                    поделать / поделывать - to do (over some span of time), to
                    do in sequence a lot or a number of things"
                    <br />
                    <br />
                    <h2>Example Verb: лить - to pour</h2>
                    полить - pour along (give a layer of liquid)
                    <br />
                    залить - pour beyond (pour beyond a reasonable point, i.e.
                    flood)
                    <br />
                    отлить - pour off (remove a small amount by pouring)
                    <br />
                    влить - pour in (insert somewhere by pouring)
                    <br />
                    вылить - pour out (remove from somewhere by pouring)
                    <br />
                    пролить - pour through (mistakenly pour out)
                    <br />
                    долить - pour unto (add to something by pouring; pour{" "}
                    <u>reaching</u> a specific extent)
                    <br />
                    прилить - pour to (add a little bit by pouring)
                    <br />
                    улить - pour at (pour all over a point, completely pour
                    over; e.g. so as to put out a fire)
                    <br />
                    излить - pour forth (вылить but tends towards poetic
                    meanings)
                    <br />
                    разлить - pour apart, pour out (distribute or spread apart
                    by pouring; spill by over pouring)
                    <br />
                    налить - pour up, pour on (fill by pouring, fill up to a{" "}
                    <u>particular amount,</u> ;pour on the surface of)
                    <br />
                    подлить - pour up (add by pouring, emphasising no longer
                    lesser, no longer lower amount)
                    <br />
                    облить - pour about (pour on all sides, cover all around by
                    pouring)
                    <br />
                    перелить - pour across (pour from one to another; to pour
                    too much; re-pour anew, pour again)
                    <br />
                    слить - pour off; pour with, pour together (to pour off a
                    surface; to combine by pouring) <br />
                    Ask yourself, what really is, how big is, and what is the
                    purpose of the difference between "pour in" and "pour up"
                    and "pour"
                    <br />
                    <br />
                    <h2>Example Verb: писать - to write</h2>
                    написать / написывать - to write a certain amount (a book, a
                    message, a paragraph) (This is considered 'the perfective'
                    mostly because that is the way we tend to speak about
                    writing, in particular. That is the emphasis we tend to have
                    in mind. But not always:)
                    <br />
                    пописать / пописывать - to write for an arbitrary amount of
                    time
                    <br />
                    прописать / прописывать - to write through the course of
                    some amount of time
                    <br />
                    подписать / подписывать - to write beneath an additional bit
                    (e.g. to sign, subscribe)
                    <br />
                    отписать / отписывать - to finish writing, to inform by
                    message (send 'off' writing)
                    <br />
                    переписаться / переписываться - mutual writing across, i.e.
                    to exchange letters, write back and forth
                    <br />
                    уписать / уписывать - to find space for something written in
                    a given space, to fill a space with writing
                    <br />
                    дописать / дописывать - finish writing, to write unto some
                    kind of limit
                    <br />
                    приписать / приписывать - to write a bit in addition on the
                    side to something written, etc...
                    <br />
                    <br />
                    <h2>Example Verb: пить - to drink</h2>
                    выпивать / выпить - to drink (something out, empty by
                    drinking) (This is considered 'the perfective' mostly
                    because that is the way we tend to speak about 'drinking',
                    in particular. That is the emphasis we tend to have in mind.
                    But not always:)
                    <br />
                    <br />
                    напить - to drink a certain amount (a bottle, a 12-pack, a
                    whole bar)
                    <br />
                    пропить - to drink for a certain amount of time, to drink
                    through (spend money on drinking) etc.
                    <br />
                    <br />
                    Here's a rather forced example:
                    <br />
                    Мы напили все три бутылки. (Wow, how much you drank!)
                    <br />
                    Мы пропили весь день все три бутылки. (Wow, how long it
                    took!)
                    <br />
                    Мы выпили все три бутылки. (Wow, all three are empty!)
                    <br />
                    <br />
                    This example illustrates the non-vital quality the prefixes
                    can take on. They mean things, but more than half the time
                    the meaning can be scrounged up from the context, when the
                    prefix can't be deciphered.
                    <br />
                    <br />
                    <h2>
                        Example Verb: -п<u>о</u>лнить / полн<u>я</u>ть - to fill
                        [полный]
                    </h2>
                    As usual, -ять, when used to form imperfective branch verbs,
                    is stressed.
                    <br />
                    <br />
                    You'll tend to find that definitions of one of the following
                    simply list one of the others (e.g. "заполнить (v.):
                    наполнить"). This demonstrates a closeness in their meaning,
                    which would benefit us to note. It also demonstrates further
                    the non-crucial aspect of prefixes at times.
                    <br />
                    <br />
                    заполнить / заполнять - to fill completely; to fill in
                    (document's blank spaces)
                    <br />
                    переполнить / переполнять - overfill, fill such that
                    something crosses over the top
                    <br />
                    наполнить / наполнять - to fill up (fill completely)
                    <br />
                    <br />
                    дополнить / дополнять - to add unto, fill unto a specified
                    measure
                    <br />
                    <br />
                    пополнить / пополнять - to increase by adding, add what was
                    missing (arbitrary amount), fill a bit (along)
                    <br />
                    <br />
                    <h2>
                        Example Verb: п<u>о</u>мнить (-поминать) - to have in
                        memory
                    </h2>
                    помнить - to mind, to hold in memory
                    <br />
                    припомнить / припоминать - to bring to mind, to get back at
                    someone (bring back to mind for them how they wronged you)
                    <br />
                    вспомнить / вспоминать - recall, to bring back up into
                    memory
                    <br />
                    опомниться / опоминаться ;- to come about one's mind, to
                    mind about oneself (regain consciousness; to come to
                    understand one's mistake) <br />
                    упомянуть / упоминать (to mention, refer) is related, but
                    most of the помянуть forms are completely out of
                    recognition. ;
                    <br />
                    <br />
                    <h2>Sound Verbs:</h2>
                    The Three Common Perfectives "Imperfective Unprefixed Root,
                    and
                    <br />
                    по- : To do for an arbitrary amount of time (for a bit, for
                    some time, a while)
                    <br />
                    за- : To begin
                    <br />
                    про- : To do for a specific amount of time (all night, all
                    class period, the whole conversation etc.)
                    <br />
                    <br />
                    Each of these is liable to be met, of course, in a branch
                    perfective form.
                    <br />
                    <br />
                    It is very common to see simple verbs put into
                    present-active-adverb-participle form ("<u>Doing</u> this,
                    he did this.", offset by commas), with one of these added.
                    So instead of "пищая" (squeaking; emphasing merely that the
                    action was occuring, no reference to time), you're much more
                    likely to see попискивая (same root, underlying -к-),
                    meaning "squeaking", but with an added sense of having some
                    nonspecific length in time over which action occured. Such
                    words may frequently not be found in any English dictionary,
                    and are reliably createable on-the-fly.
                    <br />
                    <h1>New Word Aspect Recognition & Pair Derivation</h1>
                    Prefixes perfectivize.
                    <br />
                    Suffixes imperfectivize.
                    <br />
                    Root Pairs have a pattern: lone verbs, especially -ить, tend
                    greatly to be imperfective. <br />
                    Pairs, however, tend to be<i> ;</i>"<i>per.</i> -ить /{" "}
                    <i>imp.</i> -ать" and ;<i> ;</i>"<i>perf. </i>
                    -нуть / <i>imp.</i> -ать."
                    <br />
                    All Branches can be navigated if you know where they started
                    from, but most branches can be navigated without knowing the
                    roots. ;
                    <br />
                    Pesky instances where the Root form coincides with Branch
                    forms ruin things:
                    <br />
                    While -ывать/-ивать guarantees an imperfective and is
                    recognizable, -ать -ять causes a conundrum. Is this a Root
                    verb ending in the letters "ать", gaining a prefix to become
                    perfective, or a Root verb gaining a prefix, and{" "}
                    <i>then the true suffix </i>ать, making it imperfective? One
                    must know the roots. ;
                    <br />
                    <br />A generalized example, using с- is shown here:
                    <br />
                    (с-+root) Perfective &gt;&gt; с-___ать &lt;&lt; Imperfective
                    (prefix-+root-+ать)
                    <br />
                    <i>If you know the root pair,</i> you can determine which is
                    the case.
                    <br />
                    сказать - perfective because казать + с<br />
                    укреплять - imperfective, because крепить + у + ять
                    <br />
                    <br />
                    Prefixed verbs ending in -ать/-ять verbs require the most
                    foreknowledge.
                    <br />
                    <br />
                    <br />
                    This is much more difficult to explain in words than it is
                    to understand and know. So, a bunch of examples will make it
                    clearer than an explanation:
                    <br />
                    <br />
                    (The following are random verbs taken from a book.) ;
                    <br />
                    <br />
                    "засунул" - perfective for sure, because prefix за, and
                    doesn't end in -ать
                    <br />
                    <br />
                    "договаривались" - imperfective, because -ивать, ;
                    <br />
                    <br />
                    "заблестели" - perfectice, because prefixed, no ambiguous
                    -ать
                    <br />
                    <br />
                    "вспомнился" - perfective, because вс-, no ambiguous -ать
                    (if you know your quirky-roots, you know its -помнить /
                    -поминать, and thus the pair вспоминаться)
                    <br />
                    <br />
                    "отталкивал" - imperfective, because although prefixed, has
                    -ивать <b>(there is no root verb "талкивать",</b> ;therefore
                    this must be толкать + от + ивать
                    <b>
                        )<br />
                    </b>
                    беседовали - imperfective, no prefix, it's a root verb, and
                    it's a root verb that doesn't come in a pair, doesn't end in
                    -нуть
                    <br />
                    <br />
                    "обшарпанной" (reverse engineer to обшарпать) - if you don't
                    know the root: most likely perfective, if you know the root
                    is шарпать, then definitely perfective (шарпать +
                    perfectivizing prefix), and you know its imperfective would
                    be обшарпывать
                    <br />
                    <br />
                    "разрешают" - imperfective (therefore present tense!),
                    because I know the root решить / решать uses the branches
                    -решить / -решать, therefore imperfective решить + раз- +
                    -ать = imperfective)
                    <br />
                    <br />
                    "внимательно" - this is an adjective, but -тельный replaces
                    -ть on verbs, so внимать is hidden in it, imperfective,
                    because I know the basal quirky-нять / -нимать
                    <br />
                    <br />
                    "останется" - perfective, cause prefixed, no -ать (from
                    стать, a single syllable -вать word, giving pair оставаться)
                    <br />
                    <br />
                    "опустевших" - опустеть (from пустой) - perfective, because
                    prefixed, no -ать.
                    <br />
                    пустеть - if you saw this word and didn't know anything
                    about it, (because of the -еть you could guess imperfective
                    for a high chance, but there is the <i>chance</i> ;you'd be
                    wrong. In this case, you wouldn't.
                    <br />
                    <br />
                    "выдержал" - perfective, because there is no держить,
                    держать is the root lone imperfective verb, therefore this
                    is perfective due to 1-step having been applied (add
                    perfectivizng prefix), with pair выдерживать. If you didn't
                    know the root, you wouldn't know whether it was hypothetical
                    *держить + вы + -ать, which would be an imperfective.
                    <br />
                    <br />
                    "прицелиться" - perfective, because при-, and I can be sure,
                    because -ить
                    <br />
                    <br />
                    "вереща" - You can tell its imperfective because its
                    prefix-less, if you know that it doesn't come in a pair.
                    (You also know for sure its imperfective if its in a present
                    tense participle form -а, -ая, or -ающий -ущий, -ящий etc.)
                    <br />
                    <br />
                    "обнажал" - This is hard. You have to know that it{" "}
                    <i>isn't</i> ;об+на+жать (which would be perfective). This
                    is actually обнажить / обнажать (from нагой). нажать{" "}
                    <i>also ;</i>exists, but it is жать plus на- (a whole
                    different tree). нажать does not exist <i>as a root. </i>It
                    is imperfective because it is -ать added to обнажить, or,
                    put otherwise, because it is the -ать in an -ать -ить pair.
                    <br />
                    <br />
                    "отшатнулся" - ; "-нуть" and prefix means surefire
                    perfective
                    <br />
                    <br />
                    "продолжалось" - Is <b>this verb </b>from ;должать? No. Then
                    this is something + -ать and therefore imperfective.
                    <br />
                    By contrast задолжать is perfective, from должать, and
                    therfore gain a prefix, but didn't gain a suffix. The
                    perfectivity can therefore depend on the context determining
                    which sense of the word is being used, but this is very rare
                    in Russian.
                    <br />
                    <br />
                    облипать - imperfective, because this is not a derivative of
                    a hypothetical "*липать", but rather липнуть + об + ать. If
                    *липать existed, it would 1) be a totally different
                    word/meaning than липнуть, and therefore 2) you could use
                    context to tell whether you were dealing with *липать + об
                    (perfective) or with липнуть + об + ать (imperfective)
                    <br />
                    <br />
                    "набрякло" - perfective, because -кло past tense could only
                    occur from -нуть (which is sometimes dropped completely to
                    form past tense, as in this case), prefix + нуть means
                    surefire perfective (набрякнуть)
                    <br />
                    <br />
                    избавиться - perfective, из+ prefix, no -ать, which means it
                    must be бавить + из (that doesn't tell you, though, that
                    it's -бавить, with hiphen, and that there is no word
                    "бавить")
                    <br />
                    <br />
                    "скомандовал" - perfective, because командовать + с. Some
                    native Russian verb pairs are ; -овать / -овать pairs
                    (indistinguishable), but generally with -овать the pair is
                    an unprefixed and prefixed (e.g. командовать /
                    скомандовать...) ;
                    <br />
                    <br />
                    "иссыхает" - Hard to tell. ис- prefix means it could be a
                    perfective *сыхать + из. One would have to simply know that
                    it comes from -сых<u>а</u>ть / -с<u>о</u>хнуть (compare -дых
                    <u>а</u>ть -дох<u>нут</u>ь). Thankfully, if it came from
                    *сыхать, one would likely have seen it ever anywhere else. ;
                    <br />
                    <br />
                    "воцарилось" - perfective, from prefix with no -ать. One
                    could guess the imperfective as either воцариваться or just
                    цариться.
                    <br />
                    <br />
                    "отправлялись" - Is this правлять + от (perfective)? No.
                    Such a word is unlikely anyway, since that вля reeks of
                    consonant mutation from -ять being added: making an
                    imperfective. Imperfective править &gt; perfective отправить
                    &gt; imperfective отправлять
                    <br />
                    <br />
                    ивать
                    <br />
                    ивать ;
                    <br />
                    ивать - always prefixed, always imperfective Branch verb,
                    very easy :)
                    <br />
                    <br />
                    If you know the Rootspace of a novel word, you can pull it
                    apart and find its aspect by knowing the order of
                    operations. "
                    <br />
                    <br />
                    <br />
                    сти and сть verbs раст<u>и</u> - рас<u>ту</u>, раст
                    <u>ё</u>шь, рас<u>тут</u>, (-растать)
                    <br />
                    вести - веду, ведёшь, ведут, (-водить: motion verb tree)
                    <br />
                    пасти - пасу, пасёшь, пасут, (-пасать)
                    <br />
                    трясти - трясу, трясёшь, трясут, (-трясать, see card)
                    <br />
                    цвести - цвету, цветёшь, цветут, (-цветать)
                    <br />
                    грести - гребу, гребёшь, гребут, (-гребать)
                    <br />
                    плести - плету, плетёшь, плетут, (-плетать)
                    <br />
                    гнести - гнету, гнетёшь, гнетут, (-гнетать)
                    <br />
                    <br />
                    ___сти - ___<i>C</i>у, ___<i>C</i>ёшь, ___<i>C</i>ут, (___-
                    <i>С</i>ать)
                    <br />
                    The consonant found in the imperfective branch form is the
                    same as revealed in the conjugations. ;
                    <br />
                    <br />
                    красть - краду, крадёшь, крадут, (-крадывать)
                    <br />
                    класть - кладу, кладёшь, кладут, (-кладывать)
                    <br />
                    сесть - с<u>я</u>ду, с<u>я</u>дешь, с<u>я</u>дут, (-седать,
                    etc.)
                </div>
            </main>
            <Footer />
        </>
    );
};

export default tree_model;
