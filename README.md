# PlayPal
Eine Webseite für Lernspiele.
### Design
Link: https://www.figma.com/design/BVmxw33m6bceDtoW0S0Qr1/PlayPal?node-id=12-9&t=04hiWuD4Aqtm6UCL-1
### UI-Pattern und Gesaltungsregeln
P = Pattern G = Gestaltungsregel
-Durchgängige Farbnutzung
1P. Ähnlich wie bei den Screenshots (kahoot_enter_pin.png; kahoot_enter_name.png; quizezz_enter_pin.png; quizezz_entered_pin.png)
soll ein kräftiges, konsistentes Farbschema auf allen Bildschirmseiten, wie bei Kahoot das kräftige Lila verwendet werden.
1G. Es soll ein unverwechselbares auffallendes Farbschema gewählt werden, welches den Wiedererkennungswert der Website zu verbessern.
Das Farbschema soll auf allen Bildschirmseiten eingehalten werden, um einen visuellen Zusammenhang zu vermitteln.
-Hervorgehobene Eingabefelder und Beschriftungen
2P. Eingabefelder wie für Spiele-Pins oder den Namen werden groß, zentriert und zentral positioniert ähnlich wie in (kahoot_enter_pin.png).
2G. Wichtige Eingabefelder oder Anzeigen(z.B. Eingabe Pin/Name/Avatarauswahl) sollen in der Mitte des Bildschirms platziert werden. 
Außerdem soll immer genügend Platz um die Komponenten sein. So soll sofort klar werden, was von dem Nutzer erwartet wird. 
-CTA Buttons deutlich hervorgehoben
3P. Jeder Bildschirm hat neben der vom Nutzer erwarteten Eingabe/Aktion einen klar hervorgehobenen/erkennbaren Call-to-Action Button. 
(kahoot_enter_pin.png klarer pinker CTA-Button)
3G. Neben Eingabe/Aktionsfeldern soll ein einzelner klarer CTA-Button sein. Der Button sollte sich in Farbe und Größe von dem Rest der Komponente
hervorheben, um leicht zu finden und gut zu sehen zu sein. Die Beschriftungen des Button sollen Bildlich gesprochen und klar verständlich sein.
-Feedback bei Fehlern
4P. Bei Quizizz wird bei einem ungültigen Code eine Fehlermeldung in Rot ("Ungültiger Spielcode") angezeigt (quizezz.entered_pin.png)
4G. Bei Auftritt eines Fehlers soll dem Nutzer sofortiges Feedback gegeben werden, z.B. bei der Eingabe eines ungültigen Spiele-Pins.
Hierfür sollen kontrastreiche Farben verwendet werden (rot bei quizizz, weil Rot=fehler), um den Nutzer auf seinen Fehler aufmerksam zu machen. 
So kann der Nutzer seinen Fehler selbst erkennen und korrigieren.
-Responsive Gestaltung
5P. Sowohl bei kahoot als auch bei quizizz werden große Texte und Buttons verwendet, was es auf verschiedenen Geräten leichter erkennbar macht. 
Diese Elemente sind nicht statisch sondern passen sich der Bildschirmauflösung an (siehe kahoot_avatar.png und kahoot_avatar_mobile.png).
5G. Es soll darauf geachtet werden ein responsive design, welches große und gut klickbare Buttons, sowie lesbare Textgrößen für bessere
Sichtbarkeit anbietet. Besonders wichtig bei Lernspielen, da Nutzer auf den verschiedensten Geräten am Spiel teilnehmen. 
## Aufbau 
### Spielbeitritt via PIN
Eingabe einer Spielepin und Spielername
### Avatarauswahl
Auswahl und Anpassung eines eigenen Avatars
### Teamauswahl bzw. -einteilung
Möglichkeit als Spieler einem Team beizutreten oder durch das Spiel automatisch in ein Team zugeteilt werden

## Kurze Problembeschreibung
Die Idee ist es den Einstieg in ein Lernspiel mit den dafür üblichen Mitteln zu gestalten. 
Aufgebaut soll dies sein aus einer Seite mit der PIN-Eingabe, um einem durch einen Dozenten gestarteten 
Lernspiel beizutreteten. Diese Seite soll recht simple gehalten werden, da dies sowohl am Handy als auch
an einem Computer möglich sein soll. Bei Eingabe eines richtigen Spiele-PINs muss erst ein Name vergeben
werden, um einen Anzeigenamen im Lernspiel zu haben. Diese beiden Seiten sollen sich vom Aussehen und der
Funktionalität nicht groß unterscheiden. Nach Eingabe eines Anzeigenamens ist man nun dem Spiel erfolgreich
beigetreten. Auf der nun folgenden Page, soll es den Spielern möglich sein ihren Avatar anzupassen.
Hier soll zu Beginn ein zufälliger Avatar für den Spieler gesetzt sein. Wenn der Spieler nun auf seinen
Avatar drückt, soll sich ein DropDown-Menü öffnen und die verschiedenen Avatare in einer Grid-Form 
angeordnet anzeigen. Möchte man keine Änderungen an seinem Avatar durchführen, kann man auch einfach direkt 
zum nächsten Schritt springen. Der Aufbau und die Funktionalität der Avatarauswahl wird sich an gängigen 
Beispielen anderer Quiz-Tools orientiert. Daher sollen auch mögliche Designregeln gebildet werden. Auf der 
finalen Page wird nun eine Teamauwahl durchgeführt. Diese soll automatisch nach der ausgewählten Teamanzahl
oder manuell durch den Spieler ausgewählt werden. Die Spieleranzahl soll hier auf die ausgewählten Teams
zugeteilt werden. Die Teams mit den Nicknames ihrer Spieler sollen dann auf dem Beamer aus Dozentensicht
angezeigt werden ähnlich wie bei anderen Quiz-Tools. 
