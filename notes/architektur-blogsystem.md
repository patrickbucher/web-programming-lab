# Architektur Blogsystem

- geschützter Bereich (Verwaltungsbereich)
- schnell geladen
- von Google gefunden (SEO)
- sichere Verwaltung
- einfache Newsletter-Anmeldung
- responsive: auf verschiedenen Bildschirmgrössen lesbar

## Nicht-funktionale Anforderungen

- Der Blog hat zwei Bereiche: Einen öffentlichen Bereich zum Lesen und einen
  geschützten Bereich zur Verwaltung der Blogeinträge.
- Zum Verfassen und Anpassen eines Blogeintrags muss der Benutzer angemeldet
  sein.

## Qualitätsszenarien

- Performance («schnell»): Ein bestimmter Blogeintrag soll mit einer
  3G-Verbindung innert einer Sekunde auf dem Bildschirm erscheinen.
- Usability («einfach»): Das Formular zur Newsletter-Anmeldung soll auf jeder
  Seite erscheinen und nach der Eingabe der E-Mail-Adresse mit einem Klick
  abgeschickt werden können.
- Die Leseansicht des Blogs soll ab einer Bildschirmauflösung von 800x600 Pixel
  responsive lesbar sein.
- Die Kommentare sind auf der mobilen Ansicht standardmässig zugeklappt und auf
  der Vollansicht aufgeklappt.

## Architektur

- zwei Frontends: Lese- und Verwaltungsbereich
- ein Backend mit einer öffentlichen API zum Lesen und einer geschützten API
  für die Verwaltung
- Die Blogeinträge und Kommentar werden in der gleichen Datenbank gespeichert.
- Für die Benutzerverwaltung wird OAuth 2 verwendet, wobei verschiedene
  Identity Provider verwendet werden können (Google, GitHub, Facebook
- JAM-Ansatz:
    - Blogeinträge in Markdown schreiben und auf GitHub pushen.
    - Berechtigung auf Repo-Ebene.
    - Newsletter z.B. via Firebase.
