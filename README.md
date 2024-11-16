# PlayPal

Eine Webseite für Lernspiele.

## Beschreibung

Die Idee ist es den Einstieg in ein Lernspiel mit den dafür üblichen Mitteln zu gestalten.

Aufgebaut soll dies sein aus einer Seite mit der PIN-Eingabe, um einem durch einen Dozenten gestarteten
Lernspiel beizutreten. Diese Seite soll recht simple gehalten werden, da dies sowohl am Handy als auch an einem Computer
möglich sein soll. Bei Eingabe eines richtigen Spiele-PINs muss erst ein Name vergeben werden, um einen Anzeigenamen im
Lernspiel zu haben. Diese beiden Seiten sollen sich vom Aussehen und der Funktionalität nicht groß unterscheiden. Nach
Eingabe eines Anzeigenamens ist man nun dem Spiel erfolgreich beigetreten.

Auf der nun folgenden Page, soll es den Spielern möglich sein ihren Avatar anzupassen. Hier soll zu Beginn ein zufälliger
Avatar für den Spieler gesetzt sein. Wenn der Spieler nun auf seinen Avatar drückt, soll sich ein DropDown-Menü öffnen
und die verschiedenen Avatare in einer Grid-Form angeordnet anzeigen. Möchte man keine Änderungen an seinem Avatar
durchführen, kann man auch einfach direkt zum nächsten Schritt springen. Der Aufbau und die Funktionalität der
Avatarauswahl wird sich an gängigen Beispielen anderer Quiz-Tools orientiert. Daher sollen auch mögliche Designregeln
gebildet werden.

Auf der finalen Page wird eine Teamauwahl durchgeführt. Diese soll automatisch nach der ausgewählten Teamanzahl oder
manuell durch den Spieler ausgewählt werden. Die Spieleranzahl soll hier auf die ausgewählten Teams zugeteilt werden.
Die Teams mit den Nicknames ihrer Spieler sollen dann auf dem Beamer aus Dozentensicht angezeigt werden ähnlich wie bei
anderen Quiz-Tools.

## Aufbau

### Spielbeitritt via PIN (Justin)

Eingabe einer Spielepin und Spielername

### Avatarauswahl (Niklas)

Auswahl und Anpassung eines eigenen Avatars

### Teamauswahl bzw. -einteilung (Torben)

Möglichkeit als Spieler einem Team beizutreten oder durch das Spiel automatisch in ein Team zugeteilt werden

## Design - Scribbles

<div style="display: flex; justify-content: space-between;">
  <img src="design/entry.jpg" alt="entry example" width="250"/>
  <img src="design/avatar.jpg" alt="entry example" width="250"/>
  <img src="design/team.jpg" alt="entry example" width="250"/>
</div>

## UI-Pattern und Gesaltungsregeln

P = Pattern G = Gestaltungsregel

### 1. Durchgängige Farbnutzung

- (P) Ähnlich wie bei den Screenshots soll ein kräftiges, konsistentes Farbschema auf allen Bildschirmseiten, wie bei Kahoot das kräftige Lila verwendet werden:

<div style="display: flex; justify-content: space-between;">
  <img src="examples/kahoot/kahoot_enter_pin.png" alt="kahoot entry" width="500"/>
  <img src="examples/quizezz/quizezz_enter_pin.png" alt="quizezz entry" width="500"/>
</div>

- (G) Es soll ein unverwechselbares auffallendes Farbschema gewählt werden, welches den Wiedererkennungswert der Website zu verbessern.

- (G) Das Farbschema soll auf allen Bildschirmseiten eingehalten werden, um einen visuellen Zusammenhang zu vermitteln.

### 2. Hervorgehobene Eingabefelder und Beschriftungen

- (P) Eingabefelder wie für Spiele-Pins oder den Namen werden groß, zentriert und zentral positioniert ähnlich wie hier:

<img src="examples/kahoot/kahoot_enter_pin.png" alt="kahoot entry" width="500"/>

- (G) Wichtige Eingabefelder oder Anzeigen(z.B. Eingabe der Pin, Name, Avatar- und Teamauswahl) sollen in der Mitte des Bildschirms platziert werden. 

- (G) Außerdem soll immer genügend Platz um die Komponenten sein. So soll sofort klar werden, was von dem Nutzer erwartet wird. 

### 3. CTA Buttons deutlich hervorgehoben

- (P) Jeder Bildschirm hat neben der vom Nutzer erwarteten Eingabe/Aktion einen klar hervorgehobenen/erkennbaren Call-to-Action Button (bspw. lila).

- (G) Neben Eingabe/Aktionsfeldern soll ein einzelner klarer CTA-Button sein. Der Button sollte sich in Farbe und Größe von dem Rest der Komponente hervorheben, um leicht zu finden und gut zu sehen zu sein. Die Beschriftungen des Button sollen Bildlich gesprochen und klar verständlich sein.

### 4. Feedback bei Fehlern

- (P) Bei Quizizz wird bei einem ungültigen Code eine Fehlermeldung in Rot ("Ungültiger Spielcode") angezeigt:

<img src="examples/quizezz/quizezz_entered_pin.png" alt="quizezz entry" width="500"/>
  
- (G) Bei Auftritt eines Fehlers soll dem Nutzer sofortiges Feedback gegeben werden, z.B. bei der Eingabe eines ungültigen Spiele-Pins. Hierfür sollen kontrastreiche Farben verwendet werden (rot bei quizizz, weil Rot=fehler), um den Nutzer auf seinen Fehler aufmerksam zu machen. So kann der Nutzer seinen Fehler selbst erkennen und korrigieren.

### 5. Responsive Gestaltung

- (P) Sowohl bei kahoot als auch bei quizizz werden große Texte und Buttons verwendet, was es auf verschiedenen Geräten leichter erkennbar macht. Diese Elemente sind nicht statisch sondern passen sich der Bildschirmauflösung an:

<div style="display: flex; justify-content: space-between;">
  <img src="examples/kahoot/kahoot_avatar.png" alt="kahoot avatar desktop" height="300"/>
  <img src="examples/kahoot/kahoot_avatar_mobile.PNG" alt="kahoot avatar mobile" height="300"/>
</div>

- (G) Es soll darauf geachtet werden ein responsive design, welches große und gut klickbare Buttons, sowie lesbare Textgrößen für bessere Sichtbarkeit anbietet. Besonders wichtig bei Lernspielen, da Nutzer auf den verschiedensten Geräten am Spiel teilnehmen.

## Technische Architektur

<img src="" alt="architecture" width="400"/>