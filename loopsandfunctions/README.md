JavaScript programming

Loops and functions
===================

Iteration or loop structures are one of the basic control structures in
programming languages: something is iterated (repeated) if a condition evaluates
true (loop condition). Iteration stops when the loop condition evaluates false.

Functions are one the most fundamental programming concepts and they are
extensively used in all programs. Functions have parameter variables that are
given values (arguments) when the function is called. Functions also often
return a value (return value). A function call is substituted with its return
value in an expression.

Exercises
---------

1.  Implement a function that outputs all even integers between 2 and 100.

2.  Implement a function that outputs all integers from 1 to a number given as
    argument.

3.  Implement a function that outputs all integers from a number given as
    argument to another number given as argument.

4.  Implement function printStars()that outputs a given number of stars and a
    linebreak. For example, printStars(9) outputs:  
    \*\*\*\*\*\*\*\*\*

5.  Implement function printSquare(sideLength)j that prints a square using the
    printStars function. For example, call printSquare(4) outputs:  
    \*\*\*\*  
    \*\*\*\*  
    \*\*\*\*  
    \*\*\*\*

6.  Implement function printRectangle(width, height)j that prints a rectangle
    using the printStars function. For example, call printRectangle(17,3)
    outputs:  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

7.  Implement function printTriangle(size) that prints a rectangle using the
    printStars function. For example, call printTriangle(5) outputs:  
    \*  
    \*\*  
    \*\*\*  
    \*\*\*\*  
    \*\*\*\*\*

8.  Implement function seriesSum(n) that **returns** the sum 1+2+3+...+n where n
    is an integer given as argument. Output the sum of integers from 1 to 100.

9.  Implement function factorial(n)j that return the factorial of integer n. The
    formula for factorial is n! = 1\*2\*3\*...\*n. Additionally, it is defined
    that the factorial of 0 is 1, that is 0! = 1. Output the factorial of
    integer 10.

10. Implement a function that outputs heading texts. Then implement a function
    that calls all the functions above and adds heading texts for each exercise
    output.

Implement all functions in the same node.js program.

Bonus

1.  Implement a recursive function that returns the sum of a series of integers.

2.  Implement a recursive function that returns factorial of an integer.

Submission
----------

Submit the source code and the output of the program in a file.

Instructions
------------

-   For this exercise you’ll need to have Node.js installed
    (<https://nodejs.org/en/> ).

-   Write the code using a code editor, e.g. Visual Studio Code
    (<https://code.visualstudio.com/> ).

-   You can output to the console in JavaScript with function console.log().

-   Variables in JavaScript do not have type declaration but they must be
    declared before use. The recommended way to declare variables is let
    variableName. Constants are declared const constantName.

    -   <https://www.sitepoint.com/how-to-declare-variables-javascript/>

-   It can be helpful to know that in strings can be concatenated (joined) with
    addition operator, e.g. if let a = “foo” and let b = ”bar”, console.log(a +
    b) outputs ”foobar”.

-   You can redirect the console output of a program to a file like this:  
    node program.js \> output.txt

Ohjelmointiharjoituksia: Tietokantayhteys ja JSON
=================================================

![https://documents.lucidchart.com/documents/ba4dd290-5443-43c5-a760-e1638af3bae3/pages/0_0?a=364&x=107&y=71&w=1166&h=628&store=1&accept=image%2F\*&auth=LCA%20e8750e37800c3e72e8803b8efc46c722e949c4b1-ts%3D1538659110](media/5de38c6160bab45acbc1017e197c3d6e.png)

Aiemmin olemme suunnitelleet ja toteuttaneet tietokannan järjestelmälle. Olemme
myös määritelleet JSON-rakenteen järjestelmään lähetettävälle tiedolle.

Nyt otetaan tietokantaan yhteys Node.js-ohjelmasta ja käsitellään tietokannan
tietoja ohjelmallisesti. Harjoittelemme myös JSON-datan käsittelyä
JavaScript-ohjelmassa.

Tehtävä
-------

### Tietokantayhteys

Luo uusi Node.js –moduuli

-   Luo projektille hakemisto ja anna hakemistossa komento npm init

Asenna projektiisi moduuli mysql : npm install mysql –save

Käynnistä tietokantaserveri koneellasi ja laadi dokumentaation
<https://github.com/mysqljs/mysql> ohjelma, jolla

-   Otetaan yhteys mysql.tietokantaan

-   Luetaan tietoja (SELECT)

-   Lisätään tietoja (INSERT)

    -   ks. lisätietoja alla

-   Päivitetään tietoja (UPDATE)

-   Poistetaan tietoja (DELETE)

JSON
----

JSON tulee sanoista JavaScript Object Notation. Nimestä saakin vihiä, että
JSON-datan käsittely on JavaScriptissä erityisen helppoa.

Tee testifunktio, jolla talletat aiemmin suunnittelemasi JSON-formaatin mukaisen
viestin tiedot tietokantaan. Tuota jotain sopivaa testidataa, jotta voit
arvioida, miten hyvin tietokantarakenne ja JSON-formaattisi palvelevat
tarkoitustaan. Voit tietysti korjata niitä, jos käy ilmi, että korjaamiselle on
tarvetta.

### Kysymyksiä

Vastaa kysymyksiin:

1.  Mikä on NPM ja mihin sitä käytetään?

2.  Mikä on tiedoston package.json merkitys Node.js-moduulissa?

3.  Miten

    1.  luet JavaScript-olion attribuutin arvon

    2.  asetat JavaScript-olion attribuutille uuden arvon

    3.  lisäät JavaScript-olioon uuden attribuutin

    4.  tulostat konsoliin JavaScript-olion sisällön

4.  Kuvaa JavaScript olio o, jonka attribuutit ovat o.etunimi = ”Timo”,
    o.sukunimi = ”Terävä”, o.ika = 18, o.nimike = ”opiskelija”

    1.  JSON-muodossa

    2.  JavaScript –olioliteraalina (siis kuinka kirjoittaisit olion
        JavaScript-koodissa).

5.  Miten muunnat JSON-merkkijonon JavaScript-olioksi? Entä päinvastoin?

Palautus
--------

Palauta lähdekoodisi JSON-tiedostoineen, testiohjelman suorituksen tulostus sekä
vastaukset kysymyksiin dokumenttina.

Ohjeita
-------

-   Työkaluista suomeksi: Z:\\HELIL\\LUKU\\kurssien
    kansiot\\fullstackJaTestaus2018\\javascript tyokalut2018.pdf

-   JSON-tiedon lukeminen ja käyttäminen on Node.js-ympäristössä aivan erityisen
    helppoa, ks. esim. *https://www.w3schools.com/js/js_json_intro.asp* .

Ohjelmointiharjoituksia: Testaa HTTP-dataa
==========================================

![](media/612a408cdeacb0b8ea0afcb3b6274d4e.png)

Web-sovellukset perustuvat clientin ja palvelun kommunikointiin
HTTP-protokollalla. Tutustutaan hieman siihen, mitä sovellusten konepellin alla
tapahtuu laatimalla

-   pieni palvelin, joka raportoi meille, mitä http-dataa se sai ja

-   pieni client (=web-sivu), joka lähettää palvelimellemme dataa

Palvelimen laatiminen on helppoa Express.js –frameworkillä. Artikkeli
<https://blog.risingstack.com/your-first-node-js-http-server/> antaa hyvän
lähtökohdan.

Tehtävä
-------

1.  Laadi web-sivu, joka lähettää palvelimelle

    1.  GET-pyynnön

    2.  lomakkeen POST-pyynnöllä

    3.  lomakkeen GET-pyynnöllä

    4.  kirjautumistiedot (käyttäjätunnus ja salasana) POST-pyynnöllä.

2.  Laadi palvelin, joka

    1.  vastaanottaa pyynnöt

    2.  vastaa käyttäjälle selaimeen kertomalla saamansa pyynnön tyypin

    3.  raportoi konsoliin saamansa GET ja POST-datan

    4.  palvelee clientin (siis toimii web-serverinä ja palauttaa HTML-sivun)

Tarkoituksena on siis vain hieman tutustua siihen, mitä web-sovelluksissa
taustalla tapahtuu, joten sivujen ei tarvitse olla hienoja. Jos haluat, saat
tietysti lisäksi kehitellä, mitä haluat.

Ohjeita
-------

-   Lomakkeiden laatimisesta:
    <https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form>

-   Lomakesivun palvelemisessa on kyse staattisesta sisällön palvelemisesti,
    siihen apua on esim. tässä:
    <https://expressjs.com/en/starter/static-files.html>

-   GET- ja POST-datan lukemisesta kerrotaan esim. tässä:
    <https://codeforgeek.com/2014/09/handle-get-post-request-express-4/>

-   Express.js:n dokumentaatiosta löydät lisätietoja, esim:

    -   request: <https://expressjs.com/en/api.html#req>

    -   response: <https://expressjs.com/en/api.html#res>

-   Tässä selitys, miksi tarvitaan body-parseria ja mitä se tekee:
    <https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90>

Bonustehtävä
------------

Eikö tehtävässä ollut kylliksi haastetta? Haasta itsesi tekemällä enemmän!

Näytä parametriarvot myös palauttamallasi web-sivulla. Huomaa, että selaimelle
on syytä lähettää HTML-koodia, jotta se osaisi muotoilla sisällön.

Palautus
--------

Palauta projektisi ilman kirjastoja.

REST-rajapintojen perusteita
============================

![](media/30209e85af4d843a3824d30f1efbe6e5.png)

Tehtävä
-------

Jatketaan prototyypin ajatusten kehittelyä palvelun osalta. Laadi edellisen
tehtävän palvelimeen endpoint, joka ottaa vastaan aiemmin suunnittelemasi
JSON-formaatin muotoisia viestejä POST-pyyntöinä ja vastaa niihin
asianmukaisesti, esim:

-   OK-koodilla, kun kaikki on kunnossa

-   virhekoodilla ja virhetekstillä, jos pyynnön sisällössä on jotain vikaa,
    esim. pakollinen tieto puuttuu tms.

Tulosta lisäksi palvelimen konsoliin saamasi tiedot, jotta voidaan tarkistaa,
että viesti on tullut perille oikein.

Testaa endpointin toiminta!

Kysymyksiä
----------

Vastaa kysymyksiin:

1.  Mitä eri HTTP-pyyntötyypit (request type) GET, POST, PUT, DELETE merkitsevät
    REST-rajapinnassa?

2.  Mitä ovat endpointit ja millaisia ne tyypillisesti ovat?

3.  Tutoriaalissa testataan mm. http-vastauskoodeja. Mitä vastauskoodeja on
    olemassa ja mitä ne tarkoittavat?

4.  Esittele lyhyesti jokin todellinen REST-rajapinta: millaisia endpointteja
    siellä on, anna esimerkkejä pyynnöistä.

5.  Miten voit manuaalisesti tehdä erilaisia http-pyyntöjä?

6.  Miten REST-APIen käyttäjän tunnistus tehdään? Miten se poikkeaa
    perinteisestä web-palveluiden tunnistamisesta?

    -   Perinteinen tapa on, että käyttäjä tyypillisesti antaa käyttäjätunnuksen
        ja salasanan, niiden perusteella tunnistetaan käyttäjä ja
        käyttöoikeudet, tunnistustieto talletetaan selainistuntoon, ja kun
        sessio loppuu/lopetetaan, tunnistustieto hävitetään.

Palautus
--------

-   Rajapintasi kuvaus:

    -   endpoint(it),

    -   esimerkkipyyntö,

    -   esimerkkivastaukset erilaisista tilanteista: OK, virhe(et)

-   Palvelimesi lähdekoodi

-   Vastaukset kysymyksiin

Ohjeita
-------

### REST

REST-rajapinnoista on kirjoitettu paljon, esim. tämä artikkeli tarjoaa tiiviisti
tietoa kysymyksiin vastaamiseksi:
<http://www.andrewhavens.com/posts/20/beginners-guide-to-creating-a-rest-api/>

### Express.js

Expressistä löytyy runsaasti ohjeita ja materiaalia, esim.
<https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction>

### Syötteiden tarkistus ja virheiden käsittely

Express-serverin virhekäsittelyyn laaditaan yleensä erilliset virhekäsittelijät
mutta tässä tapauksessa voidaan virheet käsitellä pyynnön käsittelijässä
yksinkertaisesti esim. näin:

app.get('/api/bmi', function (req, res, next) {

  ...

  if (!weight \|\| !height) {

    res.status(400).json({ error: "invalid parameter or parameter missing" });

    return;

  }  
  ...

Tuossa siis tarkistetaan, että pakollisilla parametreilla on jokin arvo (tyhjä
tulkitaan false).  Virhetilanteessa asetetaan vastauksen virhekoodi ja
lähetetään json-muotoinen vastaus. return tarvitaan get-funktion suorituksen
lopettamiseen, jotta sen loppua ei suoritettaisi.

Huomaa, että jos parametreja on useita, virhemahdollisuuksiakin alkaa kertyä,
esim. puuttuva parametri tai virheellinen arvo. Lisää tarkistuksia sen mukaan,
mitä katsot tarpeelliseksi esim. testauksessa havaitsemiesi ongelmien
perusteella.

REST-API-palvelin
=================

Nyt voidaan yhdistää tähän asti tehdyt asiat IoT-palvelumme taustajärjestelmän
ensimmäiseksi versioksi, joka osaa ottaa vastaan, tallettaa ja palauttaa
laitteen lähettämiä tietoja.

Tehtävä
-------

Tee artikkelin artikkelin
<https://medium.com/@avanthikameenakshi/building-restful-api-with-nodejs-and-mysql-in-10-min-ff740043d4be>
mallin pohjalta palvelinohjelma, joka

-   ottaa vastaan oman järjestelmäsi JSON-muotoisia viestejä

-   tallettaa niiden tiedot tietokantaan

Toteuta lisäksi toiminnallisuus, joka palauttaa kaikki talletetut tiedot
JSON-muodossa. Halutessasi voit toteuttaa muitakin toimintoja kuten esim.
yksittäisen tiedon hakemisen.

Palautus
--------

Tee palvelimellesi git-repository ja synkronoi se johonkin Git-palveluun
(GitHub, GitLab, BitBucket). Jotta Git-repositoryyn ei tallentuisi turhia
tiedostoja, luo projektisi juurihakemistoon .gitignore-tiedosto. Hyvän sisällön
saat <https://www.gitignore.io/api/node> -palvelusta.

Palauta Git-repository –linkki palvelimesi koodiin. Jos repositorysi ei ole
julkinen, muista antaa oikeudet sen käyttöön.

Ohjeita
-------

### Artikkelin esimerkki

Asenna Express generator: <https://expressjs.com/en/starter/generator.html>

Luo palvelimen runko: % express –no-view \<palvelimen-nimi\>

Generaattori luo Express-palvelinohjelman rungon ja tuloksena syntyy tällainen
hakemistorakenne:

.

├── app.js

├── bin

│ └── www

├── package.json

├── public

│ ├── images

│ ├── javascripts

│ └── stylesheets

│ └── style.css

├── routes

├── index.js

└── users.js

Palvelimen pääohjelma on app.js, siinä otetaan käyttöön jo valmiiksi moduuleja:

-   path: Tiedostojen ja hakemistojen käsittely

-   cookie-parser: Evästeiden käsittely-middleware

-   morgan: Lokikirjoituspalvelu

Lisäksi otetaan käyttöön staattisten tiedostojen palveleminen ja pyynnön
body-osan jäsentäjät sekä JSONille että lomakedatalle, aiemmista harjoituksista
tuttuja asioita.

Generaattori luo siis yleispätevän mallipohjan monenlaisille palvelimille, et
ehkä tarvitse kaikkea. Voit halutessasi poistaa ne osat, joita et tarvitse.

Reittien käsittely on jaettu erillisiin tiedostoihin routes-hakemistoon koodin
modularisoimiseksi. Tämä on varsin yleinen tapa.

### API eli rajapinta

Suunnittele rajapintasi aiemmassa harjoituksessa esiteltyjen periaatteiden
mukaisesti. Mieti, mikä tässä tapauksessa on

-   resurssi ja sitä vastaava endpoint

-   mitä verbejä käytetään, siis mitä pyyntötyyppiä käytetään

-   miten pyyntöihin liitetään tarvittava data: URL-parametreihin, polkuun,
    pyynnön bodyyn

### Testaus

Voit kokeilla rajapintaasi käyttämällä pyyntöjen lähettämiseen jotain työkalua
kuten Postman tai vaikka kirjoittamalla Node-ohjelman, joka lähettää pyyntöjä.

### Git

Git-palveluilla on erittäin hyvät ohjeet Git-repositoryjen perustamiseen ja
käyttöön.

Jotta voit käyttää Git:iä koneellasi sinun pitää kuitenkin asentaa itse ohjelma
koneellesi. Ohjelman saat täältä: <https://git-scm.com/downloads> .

Gitin käyttöön on lukuisia graafisia käyttöliittymiä, mutta suosittelen
kuitenkin totuttelemaan myös komentorivikäyttöön. Siihen joutuu kuitenkin
totuttelemaan, kun GUI-käyttöliittymän kautta jokin asia ei onnistu.

### Käyttäjätiedot Git-repositoryissä

Palvelimesi lähdekoodissa on näkyvissä tietokantapalvelimesi käyttäjätiedot,
ilman niitä yhteyttä ei voida muodostaa. Kun julkaiset repositoryn, myös
käyttäjätiedot tulevat julkisiksi. Se ei ole viisasta, mikä neuvoksi?

Ratkaisuna voit sijoittaa luottamukselliset tiedot erillisen json-muotoiseen
konfiguraatiotiedostoon, josta on monta versiota:

-   sellainen, jossa ei ole todellisia käyttäjätietoja mutta josta näkee,
    millainen konfiguraatio tarvitaan

-   oikea konfiguraatiotiedosto, jota käytät kehittämiseen

-   lisäät oikean konfiguraatiotiedoston .gitignore-tiedostoosi

Yksinkertainen pikaratkaisu on hoitaa homma esim. näin:

default.json:

{

"dbConfig": {

"host": "",

"user": "",

"password": "",

"database": ""

}

}

Tietokantayhteyden muodostavassa moduulissa:

let dbConfig = require('./config/default.json');

try {

dbConfig = require('./config/development.json');

console.log('Database configuration: development');

} catch (e) {

console.log('Database configuration: default');

}

const connection = mysql.createConnection(dbConfig);

.gitignore:

config/\*

!config/default.json

Kattavampi ratkaisu voisi olla käyttää jotain kirjastoa, esim.
<https://github.com/lorenwest/node-config/>

Asynkroniset kutsut
===================

Olemme oppineet, että ohjelman suoritus etenee rivi riviltä ylhäältä alaspäin,
jos mikään kontrollirakenne kuten ehto- tai toistolause ei toisin määrää. Tämä
pitääkin paikkansa, ohjelman käskyjen suoritus kyllä etenee näin, mutta käskyjen
suoritus ei aina välttämättä tule valmiiksi samassa järjestyksessä!

**Asynkronisten funktioiden** kutsuissa suoritus aloitetaan mutta sitten
jatketaan välittömästi eteenpäin seuraavaan käskyyn odottamatta, että edellinen
funktiokutsu on saatu valmiiksi. **Synkronisten funktioiden** tapauksessa
edellinen funktio suoritetaan aina loppuun ennen kuin seuraavan käskyn suoritus
aloitetaan.

Asynkronisessa ohjelmoinnissa on kyse rinnakkaisuudesta: ohjelman suoritus
haarautuu erillisiin säikeisiin, jotka suorittavat koodia omaa tahtiaan. Siten
on mahdollista, että ohjelma tekee yhtaikaa monia asioita. Asynkronisia
funktioita käytetään erityisesti silloin, kun jokin operaatio kestää kauan.
Usein ei ole mielekästä pysäyttää koko ohjelmaa siksi aikaa, kun odotetaan, että
jokin pitkällinen operaatio tulee valmiiksi.

HTTP-pyyntöjen tekeminen
------------------------

HTTP-pyynnön vastauksen saaminen kestää epämääräisen ajan. Vastaus voi tulla
melko nopeasti, ohjelmointimielessä kuitenkin hitaasti, sillä ohjelmakäskyjen
suorittaminen on hyvin nopeaa. Toisaalta voi olla, että sitä ei tule lainkaan,
jos palvelin ei vastaa.

Jos pyyntöjen tekeminen tekeminen olisi synkronista, ohjelma pysähtyisi aina
odottamaan palvelimen vastausta, ehkä loputtomiin, jos pyyntöjen aikakatkaisua
ei ole toteutettu. HTTP-pyyntöjä tekevät toiminnot ohjelmissa ovatkin
tyypillisesti asynkronisia.

Pyyntö siis pannaan liikkeelle, ja jatketaan eteenpäin odottamatta vastausta.
Vastaus on saatavissa vasta, kun funktion suoritus on päässyt loppuun, mutta
miten pääsemme käsiksi siihen, kun emme tiedä, milloin se on valmis?

Callback-funktiot
-----------------

Tyypillisesti asynkronisen funktion vastauksen käsittelyongelman ratkaisu on
callback-funktion käyttö: asynkroniselle funktiolle annetaan parametrina
funktio, jota se kutsuu, kun vastaus on saatu. Kutsuja siis antaa vastauksen
käsittelykoodin kutsun yhteydessä.

Monessa tapauksessa annetaan kaksi callback-funktiota: yksi onnistuneen pyynnön
käsittelyyn ja toinen epäonnistuneen pyynnön virhekäsittelyyn.

Promiset
--------

Callback-funktioiden käyttö käy helposti melko hankalaksi mm. siksi, että
lopputuloksen käsittely pitää aina määritellä ensimmäiseksi, jotta toimintoa
voidaan edes tehdä. Asynkronisten toimintojen ohjelmoinnin selkiyttämiseksi
kieleen on tuotu rakenne promise. Promise on olio, johon callback-toiminnot
voidaan liittää loogisemmin sen jälkeen, kun toiminto on pantu liikkeelle.
Promisen luomisessa asynkronisessa funktiossa on omat koukeronsa, mutta niiden
käyttäminen on suhteellisen selkeää. Useammin ollaankin asynkronisten palvelujen
käyttäjinä kuin niiden laatijoina.

HTTP-pyynnöt Node.js-ympäristössä
---------------------------------

HTTP-pyyntöjen tekemiseen on lukuisia eri moduuleja. Node.js sisältää itsekin
yhden, mutta sen sijaan usein käytetään jotain helppokäyttöisempää moduulia.

Seuraavassa on kaksi esimerkkiä, toinen callback-perustainen ja toinen
Promise-perustainen.

### Request-moduuli

/ pyynnön parametrit annetaan oliona

let reqParams = {

uri:
'https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=0083&language=fi',

method: 'GET'

}

// testataan asynkronisuutta, milloin tämä muuttuja saa uuden arvon

let status = 'None'

// ensimmäinen parametri: pyynnön parametrit, jos tehdään get ilman
lisämääreitä, voidaan antaa pelkkä URI

// toinen parametri: vastauksen käsittelevät funktio

request(

reqParams,

(error, response, body) =\> {

status = response.statusMessage; // asetetaan status-tekstille uusi arvo

console.log('Status 2', response.statusCode, status);

console.log('Body', body);

}

);

console.log('Status 1', status);

Request moduulin käyttöä esitellään hyvin artikkelissa
<https://www.sitepoint.com/making-http-requests-in-node-js/> . Moduulilla on
kuitenkin useita käyttötapoja, kannattaa lukea myös sen omaa dokumentaatiota.

### Node-fetch-moduuli

Node-fetch-moduuli toteuttaa JavaScript ES6-määrittelyn mukaisen Fetch API:n. Se
siis palauttaa promise-olioita, jotka siis ovat lupaus tulevasta, eivät vielä
käytettävissä olevia.

const fetch = require("node-fetch");

const url =
"https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=0083\&language=fi";

// testataan asynkronisuutta, milloin tämä muuttuja saa uuden arvon

let status = 'None'

fetch(url)

.then(res =\> {

status = res.status

console.log('Status 2', status, res.statusText);

// rses.json jäsentää responsen body-osan JSON-sisällön

// palauttaa promisen, palautamme sen, jotta voidaan ketjuttaa edelleen

return res.json();

})

.then(res =\> console.log(res) )

.catch(err =\> console.log(err));

console.log('Status 1', status)

Promise-asiaa selvitetään hyvin artikkelissa
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises> .

Tehtävä
-------

Kokeile ensin esimerkkien avulla http-pyyntöjen tekemistä.

Laadi sitten REST-palvelimellesi testiohjelma, joka lähettää määrittelysi
mukaisia HTTP-pyyntöjä palvelimellesi.

Voit laatia ohjelmastasi testidatageneraattorin, joka tuottaa järjestelmääsi
sellaista dataa, jota järjestelmäsi IoT-laitteet lähettäisivät. Voit tehdä
generoinnista myös ajastettua, jolloin voit simulaoida IoT-laitteita
reaaliajassa.

Palautus
--------

Palauta Git-repository –linkki palvelimesi koodiin. Jos repositorysi ei ole
julkinen, muista antaa oikeudet sen käyttöön.

Ohjeita
-------

### Kutsujen ajastaminen 

Kutsuja voidaan ajastaa JavaScriptissä kahdella tapaa:

-   setInterval kutsuu parametrina saamaansa funktiota määrävälein uudelleen ka
    uudelleen.

-   setTimeout kutsuu parametrina saamaansa funktiota annetun ajan kuluttua.
    Funktio voi ajastaa uuden kutsun setTimeout-funktiolla, tällöin saat kutsun
    toistumaan mutta voit myös säädellä helposti, millä välillä niitä tehdään.

Parametrina annettu funktio on siis callback-funktio! Lisätietoa esim.
<https://javascript.info/settimeout-setinterval> .
