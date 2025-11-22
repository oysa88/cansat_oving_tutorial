# CanSat Øvinger Tutorial

### @diffs true

## Del 1: @unplugged

### CanSat Øvingsoppgaver @unplugged

I denne veiledningen skal vi gå gjennom grunnleggende funksjoner som dere får bruk for når dere skal programmere en CanSat. 

**Oppgaver dere skal løse er: **

- **1)** Få et LED-lys til å blinke ved koble det til pins på micro:betingelse
- **2)** Lage en teller som teller fra 10 til 0, og som skrur på LED-lyset i 5 sekunder.
- **3)** Bruke en OLED-skjerm, og vise nedtellingen på skjermen.
- **4)** Lege et voltmeter som skriver spenningen til OLED-skjermen.
- **5)** Lese analogverdi fra en TMP36 (Temperatursensor) og konvertere disse til termometerer vi viser på OLED-skjermen.
- **6)** Koble til en BMP280 sensor, les av lufttrykk og skriv det på OLED-skjerm.
- **7)** Regne om barometrisk lufttrykk til relativ høyde på CanSat.

Lykke til!


## Del 1.1: @unplugged

### Oppgave 1 - Koble LED-lys til CanSat

Koble opp kretsen som vist på bildet under.

NB: Koble pluss på LED til ingangen P0 og minus til jord (GND).

![microbit-ovelse-1-LED.jpg](https://i.postimg.cc/wBXCyNSs/microbit-ovelse-1-LED.jpg)


## Del 1.2:

### Oppgave 1: Få LED-lyset til å skru seg AV og PÅ én gang hvert sekund.

Inni ``||basic: gjenta for alltid||``:

Finn blokken ``||pins: skriv digital til||`` som vi skal bruke for å skru AV og PÅ LED-lyset vi har koblet til CanSat. Sett verdien til 1 for å skru lyset PÅ og 0 for å skru det AV.

Bruk en ``||basic: pause||`` for å si hvor lenge lyset skal være PÅ og AV.

**Ekstra**: Endre hvor fort LED-lyset blinker ved å justere på tiden i ``||basic: pause||``-blokken.

**HINT**: 1000 ms i ett sekund


```blocks
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
```

## Del 2.1:

### Oppgave 2: Telle fra 10 til 0

**Når man skal lage store koder, er det vanlig å bruke ``||functions: funksjoner||``. Inni funksjonen bygger vi koden for det vi vil den skal utføre, og så kaller vi den opp når vi trenger den.**

Start med å lage funksjonen ``||functions: nedtelling||``:

For å kunne telle nedover, trenger vi en variabel som kan huske tallet vår. Lag en ny variabel: ``||variables: teller ||``, og sett den inn i ``||functions: nedtelling||``.

Siden vi skal telle ned fra 10 til 0, bruker vi en ``||loops: FOR-løkke ||`` som lar og gjenta løkken akkurat så mange ganger vi ønsker. 

Sett ``||loops: gjenta for indeks ||`` til å kjøres **fra 0 til 10**.

Inni ``||loops: FOR-løkke ||`` skal vi bruke en ``||basic: vis tall ||`` til å vise ``||variables: teller ||``. Og for hver gang den har vist tallet, ``||variables: endre teller med -1 ||``.

Husk å kalle opp ``||functions: nedtelling||`` fra ``||basic: ved start||``.

```blocks
function nedtelling () {
    teller = 10
    for (let indeks = 0; indeks <= 10; indeks++) {
        basic.showNumber(teller)
        teller += -1
    }
}
let teller = 0
nedtelling()
```

## Del 2.2:

### Oppgave 2: Få LED-lys til å lyse i 5 sek.

Bruk de samme blokkene fra oppgave 1 for å skru på LED i 5 sekunder. Endre ``||basic: pause ||`` LED PÅ og AV til 5000 ms.

```blocks
function nedtelling () {
    teller = 10
    for (let indeks = 0; indeks <= 10; indeks++) {
        basic.showNumber(teller)
        teller += -1
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
let teller = 0
nedtelling()
```

## Del 2.3:

### Bestemme når nedtelling av starte

``||functions: Funksjonen nedtelling||`` lar kjører når vi starter micro:biten. Hvis vi vil at den skal kjøres på nytt, kan vi f.eks. kalle den opp når vi ``||input: trykker på knapp A||``.



```blocks
function nedtelling () {
    teller = 10
    for (let indeks = 0; indeks <= 10; indeks++) {
        basic.showNumber(teller)
        teller += -1
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
input.onButtonPressed(Button.A, function () {
    nedtelling()
})
let teller = 0
nedtelling()
```

## Del 3: @unplugged

### Oppgave 3: Skriv til OLED-skjerm

Nå skal vi se på hvordan vi kan bruke en Kitronik OLED-skjerm for å bedre vise dataene våre. 

Skjermen skal kobles til mellom CanSat og micro:bit.

![Kitronik OLED-skjerm](https://www.lekolar.no/globalassets/inriver/resources/133848_118895.jpg)


## Del 3.1:

### Oppgave 3: Sette opp OLED-skjerm

Fra biblioteket ``||kitronik_VIEW128x64: 128x64 Display||``, hent blokkene ``||kitronik_VIEW128x64: turn AV display||`` og ``||kitronik_VIEW128x64: Set font size to Normal||``. 

Plasser begge blokkene inn i ``||basic: ved start||``, og sett display til ``||kitronik_VIEW128x64: PÅ||`` og sett font til ``||kitronik_VIEW128x64: Big||``.

```blocks
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
```


## Del 3.2: 

### Oppgave 3: Vise nedtelling på OLED-skjermen

Fjern ``||basic: vis tall||`` ``||variables: teller||`` fra ``||functions: nedtelling||``. 

Sett istedet inn ``||kitronik_VIEW128x64: clear display||`` og ``||kitronik_VIEW128x64: show||`` ``||variables: teller||`` ``||kitronik_VIEW128x64: on line 1||``.

Last ned koden for å teste!

```blocks
function nedtelling () {
    teller = 10
    for (let indeks = 0; indeks <= 10; indeks++) {
        kitronik_VIEW128x64.clear()
        kitronik_VIEW128x64.show(teller, 1)
        teller += -1
        basic.pause(1000)
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
input.onButtonPressed(Button.A, function () {
    nedtelling()
})
let teller = 0
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Big)
nedtelling()
```


## Del 4 @unplugged

### Oppgave 4: Lage et voltmeter

Alle sensorene vi skal koble til CanSat'en bruker spenningsverdien vi får fra sensoren for å regne ut den faktiske verdien vår. Vi må derfor lære hvordan man konverterer den analog verdi vi får inn på micro:biten til en spenningsverdien.


## Del 4.1

### Oppgave 4: Lagre analog verdi på micro:biten

Start med å lage en ny funksjon: ``||functions: voltmeter||``.

Inni ``||functions: voltmeter||`` skal vi lage en ny variabel: ``||variables: analogVerdi||``. Sett ``||variables: analogVerdi||`` til å ``||pins: lese analog verdi fra P0||``.

```blocks
let analogVerdi = 0
function voltmeter () {
    analogVerdi = pins.analogReadPin(AnalogPin.P0)
```

## Del 4.2

### Oppgave 4: Vise analog verdi på OLED-skjermen

Inni funksjonen ``||functions: voltmeter||`` skal vi vise den analoge verdien vi får fra P0. 

Start med å fjerne alt på skjermen med ``||kitronik_VIEW128x64: clear display||``. For å vise noe på skjermen, bruk blokken ``||kitronik_VIEW128x64: show ||``. Trykk på pluss(+) for å utvide blokken. Sett linjevalg til 1.

For å kunne vise både tekst og en variabel på samme linje, må vi hente ``||text: sett sammen ||`` fra biblioteket ``||text: Tekst ||``. Sett blokken inni ``||kitronik_VIEW128x64: show ||``.

I den første ruta til ``||text: sett sammen ||``, skriv "Analog: ". I den andre ruta, sette inn variabelen ``||variables: analogVerdi||``.

Til slutt skal vi oppdatere verdien som leses til hver 500ms: Bruk en ``||basic: pause||`` for å gjøre dette.

```blocks
let analogVerdi = 0
function voltmeter () {
    analogVerdi = pins.analogReadPin(AnalogPin.P0)
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.show("Analog: " + analogVerdi, 1)
    basic.pause(500)
```


## Del 4.3

### Oppgave 4: Bestemme verdi på Uref

Lage en ny variabel: ``||variables: Uref||``.

``||variables: Uref||`` skal settes inn i ``||basic: ved start||`` . Verdien vi skriver inn her er avhengig av om CanSat får strøm fra USB eller batteri.

Se tabell under for hva ``||variables: Uref||`` skal være :

|   **Spenning fra USB**   |   **Spenning fra batteri**   |
| :------------: | :------------: |
| 3.2 | 3.0 |

```blocks
let Uref = 0
Uref = 3.2
```


## Del 4.4

### Oppgave 4: Beregne spenning fra analog verdi

Lage en ny variabel: ``||variables: spenning||``.

Bruk denne formelen  for å sette ``||variables: spenning||`` til ( ``||variables: analogverdi||`` / 1024 ) * ``||variables: Uref||``

```blocks
function voltmeter () {
    analogVerdi = pins.analogReadPin(AnalogPin.P0)
    spenning = analogVerdi / 1024 * Uref
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.show("Analog: " + analogVerdi, 1)
    basic.pause(500)
}
```


## Del 4.5

### Oppgave 4: Vis spenningsverdi på OLED-skjerm

Vi skal gjøre det samme som vi gjorde for å vise den analoge verdien på OLED-skjermen:

Hente ``||text: sett sammen ||`` fra biblioteket ``||text: Tekst ||``. Sett blokken inni en ny ``||kitronik_VIEW128x64: show ||``. Utvid blokken og endre til å skrive på linje 2.

I den første ruta til ``||text: sett sammen ||``, skriv "Spenning: ". I den andre ruta, sette inn variabelen ``||variables: spenning||``. Utvid til en tredje rute hvor du skriver " V".

**Bonus:** Endre skriftstørrelse på OLED-skjerm til ``||kitronik_VIEW128x64: Normal ||``.

```blocks
let spenning = 0
let analogVerdi = 0
function voltmeter () {
    analogVerdi = pins.analogReadPin(AnalogPin.P0)
    spenning = analogVerdi / 1024 * Uref
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.show("Analog: " + analogVerdi, 1)
    kitronik_VIEW128x64.show("Spenning: " + spenning + " V", 2)
    basic.pause(500)
}
Uref = 3.2
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
```


## Del 4.6

### Oppgave 4: Runde av spenningsverdi

Når du testet koden din, så du kanskje at du fikk veldig mange desimaler. Vi kan ikke direkte skrive at vi kun ønsker 2 desimaler. Det vi må gjøre er å gange verdien vi har fått med 100, ``||math: avrund ||`` den nye verdien vår, før vi deler den på 100. Endre ``||math: avrund ||`` til ``||math: avkorte ||``.

Vi skal endre utregningen for variabelen ``||variables: spenning ||``. Formelen blir seende slik ut vi setter ``||variables: spenning ||`` til ``||math: avkorte||`` ( ``||variables: analogVerdi||`` ``||math: / ||`` 1024 ``||math: *||`` ``||variables: Uref ||`` ``||math: *||`` 100 ) ``||math: / ||`` 100

```blocks
let spenning = 0
let analogVerdi = 0
function voltmeter () {
    analogVerdi = pins.analogReadPin(AnalogPin.P0)
    spenning = Math.trunc(analogVerdi / 1024 * Uref * 100) / 100
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.show("Analog: " + analogVerdi, 1)
    kitronik_VIEW128x64.show("Spenning: " + spenning + " V", 2)
    basic.pause(500)
}
```


## Del 5 @unplugged

### Oppgave 5: Lage et termometer med TMP36

I denne oppgaven skal vi finne temperaturen fra en TMP36 temperatursensor. 

Koble opp kretsen på bildet under:

![Oppgave-5-TMP36-Oppkobling.png](https://i.postimg.cc/g2RTLYvL/Oppgave-5-TMP36-Oppkobling.png)


## Del 5.1

### Oppgave 5: Regne om spenningsverdi til temperatur

Vi skal lage en ny funksjon: ``||functions: termometer||``.

Inne ``||functions: termometer||``, lage en ny variabel: ``||variables: temperatur||``.

Bruk denne formelen for å sette ``||variables: temperatur||`` til ( ``||variables: spenning||`` ``||math: -||`` 0.5 ) ``||math: /||`` 0.01

```blocks
function termometer () {
    temperatur = (spenning - 0.5) / 0.01
}
```

## Del 5.2

### Oppgave 5: Vise termometer på OLED-skjerm

 Plasser en ``||text: sett sammen ||`` inni en ny ``||kitronik_VIEW128x64: show ||``. Utvid blokken og endre til å skrive på linje 3.

I den første ruta til ``||text: sett sammen ||``, skriv "Temperatur: ". I den andre ruta, sette inn variabelen ``||variables: temperatur||``. Utvid til en tredje rute hvor du skriver " C".

Kall opp funksjonen ``||functions: termometer||`` fra ``||basic: gjenta for alltid||``, og flytt ``||basic: pause 500 ms||`` fra ``||functions: voltmeter||`` til ``||basic: gjenta for alltid||``.

```blocks
function termometer () {
    temperatur = (spenning - 0.5) / 0.01
    kitronik_VIEW128x64.show("Temperatur: " + temperatur + " C", 3)
}
basic.forever(function () {
    voltmeter()
    termometer()
    basic.pause(500)
})
function voltmeter () {
    analogVerdi = pins.analogReadPin(AnalogPin.P0)
    spenning = Math.trunc(analogVerdi / 1024 * Uref * 100) / 100
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.show("Analog: " + analogVerdi, 1)
    kitronik_VIEW128x64.show("Spenning: " + spenning + " V", 2)
}
```

## Del 6 @unplugged

### Oppgave 6: Lag et barometer

Vi skal bruke en ``||BMP280: BMP280||`` sensor. Denne sensoren kan måle:

- Temperatur
- Trykk
- Luftfuktighet
- Duggpunkt

For å lage et barometer skal vi bruke ``||BMP280: trykk||``.



## Del 6.1

### Oppgave 6: Koble opp og lese av fra BMP280

For å få BMP280 til å snakke med CanSat, skal vi sette opp to blokken inn i ``||basic: ved start||`` fra biblioteket ``||BMP280: BMP280||``:

- ``||BMP280: Power On||``
- ``||BMP280: set address 0x76||``

Videre, lage en ny funksjon: ``||functions: BMP280_sensor||``.

Inne ``||functions: BMP280_sensor||``, sett opp en ny variabel: ``||variables: trykk||``. Sett ``||variables: trykk||`` til ``||BMP280: pressure||``.

```blocks
Uref = 3.2
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
BME280.PowerOn()
BME280.Address(BME280_I2C_ADDRESS.ADDR_0x76)
function BMP280_sensor () {
    trykk = BME280.pressure(BME280_P.Pa)
}
```

## Del 6.2

### Oppgave 6: Skrive lufttrykk på OLED-skjerm

Kopier koden vi har brukt før for å skrive til OLED-skjerm.

I den første ruta, skriv "Trykk: ". I den andre ruta, sette inn ``||variables: trykk||``. I den tredje, skriv " Pa". Skriv til linje 4.

```blocks
Uref = 3.2
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.setFontSize(kitronik_VIEW128x64.FontSelection.Normal)
BME280.PowerOn()
BME280.Address(BME280_I2C_ADDRESS.ADDR_0x76)
function barometer () {
    trykk = BME280.pressure(BME280_P.Pa)
    kitronik_VIEW128x64.show("Trykk: " + trykk + " Pa", 4)
}
```

## Del 7 @unplugged

### Oppgave 7: Formel for å regne om barometrisk lufttrykk til relativ høyde på CanSat

![Regne-ut-hoyde-i-forhold-til-trykk.png](https://i.postimg.cc/Lst1zpZS/Regne-ut-hoyde-i-forhold-til-trykk.png)

Hvor:
- **h:**  Beregnet høyde i meter
- **h1:** Referansehøyde i meter (starthøyde er 0 eller m.o.h.)
- **T:**  Temperatur i Kelvin (``||variables: temperatur||`` + 273,15)
- **T1:** Referansetemperatur ved referansehøyden h1
- **R:**  Den spesifikke gasskonstant 287,06 J/kg K
- **a:**  Temperaturgradient, foreslått verdi -0,0065 K/m
- **p:**  Målt trykk i Pa
- **p1:** Trykk i Pa ved referansehøyden h1
- **g0:** Tyngdeakselerasjonen 9,81 m/s^2


## Del 7.1

### Oppgave 7: Lage formelen for å beregne høyden til CanSat

Vi skal lage en ny funksjon: ``||functions: høyde||``. Plasser den eneste blokken fra blokken fra ``||barometric-height: Høydeberegning||``.

Plasser ``||variabel: trykk||`` inn i P. Sjekk også at alle verdiene i blokken er riktige!

```blocks
function høyde () {
    h = høydeberegning.barometricHeight(
    trykk,
    101325,
    288,
    0.0065,
    0,
    287,
    9.81
    )
}
```


## Del 7.2

### Oppgave 7: Vise høyden til CanSat på OLED-skjerm

Kopier koden vi har brukt før for å skrive til OLED-skjerm.

I den første ruta, skriv "høyde: ". I den andre ruta, sette inn ``||variables: h||``. I den tredje, skriv " m". Skriv til linje 5.


```blocks
function høyde () {
    h = høydeberegning.barometricHeight(
    101325,
    101325,
    288,
    0.0065,
    0,
    287,
    9.81
    )
    kitronik_VIEW128x64.show("Høyde: " + h + " m", 5)
}
```


```package
pxt-kitronik-128x64display=github:kitronikltd/pxt-kitronik-128x64display
BMP280=github:microbit-makecode-packages/BME280
barometric-height=github:oysa88/barometric-height
```