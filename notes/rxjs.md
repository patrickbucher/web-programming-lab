# RxJS

- Paradigma aus reaktiver Programmierung
    - arbeiten mit asynchronen Datenströmen
- u.a. von Angular eingesetzt
- grundlegende Konzepte
    - Observable
        - Menge von Daten noch unbekannter menge zu noch unbekanntem Zeitpunkt
        - zustandsbehaftet
            - "cold" solange nicht abonniert
            - "hot" sobald abonniert
    - Observer
        - abonniert Observable via subscribe
        - kann filtern, gruppieren oder transformieren
    - Observable vs. Proimise
        - TODO: siehe Folie
