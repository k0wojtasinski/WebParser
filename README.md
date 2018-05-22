# WebParser
Aplikacja służąca do generowania raportów na temat stron WWW. Korzysta z API Mercury Postlight WebParser.
Jest napisana przy użyciu Angulara 6. Umożliwia wyświetlanie statystyki występowania tagów HTML.

## Uruchomienie aplikacji

0. By móc uruchomić aplikację potrzebujemy środowiska NodeJS (testowane na 8.11) oraz narzędzia @angular/cli
 ```bash
  sudo npm -g install @angular/cli
  ```
1. Następnie w katalogu głównym instalujemy zależności NPM:
```bash
  npm i
```
2. Będąc w katalogu głównym uruchamiamy polecenie ng serve (wymaga @angular/cli):
```bash
ng serve
```
3. Jeżeli proces kompilacji przebiegnie poprawnie aplikacja powinna być dostępna na http://localhost:4200.

## Co bym poprawił

Szybkość działania - można trochę przyspieszyć działanie aplikacji poprzez kompilację projektu w trybie AOT:
  ```bash
  ng build --aot --build-optimizer
  ```
  Takie podejście wymaga serwera do uruchomienia aplikacji, np. lite-server (npm i -g lite-server) w katalogu dist
***
Wygląd aplikacji - zastosowałem framework Bootstrap, dzięki któremu mógłbym zaprojektować bardziej rozbudowany interfejs
***
Algorytm generujący statystki tagów HTML - z pewnością mógłbym zaprojektować bardziej efektywny algorytm przeszukujący tagi HTML i generujący statystyki. Być może wykorzystałbym w tym celu inne struktury danych (Map) i lepszy algorytm zliczający wszystkie wystąpienia danego tagu HTML
