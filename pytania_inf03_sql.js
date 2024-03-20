export const questions = [
    {
        "a": "odpa",
        "q": {
            "id": 134,
            "header": "Pytanie nr 134 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT numer, wartosc FROM faktury WHERE data=CURRENT_DATE();",
            "odpB": "<strong>B. </strong>SELECT * FROM faktury WHERE data=CURRENT_DATE();",
            "odpC": "<strong>C. </strong>SELECT numer,wartość FROM faktury;",
            "odpD": "<strong>D. </strong>SELECT * FROM faktury;",
            "tresc": "Baza danych zawiera tabelę faktury o polach: numer, data, id_klienta, wartość, status. Każdego dnia generowany jest raport faktur z bieżącego dnia. Wyświetlane są jedynie numery i wartości faktur. Która z kwerend SQL służy do stworzenia tego raportu?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 2,
            "header": "Pytanie nr 2 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ALTER, CREATE, DROP",
            "odpB": "<strong>B. </strong>DELETE, INSERT, UPDATE",
            "odpC": "<strong>C. </strong>SELECT, SELECT INTO",
            "odpD": "<strong>D. </strong>DENY, GRANT, REVOKE",
            "tresc": "Jakie sa nazwy typowych poleceń języka zapytań SQL, związane z wykonywaniem operacji na danych SQL DML (np.: umieszczanie danych w bazie, kasowanie dokonywanie zmian w danych)?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 246,
            "header": "Pytanie nr 246 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ALTER TABLE pracownicy DELETE wynagrodzenie;",
            "odpB": "<strong>B. </strong>DROP TABLE pracownicy DELETE COLUMN wynagrodzenie;",
            "odpC": "<strong>C. </strong>ALTER TABLE pracownicy DROP COLUMN wynagrodzenie;",
            "odpD": "<strong>D. </strong>ALTER TABLE pracownicy DELETE COLUMN wynagrodzenie;",
            "tresc": "Dana jest tabela pracownicy o polach id, nazwisko, imie, wynagrodzenie. Kolumnę wynagrodzenie można usunąć za pomocą instrukcji"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 101,
            "header": "Pytanie nr 101 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/347.jpg",
            "odpA": "<strong>A. </strong>Dodać pole klucza obcego do tabeli Zamowienia i połączyć je z ID tabeli Klienci",
            "odpB": "<strong>B. </strong>Zdefiniować trzecią tabelę z dwoma kluczami obcymi. Jeden klucz połączyć z ID tabeli Klienci, drugi klucz połączyć z ID tabeli Zamowienia",
            "odpC": "<strong>C. </strong>Połączyć relacją pola ID z obu tabel",
            "odpD": "<strong>D. </strong>Dodać pole klucza obcego do tabeli Klienci i połączyć je z ID tabeli Zamowienia",
            "tresc": "Na rysunku przedstawiono dwie tabele. Aby połączyć je relacją jeden do wielu, jeden po stronie Klienci wiele po stronie Zamowienia, należy"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 51,
            "header": "Pytanie nr 51 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>służy do szyfrowania zawartości tabeli",
            "odpB": "<strong>B. </strong>może przyjmować wartość pustą (NULL)",
            "odpC": "<strong>C. </strong>musi być unikalna",
            "odpD": "<strong>D. </strong>jest zawsze typu numerycznego",
            "tresc": "Wartość pola tabeli pełniącego rolę klucza podstawowego"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 263,
            "header": "Pytanie nr 263 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Wielodostępność danych.",
            "odpB": "<strong>B. </strong>Pakiety do tworzenia statystyk.",
            "odpC": "<strong>C. </strong>Przystawka do wizualizacji diagramów encji.",
            "odpD": "<strong>D. </strong>System zarządzania wersjami bazy.",
            "tresc": "Które z mechanizmów są niezbędne dla Systemu Zarządzania Bazą Danych?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 104,
            "header": "Pytanie nr 104 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE podzespoly SET URL='toshiba.pl';",
            "odpB": "<strong>B. </strong>UPDATE producent='TOSHIBA' SET URL='toshiba.pl';",
            "odpC": "<strong>C. </strong>UPDATE podzespoly SET URL='toshiba.pl' WHERE producent='TOSHIBA';",
            "odpD": "<strong>D. </strong>UPDATE podzespoly.producent='TOSHIBA' SET URL='toshiba.pl';",
            "tresc": "W tabeli podzespoly należy zmienić wartość pola URL na 'toshiba.pl' dla wszystkich rekordów, gdzie pole producent to TOSHIBA. W języku SQL modyfikacja będzie miała postać"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 102,
            "header": "Pytanie nr 102 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Zapytanie INSERT INTO",
            "odpB": "<strong>B. </strong>Inny raport",
            "odpC": "<strong>C. </strong>Makropolecenie",
            "odpD": "<strong>D. </strong>Tabela",
            "tresc": "Źródłem rekordów dla raportu może być"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 66,
            "header": "Pytanie nr 66 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>relacji",
            "odpB": "<strong>B. </strong>numeryczne",
            "odpC": "<strong>C. </strong>klucza podstawowego",
            "odpD": "<strong>D. </strong>klucza obcego",
            "tresc": "Jednoznacznym identyfikatorem rekordu w bazie danych jest pole"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 291,
            "header": "Pytanie nr 291 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>PRIMARY KEY",
            "odpB": "<strong>B. </strong>AUTO_INCREMENT",
            "odpC": "<strong>C. </strong>NOT NULL",
            "odpD": "<strong>D. </strong>NULL",
            "tresc": "Tworząc tabelę, do pola które będzie przyjmowało kolejne liczby całkowite nadawane automatycznie, należy dodać własność"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 24,
            "header": "Pytanie nr 24 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>odbiera wszystkie uprawnienia <i>pracownikowi</i> do tabeli <i>klienci</i>",
            "odpB": "<strong>B. </strong>skopiuje uprawnienia z grupy <i>klienci</i> na użytkownika <i>pracownik</i>",
            "odpC": "<strong>C. </strong>nadaje uprawnienie grupie <i>klienci</i> do tabeli <i>pracownik</i>",
            "odpD": "<strong>D. </strong>nadaje wszystkie uprawnienia do tabeli <i>klienci</i> użytkownikowi <i>pracownik</i>",
            "tresc": "Polecenie w języku SQL GRANT ALL PRIVILEGES ON klienci TO pracownik"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 159,
            "header": "Pytanie nr 159 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/582.jpg",
            "odpA": "<strong>A. </strong>Fafik, Brutus, Dika, Fuks",
            "odpB": "<strong>B. </strong>Figaro, Dika, Fuks",
            "odpC": "<strong>C. </strong>Anna Kowalska, Jan Nowak",
            "odpD": "<strong>D. </strong>Dika, Fuks",
            "tresc": "Które dane z 8 rekordów wpisanych do tabeli zwierzeta zostaną wyświetlone w wyniku podanego zapytania SQL?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 132,
            "header": "Pytanie nr 132 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>transakcji",
            "odpB": "<strong>B. </strong>relacji 1..1",
            "odpC": "<strong>C. </strong>klucza podstawowego",
            "odpD": "<strong>D. </strong>relacji 1..n",
            "tresc": "Zdefiniowanie klucza obcego jest niezbędne do utworzenia"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 43,
            "header": "Pytanie nr 43 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT imie,nazwisko,klasa from uczniowie group by rok_urodzenia",
            "odpB": "<strong>B. </strong>SELECT imie,nazwisko,klasa from uczniowie order by nazwisko",
            "odpC": "<strong>C. </strong>SELECT imie,nazwisko,klasa from uczniowie order by rok_urodzenia",
            "odpD": "<strong>D. </strong>SELECT imie,nazwisko,klasa from uczniowie where rok_urodzenia = 1994",
            "tresc": "W bazie danych, w celu uporządkowania listy uczniów według roku urodzenia, należy użyć polecenia"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 53,
            "header": "Pytanie nr 53 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>raport",
            "odpB": "<strong>B. </strong>formularz",
            "odpC": "<strong>C. </strong>kwerenda",
            "odpD": "<strong>D. </strong>makropolecenie",
            "tresc": "Narzędziem służącym do grupowania i prezentowania informacji z wielu rekordów w celu ich drukowania lub rozpowszechniania jest"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 261,
            "header": "Pytanie nr 261 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/8595f8e9fffa1d45.png",
            "odpA": "<strong>A. </strong>wybierania, wstawiania oraz aktualizacji danych tabeli o nazwie klienci.",
            "odpB": "<strong>B. </strong>wybierania, dodawania pól oraz zmiany struktury tabeli o nazwie klienci.",
            "odpC": "<strong>C. </strong>wybierania, wstawiania oraz aktualizacji danych wszystkich tabel w bazie o nazwie klienci.",
            "odpD": "<strong>D. </strong>wybierania, dodawania pól oraz zmiany struktury wszystkich tabel w bazie o nazwie klienci.",
            "tresc": "Zakładając, że użytkownik wcześniej nie miał żadnych praw, polecenie SQL nada użytkownikowi anna prawa jedynie do"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 34,
            "header": "Pytanie nr 34 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wygodniejszego wprowadzania, edytowania i usuwania danych",
            "odpB": "<strong>B. </strong>wprowadzenia powiązań w relacyjnych bazach danych ",
            "odpC": "<strong>C. </strong>raportowania danych",
            "odpD": "<strong>D. </strong>wyszukiwania wierszy spełniających dane kryteria",
            "tresc": "Formularze do obsługi baz danych tworzy się w celu"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 276,
            "header": "Pytanie nr 276 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>połączyć bezpośrednio klucze podstawowe obu tabel.",
            "odpB": "<strong>B. </strong>połączyć bezpośrednio klucze obce obu tabel.",
            "odpC": "<strong>C. </strong>posortować przynajmniej jedną z tabel.",
            "odpD": "<strong>D. </strong>stworzyć tabelę pomocniczą.",
            "tresc": "Aby prawidłowo utworzyć relację typu m…n nienarażoną na redundancję danych, należy"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 149,
            "header": "Pytanie nr 149 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Usuwa rekordy tabel według podanych kryteriów",
            "odpB": "<strong>B. </strong>Modyfikuje istniejące dane w tabeli",
            "odpC": "<strong>C. </strong>Dołącza do wybranej tabeli rekordy z innej tabeli",
            "odpD": "<strong>D. </strong>Prezentuje zliczone wartości z pola i przyporządkowuje je w wiersze i kolumny",
            "tresc": "Jaką funkcję pełni kwerenda krzyżowa w bazie MS Access?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 245,
            "header": "Pytanie nr 245 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/c1a69238ff8db50d.png",
            "odpA": "<strong>A. </strong>krzyżowej.",
            "odpB": "<strong>B. </strong>dołączającej.",
            "odpC": "<strong>C. </strong>usuwającej.",
            "odpD": "<strong>D. </strong>aktualizującej.",
            "tresc": "Przedstawiona instrukcja zapisana w języku SQL jest przykładem kwerendy"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 186,
            "header": "Pytanie nr 186 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT imie, nazwisko FROM mieszkancy WHERE wiek &gt; 18 ORDER BY wiek;",
            "odpB": "<strong>B. </strong>SELECT nazwisko FROM firma WHERE pensja &gt; 2000 LIMIT 10;",
            "odpC": "<strong>C. </strong>SELECT DISTINCT produkt, cena FROM artykuly;",
            "odpD": "<strong>D. </strong>SELECT AVG(ocena) FROM uczniowie WHERE klasa = 2;",
            "tresc": "Wskaż zapytanie, w którym dane zostały posortowane."
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 62,
            "header": "Pytanie nr 62 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>zostaną posortowane",
            "odpB": "<strong>B. </strong>będą spełniały określony warunek",
            "odpC": "<strong>C. </strong>nie będą zawierały powtórzeń",
            "odpD": "<strong>D. </strong>będą pogrupowane według określonego pola",
            "tresc": "W języku SQL klauzula DISTINCT instrukcji SELECT sprawi, że zwrócone dane"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 223,
            "header": "Pytanie nr 223 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT * FROM pracownicy OR wiek &gt; 25;",
            "odpB": "<strong>B. </strong>SELECT * FROM pracownicy WHERE wiek &gt; 25;",
            "odpC": "<strong>C. </strong>SELECT * FROM pracownicy AND wiek &gt; 25;",
            "odpD": "<strong>D. </strong>SELECT * FROM wiek WHERE pracownicy &gt; 25;",
            "tresc": "Aby wyświetlić rekordy z tabeli pracownicy tylko dla pracowników, którzy skończyli 26 lat należy użyć zapytania"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 284,
            "header": "Pytanie nr 284 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>WHERE ulica = 'Mickiewicza' AND numer &gt; 70 AND numer &lt; 81 OR czynsz &lt; 1000",
            "odpB": "<strong>B. </strong>WHERE ulica = 'Mickiewicza' OR numer IN (71, 72, 80) OR czynsz &lt; 1000",
            "odpC": "<strong>C. </strong>WHERE ulica = 'Mickiewicza' AND numer IN (71, 72, 80) OR czynsz &lt; 1000",
            "odpD": "<strong>D. </strong>WHERE ulica = 'Mickiewicza' AND numer IN (71, 72, 80) AND czynsz &lt; 1000",
            "tresc": "W tabeli mieszkancy z polami id, imie, nazwisko, ulica, numer, czynsz (wartość całkowita) należy wybrać dane osób mieszkających na ulicy Mickiewicza pod numerami 71, 72, 80, których czynsz jest niższy niż 1000 zł. Klauzula WHERE do zapytania będzie miała postać"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 175,
            "header": "Pytanie nr 175 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/621.jpg",
            "odpA": "<strong>A. </strong>średnia ocen wszystkich uczniów",
            "odpB": "<strong>B. </strong>liczba uczniów, których średnia ocen wynosi 5",
            "odpC": "<strong>C. </strong>liczba wszystkich uczniów",
            "odpD": "<strong>D. </strong>suma ocen uczniów, których średnia ocen wynosi 5",
            "tresc": "Wynikiem uruchomienia zapytania SQL jest"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 60,
            "header": "Pytanie nr 60 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>mysql_fetch_lengths()",
            "odpB": "<strong>B. </strong>mysql_list_fields()",
            "odpC": "<strong>C. </strong>mysql_field_len()",
            "odpD": "<strong>D. </strong>mysql_fetch_row()",
            "tresc": "W języku PHP pobrano z bazy danych wyniki działania kwerendy za pomocą polecenia mysql_query(). Aby otrzymać ze zwróconej kwerendy wierszy danych, należy zastosować polecenie:"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 270,
            "header": "Pytanie nr 270 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DROP",
            "odpB": "<strong>B. </strong>ALTER",
            "odpC": "<strong>C. </strong>UPDATE",
            "odpD": "<strong>D. </strong>TRUNCATE",
            "tresc": "W języku SQL usunięcie wszystkich danych z tabeli bez usuwania samej tabeli możliwe jest za pomocą polecenia"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 228,
            "header": "Pytanie nr 228 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/7804aae8fb4575b8.png",
            "odpA": "<strong>A. </strong>Encji.",
            "odpB": "<strong>B. </strong>Referencyjną.",
            "odpC": "<strong>C. </strong>Semantyczną.",
            "odpD": "<strong>D. </strong>Statyczną.",
            "tresc": "Którą integralność opisuje cytowana definicja?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 235,
            "header": "Pytanie nr 235 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE ",
            "odpB": "<strong>B. </strong>INSERT INTO",
            "odpC": "<strong>C. </strong>ALTER TABLE",
            "odpD": "<strong>D. </strong>GRANT",
            "tresc": "Aby zmodyfikować strukturę tabeli w bazie MySQL należy wykonać polecenie"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 239,
            "header": "Pytanie nr 239 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>weryfikacją integralności referencyjnej.",
            "odpB": "<strong>B. </strong>redundancją.",
            "odpC": "<strong>C. </strong>weryfikacją spójności danych.",
            "odpD": "<strong>D. </strong>normalizacją.",
            "tresc": "Proces organizowania danych w bazie obejmujący tworzenie tabel, ustanawianie relacji między nimi i polegający na wyeliminowaniu z bazy nadmiarowych danych oraz niespójnych zależności nazywa się"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 153,
            "header": "Pytanie nr 153 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>relacyjnym",
            "odpB": "<strong>B. </strong>sieciowym",
            "odpC": "<strong>C. </strong>jednorodnym",
            "odpD": "<strong>D. </strong>hierarchicznym",
            "tresc": "Struktura prostych baz danych, w których wszystkie dane są przechowywane w jednej tabeli, nazywana jest modelem"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 113,
            "header": "Pytanie nr 113 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>sterującym",
            "odpB": "<strong>B. </strong>pierwotnym",
            "odpC": "<strong>C. </strong>zagnieżdżonym",
            "odpD": "<strong>D. </strong>głównym",
            "tresc": "Formularz nadrzędny wykorzystywany do nawigacji w bazie danych pomiędzy dostępnymi w systemie formularzami, kwerendami jest nazywany formularzem"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 249,
            "header": "Pytanie nr 249 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>1..1",
            "odpB": "<strong>B. </strong>n..1",
            "odpC": "<strong>C. </strong>1..n",
            "odpD": "<strong>D. </strong>n..m",
            "tresc": "Który z typów relacji wymaga utworzenia tabeli pośredniej łączącej klucze główne obu tabel?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 5,
            "header": "Pytanie nr 5 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Wyzwalacz",
            "odpB": "<strong>B. </strong>Reguła",
            "odpC": "<strong>C. </strong>Funkcja zdefiniowana",
            "odpD": "<strong>D. </strong>Procedura składowa",
            "tresc": "Który z obiektów relacyjnej bazy danych, będący kodem języka SQL, może być wywoływany w zapytaniach modyfikujących kolumny danych widoczne jako tabela, bez względu na to czy jest tworzony programowo, czy dynamicznie?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 45,
            "header": "Pytanie nr 45 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>tworzenie tabeli",
            "odpB": "<strong>B. </strong>usunięcie danych z tabeli",
            "odpC": "<strong>C. </strong>modyfikowanie danych w tabeli",
            "odpD": "<strong>D. </strong>odczyt danych z tabeli",
            "tresc": "W języku SQL przywilej SELECT polecenia GRANT pozwala użytkownikowi baz danych na"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 114,
            "header": "Pytanie nr 114 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT * FROM komputery WHERE procesor = \"Intel\" AND pamiec &lt; 8;",
            "odpB": "<strong>B. </strong>SELECT * FROM komputery WHERE procesor = \"Intel\" OR pamiec &lt; 8;",
            "odpC": "<strong>C. </strong>SELECT * FROM komputery WHERE procesor = \"Intel\" OR pamiec &gt;= 8;",
            "odpD": "<strong>D. </strong>SELECT * FROM komputery WHERE procesor = \"Intel\" AND pamiec &gt;= 8;",
            "tresc": "W bazie danych sklepu komputerowego istnieje tabela komputery. Aby zdefiniować raport wyświetlający dla dowolnego zbioru danych tabeli, jedynie pola tabeli dla komputerów, w których jest nie mniej niż 8 GB pamięci, a procesor to Intel, można posłużyć sie kwerendą"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 198,
            "header": "Pytanie nr 198 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwisko FROM klient WHERE nazwisko='Z_?';",
            "odpB": "<strong>B. </strong>SELECT nazwisko FROM klient WHERE nazwisko='Z?';",
            "odpC": "<strong>C. </strong>SELECT nazwisko FROM klient WHERE nazwisko LIKE 'Z_%';",
            "odpD": "<strong>D. </strong>SELECT nazwisko FROM klient WHERE nazwisko LIKE 'Z%';",
            "tresc": "Które z zapytań SQL, wybiera nazwiska z tabeli klient, które są minimum jednoliterowe i rozpoczynają się od litery Z?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 144,
            "header": "Pytanie nr 144 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT AVG(zarobek) FROM pracownicy GROUP BY plec;",
            "odpB": "<strong>B. </strong>SELECT AVG(zarobek) FROM pracownicy GROUP BY plec HAVING plec='k' AND plec='m';",
            "odpC": "<strong>C. </strong>SELECT AVG(zarobek) FROM pracownicy WHERE plec='k' AND plec='m';",
            "odpD": "<strong>D. </strong>SELECT AVG(zarobek) FROM pracownicy AS sredni_zarobek;",
            "tresc": "Które zapytanie SQL dla tabeli pracownicy utworzonej według schematu: id, imie, nazwisko, plec, zarobek, obliczy osobno średni zarobek kobiet i średni zarobek mężczyzn?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 117,
            "header": "Pytanie nr 117 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/404.jpg",
            "odpA": "<strong>A. </strong>miasta i kodu pocztowego z pierwszego zwróconego rekordu",
            "odpB": "<strong>B. </strong>ulicy i miasta z pierwszego zwróconego rekordu",
            "odpC": "<strong>C. </strong>miasta i kodu pocztowego ze wszystkich zwróconych rekordów",
            "odpD": "<strong>D. </strong>ulicy i miasta ze wszystkich zwróconych rekordów",
            "tresc": "W języku PHP zapisano fragment kodu działającego na bazie MySQL. Jego zadaniem jest wypisanie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 232,
            "header": "Pytanie nr 232 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>LIMIT",
            "odpB": "<strong>B. </strong>UNIQUE",
            "odpC": "<strong>C. </strong>DISTINCT",
            "odpD": "<strong>D. </strong>ORDER BY",
            "tresc": "Aby w wyniku zapytania wyeliminować powtarzające się wiersze, należy użyć klauzuli"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 269,
            "header": "Pytanie nr 269 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>kwerenda UPDATE.",
            "odpB": "<strong>B. </strong>makro.",
            "odpC": "<strong>C. </strong>formularz.",
            "odpD": "<strong>D. </strong>raport.",
            "tresc": "Typowym narzędziem SZBD służącym do generowania zestawień danych w celu ich wydrukowania jest"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 56,
            "header": "Pytanie nr 56 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>modyfikować role i konta użytkowników",
            "odpB": "<strong>B. </strong>wykonywać operacje na bazie, takie jak wstawanie lub modyfikowanie danych",
            "odpC": "<strong>C. </strong>wykonywać instrukcje, takie jak tworzenie kopii zapasowej",
            "odpD": "<strong>D. </strong>dziedziczyć uprawnienia",
            "tresc": "Uprawnienia obiektowe, nadawane użytkownikom serwera bazy danych, mogą pozwalać lub zabraniać"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 161,
            "header": "Pytanie nr 161 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/584.jpg",
            "odpA": "<strong>A. </strong>SELECT nazwisko, Miasto FROM Osoby, Adresy;",
            "odpB": "<strong>B. </strong>SELECT nazwisko, Miasto FROM Osoby.Adresy_id=Adresy.id FROM Osoby, Adresy;",
            "odpC": "<strong>C. </strong>SELECT nazwisko, Miasto FROM Osoby, Adresy WHERE Osoby.id=Adresy.id;",
            "odpD": "<strong>D. </strong>SELECT nazwisko, Miasto FROM Osoby JOIN Adresy ON Osoby.Adresy_id=Adresy.id;",
            "tresc": "Tabele Osoby i Adresy są połączone relacją jeden do wielu. Jakie zapytanie SQL należy zapisać, aby korzystając z tej relacji, prawidłowo wyświetlić nazwiska oraz przyporządkowane im miasta?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 238,
            "header": "Pytanie nr 238 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>opisu struktur danych w tabelach.",
            "odpB": "<strong>B. </strong>pełnej listy użytkowników serwera.",
            "odpC": "<strong>C. </strong>aktualnej wersji kopii zapasowej.",
            "odpD": "<strong>D. </strong>najnowszej wersji instalacyjnej serwera.",
            "tresc": "Po uszkodzeniu serwera bazy danych, aby możliwie najsprawniej przywrócić działanie kompletnej bazy należy użyć"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 172,
            "header": "Pytanie nr 172 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE",
            "odpB": "<strong>B. </strong>SELECT",
            "odpC": "<strong>C. </strong>JOIN",
            "odpD": "<strong>D. </strong>CREATE",
            "tresc": "W języku SQL aby zmodyfikować dane w tabeli, należy posłużyć się poleceniem"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 33,
            "header": "Pytanie nr 33 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Określenie zbioru danych, Selekcja, Określenie kluczy podstawowych tabel, Określenie relacji",
            "odpB": "<strong>B. </strong>Określenie relacji, Określenie kluczy podstawowych tabel, Selekcja, Określenie zbioru danych",
            "odpC": "<strong>C. </strong>Selekcja, Określenie relacji, Określenie kluczy podstawowych tabel, Określenie zbioru danych",
            "odpD": "<strong>D. </strong>Określenie kluczy podstawowych tabel, Określenie zbioru danych, Selekcja, Określenie relacji",
            "tresc": "Wskaż poprawną kolejność etapów projektowania relacyjnej bazy danych"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 91,
            "header": "Pytanie nr 91 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE pracownicy SET pensja = 100;",
            "odpB": "<strong>B. </strong>UPDATE pracownicy SET pensja = pensja + 100;",
            "odpC": "<strong>C. </strong>UPDATE pensja SET +100;",
            "odpD": "<strong>D. </strong>UPDATE pensja SET 100;",
            "tresc": "Istnieje tabela pracownicy z polami: id, imie, nazwisko, pensja. W nowym roku postawiono podnieść pensję wszystkim pracownikom o 100 zł. Aktualizacja ta w bazie danych będzie miała postać"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 131,
            "header": "Pytanie nr 131 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>AND",
            "odpB": "<strong>B. </strong>OUTER LINK",
            "odpC": "<strong>C. </strong>JOIN",
            "odpD": "<strong>D. </strong>INNER LINK",
            "tresc": "Baza danych ma dwie tabele połączone relacją 1..n. Którą klauzulą SQL należy połączyć tabele, aby wybrać korespondujące ze sobą wartości z pól obu tabel?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 21,
            "header": "Pytanie nr 21 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>nadanie uprawnień z użyciem zdefiniowanego schematu",
            "odpB": "<strong>B. </strong>odbieranie uprawnień użytkownikowi",
            "odpC": "<strong>C. </strong>usuwanie użytkownika z bazy",
            "odpD": "<strong>D. </strong>nadawanie praw do tabeli",
            "tresc": "Polecenie REVOKE SELECT ON nazwa1 FROM nazwa2 w języku SQL umożliwia"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 118,
            "header": "Pytanie nr 118 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Rekordem tabeli nie może być 3 MAJA",
            "odpB": "<strong>B. </strong>Do tabeli nie można wprowadzać ulic zawierających w nazwie polskie znaki",
            "odpC": "<strong>C. </strong>IF NOT EXISTS stosuje się opcjonalnie, aby upewnić się, że brak w bazie danych takiej tabeli",
            "odpD": "<strong>D. </strong>Klauzula CHARACTER SET utf8 jest obowiązkowa",
            "tresc": "Wskaż PRAWDZIWE stwierdzenie dla polecenia: CREATE TABLE IF NOT EXISTS ADRES(ulica VARCHAR(70) CHARACTER SET utf8);"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 4,
            "header": "Pytanie nr 4 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/19.jpg",
            "odpA": "<strong>A. </strong>Według parametru nr_id wyłącznie dla trzech tabel",
            "odpB": "<strong>B. </strong>Według parametru nr_id dla wszystkich tabel",
            "odpC": "<strong>C. </strong>Według parametru wyrob_id dla wyłącznie dla trzech tabel",
            "odpD": "<strong>D. </strong>Według parametru wyrob_id wyłącznie dla trzech tabel",
            "tresc": "Według którego parametru oraz dla ilu tabel zostaną zwrócone wiersze na liście w wyniku przedstawionego zapytania?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 30,
            "header": "Pytanie nr 30 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CONSTRAINT(nazwisko,imie) FOREIGN KEY REFERENCES osoby (nazwisko, imie)",
            "odpB": "<strong>B. </strong>CONSTRAINT fk_osoba_uczen FOREIGN KEY (nazwisko, imie) REFERENCES osoby (nazwisko,imie)",
            "odpC": "<strong>C. </strong>CONSTRAINT fk_osoba_uczen FOREIGN KEY ON (nazwisko, imie) REFERENCES osoby (nazwisko,imie)",
            "odpD": "<strong>D. </strong>CONSTRAINT(nazwisko,imie) FOREIGN REFERENCES KEY osoby (nazwisko, imie)",
            "tresc": "Aby podczas tworzenia tabeli utworzyć klucz obcy na wielu kolumnach, należy użyć polecenia"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 49,
            "header": "Pytanie nr 49 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko = \"M%\";",
            "odpB": "<strong>B. </strong>SELECT nazwisko, imie FROM uczniowie WHERE nazwisko IN \"M%\";",
            "odpC": "<strong>C. </strong>SELECT nazwisko, imie FROM uczniowie WHERE nazwisko LIKE \"M%\";",
            "odpD": "<strong>D. </strong>SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko IN \"M%\";",
            "tresc": "Baza danych zawiera tabelę uczniowie z polami: imie, nazwisko, klasa. Aby odnaleźć imiona i nazwiska tych uczniów, których nazwiska rozpoczynają się literą M, należy zastosować polecenie SQL"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 199,
            "header": "Pytanie nr 199 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/84fefa07e9ac7703.png",
            "odpA": "<strong>A. </strong>znajduje się w tabeli obiekty.",
            "odpB": "<strong>B. </strong>ustawiony jest na kolumnie obiekty.",
            "odpC": "<strong>C. </strong>jest referencją do samego siebie.",
            "odpD": "<strong>D. </strong>łączy się z kolumną imiona.",
            "tresc": "Fragment kodu SQL oznacza, że klucz obcy"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 265,
            "header": "Pytanie nr 265 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>WHERE kierownik = true AND pensja =&gt; 3000 OR pensja &lt; 4000;",
            "odpB": "<strong>B. </strong>WHERE kierownik = true OR pensja &gt; 3000 OR pensja &lt;= 4000;",
            "odpC": "<strong>C. </strong>WHERE kierownik = true AND pensja =&gt; 3000 AND pensja &lt;= 4000;",
            "odpD": "<strong>D. </strong>WHERE kierownik = true AND pensja &gt; 3000 AND pensja &lt;= 4000;",
            "tresc": "Z bazy danych należy zwrócić zapytaniem SQL nazwiska pracowników, którzy są kierownikami, a ich pensja znajduje się w przedziale jednostronnie domkniętym (3000, 4000>. Która z klauzul bada ten warunek?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 150,
            "header": "Pytanie nr 150 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wyznaczenie z wejściowego tekstu podłańcucha znaków",
            "odpB": "<strong>B. </strong>usunięcie wskazanego tekstu",
            "odpC": "<strong>C. </strong>przycięcie wyświetlanego tekstu",
            "odpD": "<strong>D. </strong>łączenie wyświetlanego tekstu",
            "tresc": "Funkcja CONCAT() w języku SQL odpowiada za"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 252,
            "header": "Pytanie nr 252 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/c84e9cff42b1f0d9.png",
            "odpA": "<strong>A. </strong>wskazać najwyższą cenę za usługi.",
            "odpB": "<strong>B. </strong>zsumować koszt wszystkich usług.",
            "odpC": "<strong>C. </strong>policzyć ile jest usług dostępnych w tabeli.",
            "odpD": "<strong>D. </strong>obliczyć średnią arytmetyczną cen wszystkich usług.",
            "tresc": "Funkcja agregująca AVG użyta w zapytaniu ma za zadanie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 127,
            "header": "Pytanie nr 127 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DEFAULT",
            "odpB": "<strong>B. </strong>UNIQUE",
            "odpC": "<strong>C. </strong>NOT NULL",
            "odpD": "<strong>D. </strong>NULL",
            "tresc": "Tworząc tabelę w języku SQL, zdefiniowano dla kolumny klucz główny. Aby zabezpieczyć ją przed wstawieniem wartości pustej, należy zastosować atrybut"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 171,
            "header": "Pytanie nr 171 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Składa się tylko z jednego pola",
            "odpB": "<strong>B. </strong>Może przyjmować tylko wartości liczbowe",
            "odpC": "<strong>C. </strong>Dla tabeli z danymi osobowymi może być to pole nazwisko",
            "odpD": "<strong>D. </strong>Jest unikalny w obrębie tabeli",
            "tresc": "Które ze stwierdzeń dotyczących klucza podstawowego jest prawdziwe?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 27,
            "header": "Pytanie nr 27 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>modyfikację tabeli USA",
            "odpB": "<strong>B. </strong>nadpisanie starej tabeli USA",
            "odpC": "<strong>C. </strong>utworzenie nowej tabeli USA",
            "odpD": "<strong>D. </strong>usunięcie tabeli USA",
            "tresc": "Polecenie w języku SQL ALTER TABLE USA... ma za zadanie"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 103,
            "header": "Pytanie nr 103 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/349.jpg",
            "odpA": "<strong>A. </strong>Dodać do tabeli ksiazki kolumnę tytul",
            "odpB": "<strong>B. </strong>Zmienić typ kolumny w tabeli ksiazki",
            "odpC": "<strong>C. </strong>Zmienić nazwę kolumny w tabeli ksiazki",
            "odpD": "<strong>D. </strong>Usunąć kolumnę tytul z tabeli ksiazki",
            "tresc": "Przedstawione polecenie MySQL ma za zadanie"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 203,
            "header": "Pytanie nr 203 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>utraty aktualizacji.",
            "odpB": "<strong>B. </strong>odczytów widm.",
            "odpC": "<strong>C. </strong>brudnych odczytów.",
            "odpD": "<strong>D. </strong>niepowtarzalnych odczytów.",
            "tresc": "Poziom izolacji transakcji Repeatable Read (tryb powtarzalnego odczytu) stosowany przez MS SQL wiąże się z problemem"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 257,
            "header": "Pytanie nr 257 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>raportem.",
            "odpB": "<strong>B. </strong>kwerendą SELECT.",
            "odpC": "<strong>C. </strong>filtrowaniem.",
            "odpD": "<strong>D. </strong>formularzem.",
            "tresc": "Aby edytować dane w bazie danych można posłużyć się"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 254,
            "header": "Pytanie nr 254 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>występujące w bazie tylko raz.",
            "odpB": "<strong>B. </strong>pogrupowane. ",
            "odpC": "<strong>C. </strong>posortowane malejąco lub rosnąco.",
            "odpD": "<strong>D. </strong>tak, aby w podanej kolumnie nie powtarzały się wartości. ",
            "tresc": "Kwerendę SELECT DISTINCT należy zastosować w przypadku, gdy potrzeba wybrać rekordy"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 197,
            "header": "Pytanie nr 197 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>upper",
            "odpB": "<strong>B. </strong>len",
            "odpC": "<strong>C. </strong>year",
            "odpD": "<strong>D. </strong>now",
            "tresc": "Która z funkcji SQL NIE pobiera argumentów?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 137,
            "header": "Pytanie nr 137 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>RESTORE DATABASE",
            "odpB": "<strong>B. </strong>UNBACKUP DATABASE",
            "odpC": "<strong>C. </strong>BACKUP DATABASE",
            "odpD": "<strong>D. </strong>EXPORT DATABASE",
            "tresc": "Aby przywrócić bazę danych z kopii bezpieczeństwa na serwerze MSSQL, należy posłużyć się poleceniem"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 31,
            "header": "Pytanie nr 31 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wybraniu krotek niezawierających wartości NULL",
            "odpB": "<strong>B. </strong>wybraniu krotek spełniających określone warunki ",
            "odpC": "<strong>C. </strong>wyelminowaniu pustych wierszy",
            "odpD": "<strong>D. </strong>wyelminowaniu krotek z powtarzającymi się polami",
            "tresc": "W algebrze relacji operacja selekcji polega na"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 54,
            "header": "Pytanie nr 54 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>formularz",
            "odpB": "<strong>B. </strong>raport",
            "odpC": "<strong>C. </strong>kwerendę SELECT",
            "odpD": "<strong>D. </strong>filtr",
            "tresc": "Aby uprościć wprowadzenie i edytowanie danych w tabeli, należy zdefiniować"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 167,
            "header": "Pytanie nr 167 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/590.jpg",
            "odpA": "<strong>A. </strong>błąd nieprawidłowej liczby pól",
            "odpB": "<strong>B. </strong>wpisanie rekordu do tabeli, dla klucza głównego zostanie przydzielona wartość NULL",
            "odpC": "<strong>C. </strong>zignorowanie polecenia, tabela pozostanie bez zmian",
            "odpD": "<strong>D. </strong>wpisanie rekordu do tabeli, dla klucza głównego zostanie przydzielona kolejna wartość naturalna",
            "tresc": "W tabeli pracownicy zdefiniowano klucz główny typu INTEGER z atrybutami NOT NULL oraz AUTO_INCREMENT. Ponadto zdefiniowano pola imie oraz nazwisko. W przypadku zastosowania przedstawionej kwerendy SQL wprowadzającej dane, w której zostało pominięte pole klucza, w bazie danych MySQL nastąpi"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 288,
            "header": "Pytanie nr 288 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/4Vp754Rgqv.png",
            "odpA": "<strong>A. </strong>Puste dane.",
            "odpB": "<strong>B. </strong>Jedynie id równe 8.",
            "odpC": "<strong>C. </strong>Pole id równe 7 oraz 8.",
            "odpD": "<strong>D. </strong>Wszystkie id.",
            "tresc": "Które dane zostaną wybrane w wyniku działania kwerendy na przedstawionych rekordach?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 55,
            "header": "Pytanie nr 55 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT szkola FROM klasa=klasa+1 WHERE klasa &gt;=1 AND klasa &lt;=5;",
            "odpB": "<strong>B. </strong>UPDATE nazwisko, imie SET klasa=klasa+1 WHERE klasa&gt;1 OR klasa&lt;5;",
            "odpC": "<strong>C. </strong>UPDATE szkola SET klasa=klasa+1 WHERE klasa&gt;=1 AND klasa &lt;=5;",
            "odpD": "<strong>D. </strong>SELECT nazwisko, imie FROM klasa=klasa+1 WHERE klasa&gt;1 OR klasa &lt;5;",
            "tresc": "Baza danych 6-letniej szkoły podstawowej zawiera tabelę szkola z polami: imie, nazwisko, klasa. Wszyscy uczniowie klas 1-5 zdali do następnej klasy. Aby zwiększyć wartość w polu klasa o 1 należy użyć polecenia"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 193,
            "header": "Pytanie nr 193 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/667.jpg",
            "odpA": "<strong>A. </strong>Tabele, które zmieniły się w aktualnej sesji",
            "odpB": "<strong>B. </strong>Tabele, które zmieniły się od ostatniej kontroli lub nie zostały poprawnie zamknięte",
            "odpC": "<strong>C. </strong>Jedynie tabele, które nie zostały poprawnie zamknięte",
            "odpD": "<strong>D. </strong>Jedynie tabele referujące do innych",
            "tresc": "Które tabele zostaną sprawdzone za pomocą przedstawionego polecenia?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 178,
            "header": "Pytanie nr 178 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wiele do jednego",
            "odpB": "<strong>B. </strong>wiele do wielu",
            "odpC": "<strong>C. </strong>jeden do jednego",
            "odpD": "<strong>D. </strong>jeden do wielu",
            "tresc": "W wyniku połączenia relacją kluczy głównych dwóch tabel otrzymuje się relację typu"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 17,
            "header": "Pytanie nr 17 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/56.jpg",
            "odpA": "<strong>A. </strong>Input(Text), Select, Input(Radio), Input(Radio), Input(Submit), Input(Reset)",
            "odpB": "<strong>B. </strong>Textarea, Select, Input(Radio), Input(Radio), Input(Reset), Input(Submit)",
            "odpC": "<strong>C. </strong>Input(Text), Input(Chechbox), Select, Select, Input(Submit), Input(Reset)",
            "odpD": "<strong>D. </strong>Textarea, Option, Input(Chechbox), Input(Checkbox), Input(Submit) Input(Reset)",
            "tresc": "Które z pól są umieszczone w formularzu?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 243,
            "header": "Pytanie nr 243 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/99ae8dcad403144b.png",
            "odpA": "<strong>A. </strong>0LL",
            "odpB": "<strong>B. </strong>0CC",
            "odpC": "<strong>C. </strong>CLL",
            "odpD": "<strong>D. </strong>000",
            "tresc": "W programie MS Access we właściwościach pola klasa należy ustawić maskę wprowadzania danych. Którą maskę należy podać, aby wprowadzone dane były złożone z trzech znaków w formacie: obowiązkowa cyfra, po niej obowiązkowe dwie litery?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 211,
            "header": "Pytanie nr 211 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>klucza podstawowego.",
            "odpB": "<strong>B. </strong>definicji wszystkich pól tabeli.",
            "odpC": "<strong>C. </strong>definicji wszystkich pól typu numerycznego.",
            "odpD": "<strong>D. </strong>użycia atrybutu DEFAULT.",
            "tresc": "Atrybut kolumny NOT NULL jest wymagany w przypadku"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 280,
            "header": "Pytanie nr 280 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>FULL",
            "odpB": "<strong>B. </strong>WITH FORMAT",
            "odpC": "<strong>C. </strong>DIFFERENTIAL",
            "odpD": "<strong>D. </strong>RESTORE",
            "tresc": "Aby stworzyć różnicową kopię bazy danych na serwerze MSSQL, należy zastosować klauzulę"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 201,
            "header": "Pytanie nr 201 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>raport.",
            "odpB": "<strong>B. </strong>formularz.",
            "odpC": "<strong>C. </strong>makro.",
            "odpD": "<strong>D. </strong>moduł.",
            "tresc": "Obiekt bazy danych, którego głównym przeznaczeniem jest drukowanie lub wyświetlanie zestawień danych, to"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 282,
            "header": "Pytanie nr 282 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>tabelę.",
            "odpB": "<strong>B. </strong>rekord.",
            "odpC": "<strong>C. </strong> kwerendę.",
            "odpD": "<strong>D. </strong>relację.",
            "tresc": "W relacyjnych bazach danych encja jest reprezentowana przez"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 107,
            "header": "Pytanie nr 107 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>mysqli_exit();",
            "odpB": "<strong>B. </strong>mysqli_close();",
            "odpC": "<strong>C. </strong>mysqli_commit();",
            "odpD": "<strong>D. </strong>mysqli_rollback();",
            "tresc": "W języku PHP, wykonując operacje na bazie danych MySQL, aby zakończyć pracę z bazą, należy wywołać"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 141,
            "header": "Pytanie nr 141 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/506.jpg",
            "odpA": "<strong>A. </strong>3",
            "odpB": "<strong>B. </strong>4",
            "odpC": "<strong>C. </strong>0",
            "odpD": "<strong>D. </strong>1",
            "tresc": "Jaki wynik zwróci zapytanie z ramki wykonane na przedstawionej tabeli?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 226,
            "header": "Pytanie nr 226 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>FLUSH PRIVILEGES",
            "odpB": "<strong>B. </strong>TRGGER",
            "odpC": "<strong>C. </strong>GRANT OPTION",
            "odpD": "<strong>D. </strong>ALL PRIVILEGES",
            "tresc": "Aby w systemie MySQL nadać użytkownikowi prawo do nadawania i zmiany uprawnień innym użytkownikom należy zastosować klauzulę"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 83,
            "header": "Pytanie nr 83 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>zwrócić rekord, którego numer podany został w parametrze funkcji",
            "odpB": "<strong>B. </strong>zwrócić liczbę wierszy znajdujących się w wyniku zapytania",
            "odpC": "<strong>C. </strong>ponumerować rekordy w bazie danych",
            "odpD": "<strong>D. </strong>zwrócić kolejny rekord z wynikami zapytania",
            "tresc": "Zadaniem funkcji PHP o nazwie mysql_num_rows() jest"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 28,
            "header": "Pytanie nr 28 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>imion, nazwisk i numerów PESEL osób w wieku poniżej 18 lat",
            "odpB": "<strong>B. </strong>imion, numerów PESEL i wieku osób posiadających powyżej 30 lat",
            "odpC": "<strong>C. </strong>imion, numerów PESEL i wieku osób z przedziału od 18 do 30 lat",
            "odpD": "<strong>D. </strong>imion, numerów PESEL i wieku osób w wieku równym 18 lub 30 lat",
            "tresc": "Kod: SELECT imie, pesel, wiek FROM dane WHERE wiek IN (18,30) spowoduje wybranie:"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 98,
            "header": "Pytanie nr 98 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT * FROM ksiazki WHERE cena &lt; 50;",
            "odpB": "<strong>B. </strong>SELECT tytul FROM ksiazki WHERE cena &gt; '50 zł';",
            "odpC": "<strong>C. </strong>SELECT ksiazki FROM tytul WHERE cena &lt; '50 zł';",
            "odpD": "<strong>D. </strong>SELECT tytul FROM ksiazki WHERE cena &lt; 50;",
            "tresc": "Dana jest tabela ksiazki z polami: tytul, autor (typu tekstowego), cena (typu liczbowego). Aby kwerenda SELECT zwróciła tylko tytuły, dla których cena jest mniejsza od 50zł, należy zapisać:"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 44,
            "header": "Pytanie nr 44 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Zaszyfrowanie pliku bazy danych oraz SMSy z kodem autoryzującym",
            "odpB": "<strong>B. </strong>Funkcje anonimowe oraz ustalenie hasła otwarcia bazy danych",
            "odpC": "<strong>C. </strong>Ustalenie zabezpieczeń na poziomie użytkownika oraz sesji",
            "odpD": "<strong>D. </strong>Ustalanie hasła do otwarcia bazy danych oraz zabezpieczeń na poziomie użytkownika",
            "tresc": "Wskaż dwa sposoby zabezpieczenia bazy danych Microsoft Access"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 262,
            "header": "Pytanie nr 262 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/RRLettEf9L.png",
            "odpA": "<strong>A. </strong>Jeden do jednego, gdzie obie tabele mają zdefiniowane klucze obce.",
            "odpB": "<strong>B. </strong>jeden do wielu, gdzie kluczem obcym jest pole w tabeli uslugi.",
            "odpC": "<strong>C. </strong>wiele do wielu pomiędzy kluczami głównymi obu tabel.",
            "odpD": "<strong>D. </strong>jeden do wielu, gdzie kluczem obcym jest pole w tabeli kadra.",
            "tresc": "Z relacji przedstawionej na obrazie można wyczytać, że jest ona relacją"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 82,
            "header": "Pytanie nr 82 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>pole klucza podstawowego musi posiadać utworzony indeks",
            "odpB": "<strong>B. </strong>w relacji 1..n pole klucza obcego jest połączone z polem klucza obcego innej tabeli",
            "odpC": "<strong>C. </strong>pole klucza podstawowego nie może być puste",
            "odpD": "<strong>D. </strong>pole klucza obcego nie może być puste",
            "tresc": "Wskaż poprawną zasadę dotyczącą spójności danych w bazie danych"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 206,
            "header": "Pytanie nr 206 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>if (mysqli_connect_errno()){}",
            "odpB": "<strong>B. </strong>if {mysql_connect_errno()}{}",
            "odpC": "<strong>C. </strong>if {mysqli_connect_error()}{}",
            "odpD": "<strong>D. </strong>if (mysql_connect_error())()",
            "tresc": "Wskaż poprawny składniowo warunek zapisany w języku PHP i sprawdzający brak połączenia z bazą MySQL."
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 9,
            "header": "Pytanie nr 9 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>przypisanie uprawnień",
            "odpB": "<strong>B. </strong>określanie przestrzeni tabel",
            "odpC": "<strong>C. </strong>wprowadzenie limitów przestrzeni dyskowej",
            "odpD": "<strong>D. </strong>stosowanie makr",
            "tresc": "W programie Microsoft Access formą zabezpieczeń dostępu do danych związaną z tabelą i kwerendą jest"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 208,
            "header": "Pytanie nr 208 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ALTER TABLE samochody ADD FOREIGN KEY kolor REFERENCES lakier;",
            "odpB": "<strong>B. </strong>ALTER TABLE lakier ADD FOREIGN KEY (barwa) REFERENCES samochody(kolor);",
            "odpC": "<strong>C. </strong>ALTER TABLE samochody ADD FOREIGN KEY (kolor) REFERENCES lakier(lakierId);",
            "odpD": "<strong>D. </strong>ALTER TABLE samochody ADD FOREIGN KEY barwa REFERENCES samochody.lakier;",
            "tresc": "W bazie danych samochodów pole kolor z tabeli samochody przyjmuje wartości kolorów jedynie ze słownika lakier. Aby połączyć tabele samochody i lakier relacją należy, zastosować kwerendę"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 217,
            "header": "Pytanie nr 217 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DROP TABLE usuwa tabelę, a TRUNCATE TABLE modyfikuje w niej dane spełniające warunek.",
            "odpB": "<strong>B. </strong>DROP TABLE usuwa tabelę, a TRUNCATE TABLE usuwa wszystkie dane, pozostawiając pustą tabelę.",
            "odpC": "<strong>C. </strong>Obydwa polecenia usuwają tabelę wraz zawartością, ale tylko polecenie TRUNCATE TABLE może być cofnięte.",
            "odpD": "<strong>D. </strong>Obydwa polecenia usuwają jedynie zawartość tabeli, ale tylko polecenie DROP TABLE może być cofnięte.",
            "tresc": "Wskaż różnicę pomiędzy poleceniami DROP TABLE i TRUNCATE TABLE."
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 93,
            "header": "Pytanie nr 93 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SAVE DATABASE",
            "odpB": "<strong>B. </strong>REBACKUP DATABASE",
            "odpC": "<strong>C. </strong>DBCC CHECKDB",
            "odpD": "<strong>D. </strong>RESTORE DATABASE",
            "tresc": "Aby przywrócić bazę danych MS SQL z kopii bezpieczeństwa, należy zastosować polecenie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 14,
            "header": "Pytanie nr 14 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Strukturalny język zapytań kierowanych do bazy danych",
            "odpB": "<strong>B. </strong>Obiektowy język programowania do generowania stron www ",
            "odpC": "<strong>C. </strong>System zarządzania bazą danych ",
            "odpD": "<strong>D. </strong>Kaskadowy arkusz stylów do opisu wyglądu strony www",
            "tresc": "Co to jest DBMS?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 182,
            "header": "Pytanie nr 182 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>mysqli_select_db",
            "odpB": "<strong>B. </strong>mysqli_create_db",
            "odpC": "<strong>C. </strong>mysqli_connect",
            "odpD": "<strong>D. </strong>mysqli_close",
            "tresc": "Aby aplikacja PHP mogła komunikować się z bazą danych, niezbędne jest w pierwszej kolejności wywołanie funkcji o nazwie"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 272,
            "header": "Pytanie nr 272 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>GRANT * TO anna;",
            "odpB": "<strong>B. </strong>SHOW GRANTS FOR anna;",
            "odpC": "<strong>C. </strong>SELECT GRANTS FOR anna;",
            "odpD": "<strong>D. </strong>REVOKE GRANTS FROM anna;",
            "tresc": "W bazie danych MySQL, aby wyświetlić wszystkie prawa nadane użytkownikowi anna, można posłużyć się poleceniem"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 112,
            "header": "Pytanie nr 112 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DELETE naprawy WHERE czyNaprawione = TRUE;",
            "odpB": "<strong>B. </strong>DELETE klient FROM naprawy WHERE czyNaprawione = TRUE;",
            "odpC": "<strong>C. </strong>DELETE FROM naprawy;",
            "odpD": "<strong>D. </strong>DELETE FROM naprawy WHERE czyNaprawione = TRUE;",
            "tresc": "Tabela o nazwie naprawy zawiera pola: klient, czyNaprawione. Aby usunąć te rekordy, w których pole czyNaprawione jest prawdą, należy posłużyć się poleceniem"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 158,
            "header": "Pytanie nr 158 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/581.jpg",
            "odpA": "<strong>A. </strong>zostanie zignorowany warunek sprawdzający imię",
            "odpB": "<strong>B. </strong>zostaną wyświetlone wszystkie rekordy tabeli mieszkancy",
            "odpC": "<strong>C. </strong>zostanie wyświetlone pole o nazwie \"*\" (gwiazdka)",
            "odpD": "<strong>D. </strong>zostaną wyświetlone wszystkie kolumny tabeli mieszkancy",
            "tresc": "W zapytaniu SQL umieszczonym poniżej, znak gwiazdki oznacza, że w wyniku tego zapytania"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 233,
            "header": "Pytanie nr 233 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DELETE FROM artykuly WHERE tresc = \"%sto%\";",
            "odpB": "<strong>B. </strong>DELETE * FROM artykuly WHERE tresc LIKE \"%sto%\";",
            "odpC": "<strong>C. </strong>DELETE * FROM artykuly WHERE tresc = \"%sto%\";",
            "odpD": "<strong>D. </strong>DELETE FROM artykuly WHERE tresc LIKE \"%sto%\";",
            "tresc": "Za pomocą którego polecenia SQL można usunąć z tabeli artykuly wiersze zawierające słowo \"sto\" znajdujące się w dowolnym miejscu pola tresc?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 135,
            "header": "Pytanie nr 135 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DROP firma;",
            "odpB": "<strong>B. </strong>ALTER firma DROP;",
            "odpC": "<strong>C. </strong>ALTER firma DROP DATABASE;",
            "odpD": "<strong>D. </strong>DROP DATABASE firma;",
            "tresc": "Polecenie SQL, które usuwa bazę danych o nazwie firma, ma postać"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 188,
            "header": "Pytanie nr 188 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia &gt;=20 OR gromada = 'ssak';",
            "odpB": "<strong>B. </strong>SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia &gt;=20;",
            "odpC": "<strong>C. </strong>SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia &gt;=20 AND gromada = 'ssak';",
            "odpD": "<strong>D. </strong>SELECT nazwa FROM zwierzeta WHERE gromada = 'ssak';",
            "tresc": "Dana jest tabela zwierzeta z polami: nazwa, gatunek, gromada, cechy, dlugosc_zycia. Dla dowolnego zestawu danych, aby wyświetlić nazwy tych zwierząt, które żyją przynajmniej 20 lat oraz są ssakami, należy wydać zapytanie:"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 294,
            "header": "Pytanie nr 294 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>mysqlimport",
            "odpB": "<strong>B. </strong>mysqlshow",
            "odpC": "<strong>C. </strong>mysqldump",
            "odpD": "<strong>D. </strong>mysqlcheck",
            "tresc": "Polecenie służące do sprawdzenia i optymalizacji bazy danych to"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 160,
            "header": "Pytanie nr 160 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/583.jpg",
            "odpA": "<strong>A. </strong>Wartość 3.5",
            "odpB": "<strong>B. </strong>Suma ocen równa 14",
            "odpC": "<strong>C. </strong>Dane 4, 3, 4, 3",
            "odpD": "<strong>D. </strong>Liczba wierszy równa 4",
            "tresc": "Dana jest tabela uczniowie, do której wpisano rekordy jak na rysunku. Co będzie wynikiem działania przedstawionego zapytania SQL?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 286,
            "header": "Pytanie nr 286 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UNIQUE",
            "odpB": "<strong>B. </strong>CHECK",
            "odpC": "<strong>C. </strong>DISTINCT ",
            "odpD": "<strong>D. </strong>HAVING",
            "tresc": "Z tabeli mieszkancy należy wybrać niepowtarzające się nazwy miast, w tym celu należy skorzystać z wyrażenia SQL zawierającego klauzulę"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 58,
            "header": "Pytanie nr 58 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>przebudowania bazy danych w oparciu o buforowane dane",
            "odpB": "<strong>B. </strong>odświeżenia bazy danych z kontrolą więzów integralności",
            "odpC": "<strong>C. </strong>usunięcia bazy danych z serwera centralnego subskrybenta",
            "odpD": "<strong>D. </strong>odtworzenia bazy danych z kopii bezpieczeństwa",
            "tresc": "W MS SQL Server polecenie RESTORE DATABASE służy do"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 148,
            "header": "Pytanie nr 148 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>usuwanie danych w tabelach",
            "odpB": "<strong>B. </strong>analizę wybranych danych",
            "odpC": "<strong>C. </strong>dodawanie danych w tabelach",
            "odpD": "<strong>D. </strong>aktualizowanie danych w tabelach",
            "tresc": "Wykonując raport w systemie obsługi relacyjnych baz danych, umożliwia się"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 156,
            "header": "Pytanie nr 156 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/565.jpg",
            "odpA": "<strong>A. </strong>adres serwera - $a, nazwa bazy danych - $d, login - $b, hasło - $c",
            "odpB": "<strong>B. </strong>adres serwera - $c, nazwa bazy danych - $d, login - $a, hasło - $b",
            "odpC": "<strong>C. </strong>adres serwera - $c, nazwa bazy danych - $d, login - $b, hasło - $a",
            "odpD": "<strong>D. </strong>adres serwera - $a, nazwa bazy danych - $b, login - $c, hasło - $d",
            "tresc": "Jakie wartości muszą przyjmować zmienne w funkcji biblioteki mysqli, aby połączyć się z serwerem i bazą danych?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 215,
            "header": "Pytanie nr 215 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>formularz.",
            "odpB": "<strong>B. </strong>makropolecenie.",
            "odpC": "<strong>C. </strong>raport.",
            "odpD": "<strong>D. </strong>relację.",
            "tresc": "W bazach danych do prezentacji danych spełniających określone warunki nalezy utworzyć"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 13,
            "header": "Pytanie nr 13 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Użytkownik lokalny",
            "odpB": "<strong>B. </strong>Security users",
            "odpC": "<strong>C. </strong>Users",
            "odpD": "<strong>D. </strong>Administrator systemu",
            "tresc": "Jakie należy posiadać uprawnienia, aby wykonać i odtworzyć kopię zapasową bazy danych Microsoft SQL Server 2005 Express?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 8,
            "header": "Pytanie nr 8 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Indeksy",
            "odpB": "<strong>B. </strong>Wartości domyślne",
            "odpC": "<strong>C. </strong>Reguły ",
            "odpD": "<strong>D. </strong>Klucze podstawowe",
            "tresc": "Co należy zastosować w organizacji danych, aby zapytania w bazie danych były wykonywane szybciej?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 207,
            "header": "Pytanie nr 207 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>mysqldump",
            "odpB": "<strong>B. </strong>mysqlreplicate",
            "odpC": "<strong>C. </strong>mysqlslap",
            "odpD": "<strong>D. </strong>mysqlcheck",
            "tresc": "Do utworzenia kopii zapasowej bazy danych w MySQL należy użyć polecenia"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 74,
            "header": "Pytanie nr 74 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>PRIMARY KEY",
            "odpB": "<strong>B. </strong>UNIQUE",
            "odpC": "<strong>C. </strong>IDENTITY FIELD",
            "odpD": "<strong>D. </strong>MAIN KEY",
            "tresc": "W poleceniu CREATE TABLE języku SQL atrybut określający, która kolumna tabeli jest kluczem podstawowym, to"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 68,
            "header": "Pytanie nr 68 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>INSERT INTO nowy FROM artykuly SET TRUE;",
            "odpB": "<strong>B. </strong>UPDATE artykuly SET nowy=TRUE;",
            "odpC": "<strong>C. </strong>UPDATE nowy FROM artykuly VALUE TRUE;",
            "odpD": "<strong>D. </strong>INSERT INTO artykuly VALUE nowy=TRUE;",
            "tresc": "W bazie danych sklepu istnieje tabela artykuly zawierająca pole o nazwie nowy. Aby to pole wypełnić wartościami TRUE dla każdego rekordu, należy zastosować kwerendę"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 90,
            "header": "Pytanie nr 90 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>stworzyć dwie osobne kwerendy: pierwszą wyszukującą tytuły książek, drugą wyszukującą nazwiska autorów",
            "odpB": "<strong>B. </strong>Zdefiniować relację 1..n dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele",
            "odpC": "<strong>C. </strong>stworzyć kwerendę wyszukującą tytuły książek",
            "odpD": "<strong>D. </strong>Zdefiniować relację 1..1 dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele",
            "tresc": "Baza danych księgarni zawiera tabelę ksiazki z polami: id, idAutor, tytul, ileSprzedanych oraz tabelę autorzy z polami: id, imie, nazwisko. Aby stworzyć raport sprzedanych książek z tytułami i nazwiskami autorów, należy"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 224,
            "header": "Pytanie nr 224 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wielu wierszom tabeli A przypada wiele wierszy tabeli B.",
            "odpB": "<strong>B. </strong>jednemu wierszowi z tabeli A może odpowiadać wyłącznie jeden wiersz w tabeli B.",
            "odpC": "<strong>C. </strong>wielu wierszom z tabeli A przypada tylko jeden wiersz tabeli B.",
            "odpD": "<strong>D. </strong>jednemu wierszowi z tabeli A może odpowiadać wiele wierszy w tabeli B. ",
            "tresc": "W bazach danych relacja wiele-do-wielu pomiędzy tabelami występuje, gdy"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 283,
            "header": "Pytanie nr 283 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>złożonym.",
            "odpB": "<strong>B. </strong>obcym.",
            "odpC": "<strong>C. </strong>kandydującym.",
            "odpD": "<strong>D. </strong>głównym.",
            "tresc": "Wybrany minimalny zestaw atrybutów relacji, jednoznacznie identyfikujący każdy rekord tej relacji, przyjmujący wartości niepowtarzalne i niepuste, nazywamy kluczem"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 20,
            "header": "Pytanie nr 20 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Kolumny tabeli <i>dane</i> nazywają się: <i>kolumna1</i>, <i>kolumna2</i>, <i>kolumna3</i>",
            "odpB": "<strong>B. </strong>Tabela o nazwie <i>dane</i> posiada trzy kolumny liczb całkowitych",
            "odpC": "<strong>C. </strong>Tabela posiada jedną kolumnę zawierającą trzy elementowe tablice",
            "odpD": "<strong>D. </strong>Tabela o nazwie <i>dane</i> posiada jedną kolumnę liczb całkowitych",
            "tresc": "Które ze stwierdzeń prawidłowo charakteryzuje zdefiniowaną tabelę: CREATE TABLE dane (kolumna INTEGER(3));"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 81,
            "header": "Pytanie nr 81 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/268.jpg",
            "odpA": "<strong>A. </strong>usunięcia tabeli lub jej rekordów",
            "odpB": "<strong>B. </strong>aktualizowania danych i przeglądania tabeli klienci",
            "odpC": "<strong>C. </strong>tworzenia tabeli klienci i aktualizowania w niej danych",
            "odpD": "<strong>D. </strong>przeglądania tabeli klienci i wstawiania do niej sektorów",
            "tresc": "W bazie danych wykonano następujące polecenie dotyczące praw użytkownika adam. Po wykonaniu poleceń użytkownik adam będzie miał prawa do"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 97,
            "header": "Pytanie nr 97 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/343.jpg",
            "odpA": "<strong>A. </strong>liczbę wierszy",
            "odpB": "<strong>B. </strong>sumę w kolumnie wartosc",
            "odpC": "<strong>C. </strong>średnią tabeli",
            "odpD": "<strong>D. </strong>średnią w kolumnie wartosc",
            "tresc": "W przedstawionym fragmencie kwerendy języka SQL, komenda SELECT ma za zadanie zwrócić"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 152,
            "header": "Pytanie nr 152 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/547.jpg",
            "odpA": "<strong>A. </strong>po roku 2017",
            "odpB": "<strong>B. </strong>przed rokiem 2017",
            "odpC": "<strong>C. </strong>w roku 2017",
            "odpD": "<strong>D. </strong>w latach innych niż 2017",
            "tresc": "W tabeli produkt znajdują się przedmioty wyprodukowane po 2000 roku, z polami nazwa i rok_produkcji. Klauzula SQL wyświetli listę przedmiotów wyprodukowanych"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 130,
            "header": "Pytanie nr 130 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/464.jpg",
            "odpA": "<strong>A. </strong>Fiat, Opel, Toyota",
            "odpB": "<strong>B. </strong>Punto, Corsa, Corolla",
            "odpC": "<strong>C. </strong>Czerwony, grafitowy",
            "odpD": "<strong>D. </strong>Punto, Corsa, Astra, Corolla, Yaris",
            "tresc": "Na przedstawionej tabeli samochody wykonano zapytanie SQL: SELECT model FROM samochody WHERE rocznik=2016; W wyniku podanego zapytania zostaną zwrócone następujące wartości:"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 240,
            "header": "Pytanie nr 240 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/4303804edbdb2a33.png",
            "odpA": "<strong>A. </strong>rekurencji.",
            "odpB": "<strong>B. </strong>łączenia.",
            "odpC": "<strong>C. </strong>selekcji.",
            "odpD": "<strong>D. </strong>sumy. ",
            "tresc": "Dana jest tabela oceny o polach id, nazwisko, imie, ocena. Przedstawione zapytanie jest przykładem"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 213,
            "header": "Pytanie nr 213 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>LONGTEXT",
            "odpB": "<strong>B. </strong>ENUM",
            "odpC": "<strong>C. </strong>BLOB",
            "odpD": "<strong>D. </strong>DOUBLE",
            "tresc": "Baza danych zawiera dane multimedialne, co wiąże się z przechowywaniem dużych ilości danych binarnych. Do takich danych należy zastosować typ"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 225,
            "header": "Pytanie nr 225 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>phpMyAdmin.",
            "odpB": "<strong>B. </strong>Symfony 3.",
            "odpC": "<strong>C. </strong>FileZilla.",
            "odpD": "<strong>D. </strong>TotalCommander.",
            "tresc": "Aby zaimportować plik z danymi SQL do bazy danych MySQL można użyć narzędzia"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 244,
            "header": "Pytanie nr 244 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>nieoznaczoną.",
            "odpB": "<strong>B. </strong>wiele do wielu.",
            "odpC": "<strong>C. </strong>jeden do jednego.",
            "odpD": "<strong>D. </strong>jeden do wielu.",
            "tresc": "Relacja opisana w sposób: \"Rekordowi z tabeli A odpowiada dowolna liczba rekordów z tabeli B. Jednemu rekordowi z tabeli B odpowiada dokładnie jeden rekord z tabeli A\" jest relacją"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 273,
            "header": "Pytanie nr 273 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>IDENTITY",
            "odpB": "<strong>B. </strong>UNIQUE",
            "odpC": "<strong>C. </strong>DEFAULT",
            "odpD": "<strong>D. </strong>NOT NULL",
            "tresc": "Tworząc tabelę w języku SQL zdefiniowano pole, którego wartości nie mogą się powtarzać. Do jego definicji należy zastosować atrybut"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 22,
            "header": "Pytanie nr 22 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>create",
            "odpB": "<strong>B. </strong>mysqldump",
            "odpC": "<strong>C. </strong>truncate",
            "odpD": "<strong>D. </strong>mysqlcheck",
            "tresc": "Które polecenie wydane z konsoli systemu operacyjnego, zawierające w swojej składni opcję --repair, umożliwia naprawę bazy danych?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 185,
            "header": "Pytanie nr 185 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>phpMyAdmin",
            "odpB": "<strong>B. </strong>pgAdmin",
            "odpC": "<strong>C. </strong>SQLite",
            "odpD": "<strong>D. </strong>MySQL Workbench",
            "tresc": "Wbudowanym w pakiet XAMPP narzędziem służącym do zarządzania bazą danych jest"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 234,
            "header": "Pytanie nr 234 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>MAX SELECT ocena FROM oceny WHERE produktID = 10;",
            "odpB": "<strong>B. </strong>SELECT MAX COUNT(ocena) FROM oceny WHERE produktID = 10;",
            "odpC": "<strong>C. </strong>COUNT MAX SELECT ocena FROM oceny WHERE produktID = 10;",
            "odpD": "<strong>D. </strong>SELECT MAX(ocena) FROM oceny WHERE produktID = 10;",
            "tresc": "W bazie danych sklepu istnieją dwie tabele powiązane relacją: produkty oraz oceny. Tabela oceny zawiera dowolną liczbę ocen klientów dla danego produktu opisaną polami: id, ocena (pole numeryczne), produktID (klucz obcy). Aby wskazać maksymalną ocenę dla produktu o ID równym 10, należy posłużyć się zapytaniem"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 63,
            "header": "Pytanie nr 63 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwa FROM sklepy WHERE branza=\"spozywczy\" AND miasto=\"Wrocław\";",
            "odpB": "<strong>B. </strong>SELECT nazwa FROM sklepy WHERE branza=\"spozywczy\" OR miasto=\"Wrocław\";",
            "odpC": "<strong>C. </strong>SELECT sklepy FROM branza=\"spożywczy\" WHERE miasto=\"Wrocław\";",
            "odpD": "<strong>D. </strong>SELECT sklepy FROM nazwa WHERE branza=\"spożywczy\" BETWEEN miasto=\"Wrocław\";",
            "tresc": "Zdefiniowano bazę danych z tabelą sklepy o polach: nazwa, ulica, miasto, branza. Aby wyszukać wszystkie nazwy sklepów spożywczych zlokalizowanych wyłącznie we Wrocławiu, należy posłużyć się kwerendą:"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 37,
            "header": "Pytanie nr 37 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>parametrycznej",
            "odpB": "<strong>B. </strong>funkcjonalnej",
            "odpC": "<strong>C. </strong>krzyżowej",
            "odpD": "<strong>D. </strong>wybierającej",
            "tresc": "Kwerenda pozwalająca na wprowadzenie zmian w wielu rekordach lub przeniesienie wielu rekordów przy użyciu pojedynczej operacji, nosi nazwę kwerendy"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 138,
            "header": "Pytanie nr 138 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/472.jpg",
            "odpA": "<strong>A. </strong>Tylko Tomasz",
            "odpB": "<strong>B. </strong>Tomasz i Adam",
            "odpC": "<strong>C. </strong>Tomasz i Anna",
            "odpD": "<strong>D. </strong>Adam i Anna",
            "tresc": "W języku SQL wykonano przedstawione w ramce polecenia GRANT. Kto będzie miał prawo do przeglądania danych oraz ich zmiany?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 195,
            "header": "Pytanie nr 195 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/670.jpg",
            "odpA": "<strong>A. </strong>INSERT INTO dane VALUES ('$a', '$b', '$c');",
            "odpB": "<strong>B. </strong>SELECT '$a', '$b', '$c' FROM dane;",
            "odpC": "<strong>C. </strong>INSERT INTO dane VALUES (NULL, '$a', '$b', '$c');",
            "odpD": "<strong>D. </strong>SELECT NULL, '$a', '$b', '$c' FROM dane;",
            "tresc": "Przedstawiony fragment kodu PHP ma za zadanie umieścić dane znajdujące się w zmiennych $a, $b, $c w bazie danych, w tabeli dane. Tabela dane zawiera cztery pola, z czego pierwsze to autoinkrementowany klucz główny. Które z poleceń powinno być przypisane do zmiennej $zapytanie?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 57,
            "header": "Pytanie nr 57 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>możliwość udostępnienia bazy danych",
            "odpB": "<strong>B. </strong>prawa dostępu do serwera bazy danych",
            "odpC": "<strong>C. </strong>spójność bazy danych",
            "odpD": "<strong>D. </strong>poprawność składni zapytań",
            "tresc": "Przed wykonaniem kopii bezpieczeństwa bazy danych, tak aby kopia ta była poprawna i możliwa do późniejszego odtworzenia, należy sprawdzić"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 47,
            "header": "Pytanie nr 47 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wprowadzenie w tabeli artykuly pola o nazwie cena ze znacznikiem kod",
            "odpB": "<strong>B. </strong>wprowadzenie w tabeli artykuly nowych pól cena i kod",
            "odpC": "<strong>C. </strong>w tabeli artykuly obniża wartość każdego pola cena dla którego pole kod jest równe 2",
            "odpD": "<strong>D. </strong>w tabeli artykuly obniża wartość każdego pola cena o 30% dla wszystkich artykułów",
            "tresc": "Polecenie SQL o treści: UPDATE artykuly SET cena = cena * 0.7 WHERE kod = 2; oznacza"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 278,
            "header": "Pytanie nr 278 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT * FROM ksiazki;",
            "odpB": "<strong>B. </strong>SELECT tytul FROM ksiazki;",
            "odpC": "<strong>C. </strong>SELECT tytul, data_wypoz FROM ksiazki WHERE data_wypoz = CURRDATENT_E();",
            "odpD": "<strong>D. </strong>SELECT tytul FROM ksiazki WHERE data_wypoz = CURRENT_DATE();",
            "tresc": "Baza danych zawiera tabelę ksiazki o polach: tytul, id_autora, data_wypoz, id_czytelnika. Każdego dnia generowany jest raport książek wypożyczonych danego dnia. Wyświetlane są jedynie tytuły książek. Która z kwerend SQL posłuży do stworzenia tego raportu?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 214,
            "header": "Pytanie nr 214 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/dccb0f9fba31fe0d.png",
            "odpA": "<strong>A. </strong>SELECT Imie, DataWystawienia FROM Recepta JOIN Lekarz ON Recepta.Lekarz_id = Lekarz.id;",
            "odpB": "<strong>B. </strong>SELECT Lekarz.Imie, Lekarz.Nazwisko, DataWystawienia FROM Recepta JOIN Lekarz ON Recepta.Lekarz_id = Lekarz.id;",
            "odpC": "<strong>C. </strong>SELECT Lekarz.Imie, Lekarz.Nazwisko, DataWystawienia FROM Recepta;",
            "odpD": "<strong>D. </strong>SELECT Imie, Nazwisko, DataWystawienia FROM Recepta;",
            "tresc": "W tabeli Recepta pola Imie i Nazwisko dotyczą pacjenta, na którego recepta jest wydana. Którą kwerendę należy zastosować, aby dla wszystkich recept uzyskać datę wystawienia recepty oraz imię i nazwisko lekarza wystawiającego?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 29,
            "header": "Pytanie nr 29 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT COUNT(Koty) AS ROWNUM",
            "odpB": "<strong>B. </strong>SELECT COUNT(*) FROM Koty",
            "odpC": "<strong>C. </strong>SELECT COUNT(ROWNUM) FROM Koty",
            "odpD": "<strong>D. </strong>SELECT ROWNUM() FROM Koty",
            "tresc": "Aby policzyć wszystkie wiersze tabeli Koty należy użyć polecenia:"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 174,
            "header": "Pytanie nr 174 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CREATE DATABASE",
            "odpB": "<strong>B. </strong>ALTER TABLE",
            "odpC": "<strong>C. </strong>INSERT INTO",
            "odpD": "<strong>D. </strong>CREATE TABLE",
            "tresc": "Aby utworzyć tabelę, należy się posłużyć poleceniem"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 136,
            "header": "Pytanie nr 136 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>tabeli mieszkania z bazy danych",
            "odpB": "<strong>B. </strong>tabel, w których pole status jest równe 1, z bazy danych mieszkania",
            "odpC": "<strong>C. </strong>pola o nazwie status z tabeli mieszkania",
            "odpD": "<strong>D. </strong>rekordów, w których pole status jest równe 1, z tabeli mieszkania",
            "tresc": "Zastosowanie kwerendy SQL: DELETE FROM mieszkania WHERE status=1; spowoduje usunięcie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 253,
            "header": "Pytanie nr 253 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/2bf71a97222521a9.png",
            "odpA": "<strong>A. </strong>Rafał, Rebeka, Renata, Roksana.",
            "odpB": "<strong>B. </strong>Krzysztof, Krystyna, Romuald.",
            "odpC": "<strong>C. </strong>Arleta, Krzysztof, Krystyna, Tristan.",
            "odpD": "<strong>D. </strong>Gerald, Jarosław, Marek, Tamara.",
            "tresc": "Dla których imion zastosowana w zapytaniu klauzula LIKE jest prawdziwa?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 92,
            "header": "Pytanie nr 92 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/307.jpg",
            "odpA": "<strong>A. </strong>aktualizowania danych i przeglądania tabeli",
            "odpB": "<strong>B. </strong>tworzenia tabeli i wypełniania jej danymi",
            "odpC": "<strong>C. </strong>tworzenia tabeli i aktualizowania w niej danych",
            "odpD": "<strong>D. </strong>przeglądania tabeli",
            "tresc": "W tabeli artykuly wykonano następujące polecenia dotyczące praw użytkowania jan. Po wykonaniu poleceń użytkownik jan będzie miał prawa do"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 162,
            "header": "Pytanie nr 162 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT imie, nazwisko FROM Pacjenci WHERE wiek&lt;18 OR lekarz_id=6;",
            "odpB": "<strong>B. </strong>SELECT imie, nazwisko WHERE wiek&lt;18 AND lekarz_id=6;",
            "odpC": "<strong>C. </strong>SELECT imie, nazwisko FROM Pacjenci WHERE wiek&lt;18 AND lekarz_id=6;",
            "odpD": "<strong>D. </strong>SELECT imie, nazwisko WHERE wiek&lt;18 OR lekarz_id=6;",
            "tresc": "Tabela Pacjenci ma pola: imie, nazwisko, wiek, lekarz_id. Aby zestawić raport zawierający wyłącznie imiona i nazwiska pacjentów poniżej 18 roku życia, którzy zapisani są do lekarza o id równym 6, można posłużyć się kwerendą SQL"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 163,
            "header": "Pytanie nr 163 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>modyfikować dane rekordów w tabeli",
            "odpB": "<strong>B. </strong>dodawać tabelę do bazy danych",
            "odpC": "<strong>C. </strong>usuwać tabelę z bazy danych",
            "odpD": "<strong>D. </strong>modyfikować kolumny w tabeli",
            "tresc": "W języku SQL polecenie ALTER TABLE ma za zadanie"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 50,
            "header": "Pytanie nr 50 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 OR 1500;",
            "odpB": "<strong>B. </strong>SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena BETWEEN 1000 AND 1500;",
            "odpC": "<strong>C. </strong>SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 AND 1500;",
            "odpD": "<strong>D. </strong>SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena FROM 1000 TO 1500;",
            "tresc": "Baza danych zawiera tabele artykuły z polami: nazwa, typ, producent, cena. Aby wyświetlić wszystkie nazwy artykułów wyłącznie typu pralka, dla których cena jest z przedziału 1000 PLN i 1500 PLN, należy zastosować polecenie"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 85,
            "header": "Pytanie nr 85 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>NOT NULL",
            "odpB": "<strong>B. </strong>DEFAULT",
            "odpC": "<strong>C. </strong>CHECK",
            "odpD": "<strong>D. </strong>NULL",
            "tresc": "Którą klauzulę powinno się zastosować w poleceniu CREATE TABLE języka SQL, aby dane pole rekordu nie było puste?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 151,
            "header": "Pytanie nr 151 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/546.jpg",
            "odpA": "<strong>A. </strong>Papier ksero A4, Kredki 24 kolory, Zeszyt A5 w linie, Zeszyt A5",
            "odpB": "<strong>B. </strong>Papier ksero A4, Kredki 24 kolory, Zeszyt A5, Zeszyt A5 w linie",
            "odpC": "<strong>C. </strong>Zeszyt A5, Zeszyt A5 w linie, Kredki 24 kolory, Papier ksero A4",
            "odpD": "<strong>D. </strong>Zeszyt A5 w linie, Zeszyt A5, Kredki 24 kolory, Papier ksero A4",
            "tresc": "Na podstawie tabeli Towar wykonano następujące zapytanie SQL. Jaki będzie wynik tej operacji?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 146,
            "header": "Pytanie nr 146 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>... stawka float CHECK(stawka IN (0, 50.00))",
            "odpB": "<strong>B. </strong>... stawka float CHECK(stawka&gt;0 OR stawka&lt;50.00)",
            "odpC": "<strong>C. </strong>... stawka float CHECK(stawka BETWEEN 0 AND 50.00)",
            "odpD": "<strong>D. </strong>... stawka float CHECK(stawka&gt;0 AND stawka&lt;50.00)",
            "tresc": "Aby w tworzonej w języku SQL tabeli praca dodać w kolumnie stawka warunek, że musi przyjmować rzeczywiste wartości dodatnie mniejsze od 50, należy użyć zapisu"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 86,
            "header": "Pytanie nr 86 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/301.jpg",
            "odpA": "<strong>A. </strong>dodaje do tabeli dwie kolumny o nazwach: kod i text",
            "odpB": "<strong>B. </strong>zamienia nazwę tabeli miasta na nazwę kod",
            "odpC": "<strong>C. </strong>dodaje do tabeli kolumnę o nazwie kod typu text",
            "odpD": "<strong>D. </strong>w tabeli miasta zamienia nazwę kolumny kod na nazwę text",
            "tresc": "Polecenie języka SQL w postaci"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 105,
            "header": "Pytanie nr 105 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Blokowanie portów związanych z bazą danych",
            "odpB": "<strong>B. </strong>Defragmentacja dysków",
            "odpC": "<strong>C. </strong>Stosowanie złożonych haseł do bazy",
            "odpD": "<strong>D. </strong>Włączenie zapory",
            "tresc": "Do zabezpieczeń serwera bazy danych przed atakami hakerów nie należy"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 59,
            "header": "Pytanie nr 59 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>MS SQL",
            "odpB": "<strong>B. </strong>MS ACCESS",
            "odpC": "<strong>C. </strong>PostgreSQL",
            "odpD": "<strong>D. </strong>mySQL",
            "tresc": "Polecenie pg_connect języka PHP służy do połączenia z bazą"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 147,
            "header": "Pytanie nr 147 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/512.jpg",
            "odpA": "<strong>A. </strong>Doda kolumnę plec ze znakowym typem danych o zmiennej długości 9",
            "odpB": "<strong>B. </strong>Doda kolumnę plec ze znakowym typem danych o stałej długości 9",
            "odpC": "<strong>C. </strong>Zmieni typ danych kolumny plec na znakowy o zmiennej długości 9",
            "odpD": "<strong>D. </strong>Zmieni typ danych kolumny plec na znakowy o stałej długości 9",
            "tresc": "W jaki sposób wykonanie podanej w ramce kwerendy SQL wpłynie na tabelę pracownicy?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 122,
            "header": "Pytanie nr 122 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"%i%\";",
            "odpB": "<strong>B. </strong>SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"i%\";",
            "odpC": "<strong>C. </strong>SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"i\";",
            "odpD": "<strong>D. </strong>SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"%i\";",
            "tresc": "Wyszukując z tabeli Pracownicy wyłącznie nazwiska, w których ostatnią literą jest \"i\", można użyć kwerendy SQL"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 219,
            "header": "Pytanie nr 219 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ALTER",
            "odpB": "<strong>B. </strong>INSERT INTO",
            "odpC": "<strong>C. </strong>SELECT",
            "odpD": "<strong>D. </strong>UPDATE",
            "tresc": "Aby przesłać dane za pomocą funkcji mysqli_query() w skrypcie PHP, który wstawia do bazy danych dane pobrane z formularza ze strony internetowej, jako jednego z parametrów należy użyć kwerendy"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 52,
            "header": "Pytanie nr 52 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>klucz sztuczny odnoszący się do kluczy podstawowych obu tabel",
            "odpB": "<strong>B. </strong>klucz obcy wskazujący na klucz obcy tabeli po stronie <i>jeden</i>",
            "odpC": "<strong>C. </strong>klucz podstawowy wskazujący na klucz podstawowy tabeli po stronie <i>jeden</i>",
            "odpD": "<strong>D. </strong>klucz obcy wskazujący na klucz podstawowy tabeli po stronie <i>jeden</i>",
            "tresc": "Aby utworzyć relację jeden do wielu, w tabeli po stronie wiele, należy zdefiniować"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 169,
            "header": "Pytanie nr 169 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/604.jpg",
            "odpA": "<strong>A. </strong>Liczby wierszy znajdujących się w bazie danych",
            "odpB": "<strong>B. </strong>Liczby wierszy tabeli produkty, dla których pole status jest większe od zera",
            "odpC": "<strong>C. </strong>Liczby wierszy przetworzonych zapytaniem DELETE FROM",
            "odpD": "<strong>D. </strong>Liczby wierszy dodanych do tabeli produkty",
            "tresc": "Jaką wartość przyjmie zmienna x po wykonaniu kodu PHP przedstawionego w ramce?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 216,
            "header": "Pytanie nr 216 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE Studenci SET RokStudiow = RokStudiow+1 WHERE RokStudiow &lt; 5;",
            "odpB": "<strong>B. </strong>UPDATE RokStudiow SET RokStudiow++ WHERE RokStudiow &lt; 5;",
            "odpC": "<strong>C. </strong>UPDATE Studenci SET RokStudiow WHERE RokStudiow &lt; 5;",
            "odpD": "<strong>D. </strong>UPDATE Studenci, RokStudiow+1 WHERE RokStudiow &lt; 5;",
            "tresc": "Które polecenie służy do zmiany wartości o jeden w polu RokStudiów w tabeli Studenci dla studentów, którzy studiują na roku 1÷4?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 157,
            "header": "Pytanie nr 157 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CREATE INTO",
            "odpB": "<strong>B. </strong>CREATE ROW",
            "odpC": "<strong>C. </strong>SELECT ROW",
            "odpD": "<strong>D. </strong>INSERT INTO",
            "tresc": "W języku SQL, aby wstawić wiersz danych do bazy, należy zastosować polecenie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 204,
            "header": "Pytanie nr 204 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>atomic, consistent, iss, dependable.",
            "odpB": "<strong>B. </strong>atomic, comming, is, do.",
            "odpC": "<strong>C. </strong>atomic, consistent, isolated, durable.",
            "odpD": "<strong>D. </strong>atomic, constaint, isolated, dependable.",
            "tresc": "Rozwinięcie słowne akronimu ACID w SQL to"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 166,
            "header": "Pytanie nr 166 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/589.jpg",
            "odpA": "<strong>A. </strong>dla użytkownika root na serwerze localhost",
            "odpB": "<strong>B. </strong>do wszystkich pól w tabeli hurtownia",
            "odpC": "<strong>C. </strong>dla użytkownika root na serwerze sprzedawca",
            "odpD": "<strong>D. </strong>do wszystkich tabel w bazie hurtownia",
            "tresc": "Podane polecenie SQL nadaje prawo SELECT"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 180,
            "header": "Pytanie nr 180 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ALTER TABLE Mieszkancy;",
            "odpB": "<strong>B. </strong>TRUNCATE TABLE Mieszkancy;",
            "odpC": "<strong>C. </strong>DELETE FROM Mieszkancy;",
            "odpD": "<strong>D. </strong>DROP TABLE Mieszkancy;",
            "tresc": "W bazie danych zdefiniowano tabelę Mieszkancy wypełnioną danymi. Aby usunąć tę tabelę wraz z zawartością, należy posłużyć się poleceniem"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 126,
            "header": "Pytanie nr 126 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>klucza PRIMARY KEY z wartością NOT NULL i UNIQUE",
            "odpB": "<strong>B. </strong>klucza FOREIGN KEY z wartością NOT NULL",
            "odpC": "<strong>C. </strong>kluczy PRIMARY KEY i FOREIGN KEY",
            "odpD": "<strong>D. </strong>klucza obcego z wartością NOT NULL i UNIQUE",
            "tresc": "Do poprawnego i spójnego działania bazy danych niezbędne jest umieszczenie w każdej tabeli"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 164,
            "header": "Pytanie nr 164 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/587.jpg",
            "odpA": "<strong>A. </strong>ustawić wartość kolumny id_klasy na 1 dla wszystkich rekordów w tabeli Uczen",
            "odpB": "<strong>B. </strong>zwiększyć o jeden wartość kolumny id_klasy dla wszystkich rekordów tabeli Uczen",
            "odpC": "<strong>C. </strong>Ustawić na 1 wartość pola Uczen",
            "odpD": "<strong>D. </strong>zwiększyć o jeden wartość pola Uczen",
            "tresc": "Podane polecenie SQL ma za zadanie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 64,
            "header": "Pytanie nr 64 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT model FROM podzespoly WHERE typ=\"RAM\" AND producent=\"Kingston\" ORDER BY cena DESC;",
            "odpB": "<strong>B. </strong>SELECT model FROM producent WHERE typ=\"RAM\" OR producent=\"Kingston\" ORDER BY podzespoly ASC;",
            "odpC": "<strong>C. </strong>SELECT model FROM podzespoly WHERE typ=\"RAM\" AND producent=\"Kingston\" ORDER BY cena ASC;",
            "odpD": "<strong>D. </strong>SELECT model FROM podzespoly WHERE typ=\"RAM\" OR producent=\"Kingston\" ORDER BY cena DESC;",
            "tresc": "Zdefiniowano bazę danych z tabelą podzespoły o polach: model, producent, typ, cena. Aby wyświetlić wszystkie modele pamięci RAM firmy Kingston w kolejności od najtańszej do najdroższej, należy posłużyć się kwerendą:"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 110,
            "header": "Pytanie nr 110 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT * FROM wycieczki WHERE cena &lt; 2000 OR miejsca &gt; 3;",
            "odpB": "<strong>B. </strong>SELECT * FROM wycieczki WHERE cena &lt; 2000 AND miejsca &gt; 4;",
            "odpC": "<strong>C. </strong>SELECT nazwa FROM wycieczki WHERE cena &lt; 2000 OR miejsca &gt; 4;",
            "odpD": "<strong>D. </strong>SELECT nazwa FROM wycieczki WHERE cena &lt; 2000 AND miejsca &gt; 3;",
            "tresc": "Dana jest tabela o nazwie wycieczki z polami: nazwa, cena, miejsca (jako liczba wolnych miejsc). Aby dla dowolnego zbioru danych tabeli wyświetlić jedynie nazwy tych wycieczek, dla których cena jest niższa niż 2000 zł i mają przynajmniej cztery wolne miejsca, należy posłużyć się zapytaniem"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 184,
            "header": "Pytanie nr 184 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>jedynie utworzenie tabel i relacji w bazie",
            "odpB": "<strong>B. </strong>sprawdzenie i optymalizację bazy danych",
            "odpC": "<strong>C. </strong>dodanie rekordów do bazy",
            "odpD": "<strong>D. </strong>przedstawienie graficzne bazy",
            "tresc": "Normalizacja tabel jest procesem, który ma na celu"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 202,
            "header": "Pytanie nr 202 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CHANGE TABLE klienci MODIFY imie CHAR(30);",
            "odpB": "<strong>B. </strong>ALTER TABLE klienci CHANGE imie TEXT;",
            "odpC": "<strong>C. </strong>CHANGE TABLE klienci TO COLUMN imie SET CHAR(30);",
            "odpD": "<strong>D. </strong>ALTER TABLE klienci MODIFY COLUMN imie VARCHAR(30);",
            "tresc": "Aby zmienić maksymalną długość pola imie w tabeli klienci na 30 znaków, należy użyć w języku SQL następującego kodu"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 154,
            "header": "Pytanie nr 154 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/549.jpg",
            "odpA": "<strong>A. </strong>polami",
            "odpB": "<strong>B. </strong>atrybutami",
            "odpC": "<strong>C. </strong>krotkami",
            "odpD": "<strong>D. </strong>encjami",
            "tresc": "W przedstawionym diagramie bazy danych biblioteka, elementy: czytelnik, wypozyczenie i ksiazka są"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 165,
            "header": "Pytanie nr 165 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>utworzenie użytkownika i nadanie mu praw do bazy",
            "odpB": "<strong>B. </strong>utworzenie użytkownika",
            "odpC": "<strong>C. </strong>zmodyfikowanie hasła istniejącego użytkownika",
            "odpD": "<strong>D. </strong>wyświetlenie informacji o istniejącym użytkowniku",
            "tresc": "W bazie danych MySQL polecenie CREATE USER umożliwia"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 88,
            "header": "Pytanie nr 88 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT MAX(ilosc_kodu) FROM programisci",
            "odpB": "<strong>B. </strong>SELECT SUM(ocena) FROM ilosc_kodu;",
            "odpC": "<strong>C. </strong>SELECT COUNT(programisci) FROM ilosc_kodu;",
            "odpD": "<strong>D. </strong>SELECT SUM(ilosc_kodu) FROM programisci;",
            "tresc": "Dana jest tabela programiści o polach: id, nick, ilosc_kodu, ocena. Pole ilosc_kodu zawiera liczbę linii kodu napisanych przez programistę w danym miesiącu. Aby policzyć sumę linii kodu, który napisali wszyscy programiści, należy użyć polecenia"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 179,
            "header": "Pytanie nr 179 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>raport",
            "odpB": "<strong>B. </strong>zapytanie",
            "odpC": "<strong>C. </strong>formularz",
            "odpD": "<strong>D. </strong>zestawienie",
            "tresc": "Obiektem służącym w bazie danych do podsumowywania, wyświetlania i wydruków danych jest"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 230,
            "header": "Pytanie nr 230 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>zawierać wartości liczbowe.",
            "odpB": "<strong>B. </strong>zawierać ciągłą numerację.",
            "odpC": "<strong>C. </strong>zawierać unikalne wartości.",
            "odpD": "<strong>D. </strong>być innego typu niż pozostałe kolumny.",
            "tresc": "Kolumna pełniąca rolę klucza głównego w tabeli musi"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 111,
            "header": "Pytanie nr 111 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>AVG SELECT ocena FROM przedmioty WHERE uczenID = 7;",
            "odpB": "<strong>B. </strong>SELECT COUNT(ocena) FROM przedmioty WHERE uczenID = 7;",
            "odpC": "<strong>C. </strong>COUNT SELECT ocena FROM przedmioty WHERE uczenID = 7;",
            "odpD": "<strong>D. </strong>SELECT AVG(ocena) FROM przedmioty WHERE uczenID = 7;",
            "tresc": "Dana jest tabela o nazwie przedmioty z polami: ocena i uczenID. Aby policzyć średnią ocen ucznia o ID równym 7, należy posłużyć się zapytaniem"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 196,
            "header": "Pytanie nr 196 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/683.jpg",
            "odpA": "<strong>A. </strong>Obsługa błędu połączenia",
            "odpB": "<strong>B. </strong>Zamknięcie bazy danych",
            "odpC": "<strong>C. </strong>Obsługa danych pobranych z bazy",
            "odpD": "<strong>D. </strong>Komunikat o pomyślnym połączeniu z bazą",
            "tresc": "Przedstawiony kod PHP nawiązuje połączenie z serwerem bazy danych. Jakiego typu operacje powinny się znaleźć w instrukcji warunkowej w miejscu trzech kropek?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 69,
            "header": "Pytanie nr 69 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>tworzenie, modyfikowanie, usuwanie i odzyskiwanie bazy danych",
            "odpB": "<strong>B. </strong>zarządzanie bezpieczeństwem systemu",
            "odpC": "<strong>C. </strong>zarządzanie plikami na dysku",
            "odpD": "<strong>D. </strong>wykonywanie każdej operacji na serwerze i posiadanie prawa własności każdej bazy",
            "tresc": "W MS SQL Server predefiniowana rola o nazwie dbcreator pozwala użytkownikowi na"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 181,
            "header": "Pytanie nr 181 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>REVOKE",
            "odpB": "<strong>B. </strong>GRANT NO PRIVILEGES",
            "odpC": "<strong>C. </strong>DELETE PRIVILEGES",
            "odpD": "<strong>D. </strong>DELETE",
            "tresc": "Aby odebrać uprawnienia użytkownikowi, należy zastosować polecenie"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 258,
            "header": "Pytanie nr 258 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>TRUNCATE TABLE",
            "odpB": "<strong>B. </strong>ALTER COLUMN",
            "odpC": "<strong>C. </strong>INSERT INTO",
            "odpD": "<strong>D. </strong>CREATE COLUMN",
            "tresc": "Aby usunąć wszystkie rekordy z tabeli należy zastosować kwerendę"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 26,
            "header": "Pytanie nr 26 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>||",
            "odpB": "<strong>B. </strong>%",
            "odpC": "<strong>C. </strong>&amp;",
            "odpD": "<strong>D. </strong>/",
            "tresc": "Operator arytmetyczny modulo w języku SQL to"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 73,
            "header": "Pytanie nr 73 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CHANGE",
            "odpB": "<strong>B. </strong>REPAIR",
            "odpC": "<strong>C. </strong>FIX",
            "odpD": "<strong>D. </strong>UPDATE",
            "tresc": "Aby naprawić bazę danych w MySQL, należy użyć polecenia"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 229,
            "header": "Pytanie nr 229 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>formularzem.",
            "odpB": "<strong>B. </strong>kwerendą.",
            "odpC": "<strong>C. </strong>kolumną.",
            "odpD": "<strong>D. </strong>kopią.",
            "tresc": "Polecenie wysyłane do serwera bazy danych, polegające na zbieraniu, poszukiwaniu lub modyfikowaniu danych w bazie jest nazywane"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 140,
            "header": "Pytanie nr 140 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/505.jpg",
            "odpA": "<strong>A. </strong>Czesław, Niemen",
            "odpB": "<strong>B. </strong>Czesław, Czechowski",
            "odpC": "<strong>C. </strong>Czesław",
            "odpD": "<strong>D. </strong>pusty wynik",
            "tresc": "Na tabeli muzyka, przedstawionej na rysunku, zostało wykonane następujące zapytanie SQL. Jaki wynik zwróci ta kwerenda?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 40,
            "header": "Pytanie nr 40 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>tabelę A połączy się z tabelą B poprzez zdefiniowanie kluczy obcych",
            "odpB": "<strong>B. </strong>tabela A będzie zawierała te same pola co tabela B",
            "odpC": "<strong>C. </strong>zdefiniuje się trzecią tabelę z kluczami obcymi do tabel A i B",
            "odpD": "<strong>D. </strong>wiele rekordów z tabeli A zduplikuje się w tabeli B",
            "tresc": "W celu stworzenia relacji wiele do wielu łączącej tabele A i B wystarczy, że"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 23,
            "header": "Pytanie nr 23 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>mysqldump -u root -p baza &lt; kopia.sql",
            "odpB": "<strong>B. </strong>mysqldump -u root -p baza &gt; kopia.sql",
            "odpC": "<strong>C. </strong>mysql -u root -p baza &lt; kopia.sql",
            "odpD": "<strong>D. </strong>mysql -u root -p baza &gt; kopia.sql",
            "tresc": "Które polecenie wydane z konsoli systemowej dokona przywrócenia bazy danych?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 94,
            "header": "Pytanie nr 94 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Wykonanie replikacji bazy danych",
            "odpB": "<strong>B. </strong>Próba naprawy poleceniem REPAIR",
            "odpC": "<strong>C. </strong>Stworzenie nowej bazy i przeniesienie do niej tabel",
            "odpD": "<strong>D. </strong>Odtworzenie bazy z kopii bezpieczeństwa",
            "tresc": "Baza danych MySQL uległa uszkodzeniu. Które z działań NIE pomoże przy jej naprawie?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 120,
            "header": "Pytanie nr 120 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" AND rok_urodzenia &gt; \"1998\";",
            "odpB": "<strong>B. </strong>SELECT * FROM Uczniowie WHERE imie =\"Aleksandra\" OR rok_urodzenia &lt; \"1998\";",
            "odpC": "<strong>C. </strong>SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" AND rok_urodzenia &lt; \"1998\";",
            "odpD": "<strong>D. </strong>SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" OR rok_urodzenia &gt; \"1998\";",
            "tresc": "W języku SQL dla dowolnych zestawów danych w tabeli Uczniowie, aby wybrać rekordy, które zawierają wyłącznie uczennice o imieniu \"Aleksandra\", urodzone po roku \"1998\", należy zapisać zapytanie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 236,
            "header": "Pytanie nr 236 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>GRANT SELECT, UPDATE ON gazeta.* TO 'redaktor'@'localhost';",
            "odpB": "<strong>B. </strong>GRANT SELECT, ALTER ON gazeta.* TO 'redaktor'@'localhost';",
            "odpC": "<strong>C. </strong>REVOKE SELECT, UPDATE ON gazeta.* FROM 'redaktor'@'localhost';",
            "odpD": "<strong>D. </strong>REVOKE SELECT, ALTER ON gazeta.* FROM 'redaktor'@'localhost';",
            "tresc": "Za pomocą którego zapytania Administrator odbierze prawo przeglądania oraz aktualizacji danych w bazie gazeta, dla użytkownika redaktor?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 170,
            "header": "Pytanie nr 170 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>łączyć go z innymi kluczami obcymi tabeli",
            "odpB": "<strong>B. </strong>stworzyć formularz wpisujący dane do tabeli",
            "odpC": "<strong>C. </strong>zdefiniować relację 1..n wiążącą go z kluczem głównym innej tabeli",
            "odpD": "<strong>D. </strong>umożliwić jednoznaczną identyfikację rekordu w tabeli",
            "tresc": "Klucz obcy w tabeli jest tworzony po to, aby"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 183,
            "header": "Pytanie nr 183 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>1..1",
            "odpB": "<strong>B. </strong>1..n",
            "odpC": "<strong>C. </strong>n..n",
            "odpD": "<strong>D. </strong>n..1",
            "tresc": "W relacyjnych bazach danych, jeżeli dwie tabele są połączone za pomocą ich kluczy głównych, mamy do czynienia z relacją"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 77,
            "header": "Pytanie nr 77 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT",
            "odpB": "<strong>B. </strong>UPDATE",
            "odpC": "<strong>C. </strong>CHECK TABLE",
            "odpD": "<strong>D. </strong>INSERT INTO",
            "tresc": "W bazie danych sklepu spożywczego pod koniec dnia jest tworzony raport wyświetlający te produkty wraz z ich dostawcami, dla których stan magazynowy jest mniejszy niż 10 sztuk. Do zdefiniowania tego raportu posłużono się kwerendą"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 293,
            "header": "Pytanie nr 293 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/FDQcJw3GBn.png",
            "odpA": "<strong>A. </strong>jedynie tworzyć i modyfikować strukturę tabel.",
            "odpB": "<strong>B. </strong>wykonywać wszystkie akcje na danych.",
            "odpC": "<strong>C. </strong>jedynie dodawać i modyfikować dane.",
            "odpD": "<strong>D. </strong>wykonywać wszystkie operacje na strukturze danych.",
            "tresc": "Po wydaniu polecenia SQL prezentowanego w ramce użytkownik Ela będzie mógł"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 145,
            "header": "Pytanie nr 145 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE tab SET kol='Zosia' WHERE kol='Ania';",
            "odpB": "<strong>B. </strong>UPDATE tab SET kol='Ania' WHERE kol='Zosia';",
            "odpC": "<strong>C. </strong>ALTER TABLE tab CHANGE kol='Zosia' kol='Ania';",
            "odpD": "<strong>D. </strong>ALTER TABLE tab CHANGE kol='Ania' kol='Zosia';",
            "tresc": "Które polecenie SQL zamieni w tabeli tab w kolumnie kol wartość Ania na Zosia?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 281,
            "header": "Pytanie nr 281 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/7DPn7ndjL.png",
            "odpA": "<strong>A. </strong>Adamowi i Annie.",
            "odpB": "<strong>B. </strong>Tomaszowi i Annie.",
            "odpC": "<strong>C. </strong>tylko Annie.",
            "odpD": "<strong>D. </strong>Tomaszowi i Adamowi.",
            "tresc": "W języku SQL, po wykonaniu przedstawionych poleceń GRANT, prawo do zmiany struktury tabeli oraz jej usuwania zostanie przypisane"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 11,
            "header": "Pytanie nr 11 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Z przywilejami systemowymi",
            "odpB": "<strong>B. </strong>Z atrybutami",
            "odpC": "<strong>C. </strong>Z przywilejami obiektowymi",
            "odpD": "<strong>D. </strong>Z regułami ",
            "tresc": "Z jakimi mechanizmami nadawania zabezpieczeń, dającymi możliwości wykonywania operacji na bazie danych, związane są zagadnienia zarządzania kontami, użytkownikami i uprawnieniami?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 190,
            "header": "Pytanie nr 190 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wywołać funkcję agregującą",
            "odpB": "<strong>B. </strong>otrzymać wynik jedynie z jednej tabeli",
            "odpC": "<strong>C. </strong>uzyskać wyniki z dwóch tabel pozostających ze sobą w relacji",
            "odpD": "<strong>D. </strong>zdefiniować klucz obcy dla tabeli",
            "tresc": "Zapytanie z klauzulą JOIN stosuje się, aby"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 231,
            "header": "Pytanie nr 231 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>MIN ",
            "odpB": "<strong>B. </strong>AVG",
            "odpC": "<strong>C. </strong>COUNT",
            "odpD": "<strong>D. </strong>SUM",
            "tresc": "Która z wbudowanych funkcji agregujących języka SQL oblicza średnią wartości we wskazanej kolumnie?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 1,
            "header": "Pytanie nr 1 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SQL DQL (ang. Data Query Language)",
            "odpB": "<strong>B. </strong>SQL DML (ang. Data Manipulation Language)",
            "odpC": "<strong>C. </strong>SQL DCL (ang. Data Control Language)",
            "odpD": "<strong>D. </strong>SQL DDL (ang. Data Definition Language)",
            "tresc": "Jak nazywa się podzbiór strukturalnego języka zapytań, związany z formułowaniem zapytań do bazy danych za pomocą polecenia SELECT?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 255,
            "header": "Pytanie nr 255 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>TIMESTAMP",
            "odpB": "<strong>B. </strong>DATE",
            "odpC": "<strong>C. </strong>BOOLEAN",
            "odpD": "<strong>D. </strong>YEAR",
            "tresc": "Którego typu danych w bazie MySQL należy użyć, aby przechować w jednym polu datę i czas?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 38,
            "header": "Pytanie nr 38 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>REPAIR TABLE tblname",
            "odpB": "<strong>B. </strong>ANALYZE TABLE tbl_name",
            "odpC": "<strong>C. </strong>REGENERATE TABLE tbl_name",
            "odpD": "<strong>D. </strong>OPTIMIZE TABLE tbl_name",
            "tresc": "Które z poleceń naprawi uszkodzoną tabelę w języku SQL?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 116,
            "header": "Pytanie nr 116 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/389.jpg",
            "odpA": "<strong>A. </strong>zarządzania strukturą tabeli klienci",
            "odpB": "<strong>B. </strong>zarządzania strukturą bazy danych klienci",
            "odpC": "<strong>C. </strong>manipulowania danymi bazy danych klienci",
            "odpD": "<strong>D. </strong>manipulowania danymi w tabeli klienci",
            "tresc": "Przedstawione polecenie SQL, użytkownikowi adam@localhost nadaje prawa"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 177,
            "header": "Pytanie nr 177 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/623.jpg",
            "odpA": "<strong>A. </strong>Lekarze.id = Pacjenci.Recepty_id",
            "odpB": "<strong>B. </strong>Lekarze.id = Pacjenci.id",
            "odpC": "<strong>C. </strong>Lekarze.id = Pacjenci.Lekarze_id",
            "odpD": "<strong>D. </strong>Lekarze.id = Recepty.id",
            "tresc": "Przedstawiona baza danych zawiera trzy tabele i dwie relacje. Aby wyświetlić dane wszystkich lekarzy przypisanych do konkretnego pacjenta, należy przyrównać klucze"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 274,
            "header": "Pytanie nr 274 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/LnpcmNwRc4.png",
            "odpA": "<strong>A. </strong>jedynie nazwa oraz numer NIP firm, które w ostatnim miesiącu miały obrót mniejszy niż 4000 zł.",
            "odpB": "<strong>B. </strong>jedynie nazwa oraz numer NIP firm, które w ostatnim miesiącu miały obrót co najmniej 4000 zł.",
            "odpC": "<strong>C. </strong>wszystkie dane firm, które w ostatnim miesiącu miały obrót mniejszy niż 4000 zł.",
            "odpD": "<strong>D. </strong>wszystkie dane firm, które w ostatnim miesiącu miały obrót co najmniej 4000 zł.",
            "tresc": "Dana jest tabela firmy zawierająca następujące kolumny: nazwa, adres, NIP, obrot (obrót w ostatnim miesiącu), rozliczenie, status. Wykonanie kwerendy SQL SELECT sprawi, że zostaną wyświetlone"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 292,
            "header": "Pytanie nr 292 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE faktury SET dataPlatnosci=CURTIME() WHERE id = 3;",
            "odpB": "<strong>B. </strong>UPDATE faktury SET dataPlatnosci=CURTIME() WHERE dataPlatnosci IS NOT NULL;",
            "odpC": "<strong>C. </strong>UPDATE faktury SET dataPlatnosci=CURDATE() WHERE dataPlatnosci IS NULL;",
            "odpD": "<strong>D. </strong>UPDATE faktury SET dataPlatnosci=CURDATE() WHERE dataplatnosci = '0000-00- 00 ';",
            "tresc": "Sklep internetowy korzysta z tabeli faktury. Podczas tworzenia faktury nie zawsze pole dataPlatnosci jest wypełniane. Aby to naprawić, na koniec dnia należy wpisać aktualną datę do wierszy, w których to pole jest puste (niewypełnione). Można w tym celu posłużyć się kwerendą"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 12,
            "header": "Pytanie nr 12 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>folderu sieciowego",
            "odpB": "<strong>B. </strong>dzielonej bazy danych",
            "odpC": "<strong>C. </strong>serwera bazy danych ",
            "odpD": "<strong>D. </strong>witryny programu SharePoint",
            "tresc": "Metoda udostępniania bazy danych w programie Microsoft Access, dotycząca wszystkich obiektów bazy umieszczonych na dysku sieciowym i używanych jednocześnie przez różne osoby nosi nazwę"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 285,
            "header": "Pytanie nr 285 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwisko FROM klienci LIMIT 3;",
            "odpB": "<strong>B. </strong>SELECT LIMIT 3 nazwisko FROM klienci ORDER BY nazwisko DESC;",
            "odpC": "<strong>C. </strong>SELECT nazwisko FROM klienci ORDER BY nazwisko DESC LIMIT 3;",
            "odpD": "<strong>D. </strong>SELECT nazwisko FROM klienci ORDER BY punkty DESC LIMIT 3;",
            "tresc": "Wskaż kwerendę, która z tabeli klienci wybierze jedynie nazwiska trzech najlepszych klientów, czyli takich, którzy na swoim koncie mają najwięcej punktów (pole całkowite punkty)."
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 241,
            "header": "Pytanie nr 241 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT SUM(id), klasa FROM uczniowie ORDER BY klasa;",
            "odpB": "<strong>B. </strong>SELECT COUNT(id), klasa FROM uczniowie ORDER BY klasa;",
            "odpC": "<strong>C. </strong>SELECT SUM(id), klasa FROM uczniowie GROUP BY klasa;",
            "odpD": "<strong>D. </strong>SELECT COUNT(id), klasa FROM uczniowie GROUP BY klasa;",
            "tresc": "Dana jest tabela uczniowie o polach id, nazwisko, imie, klasa. Które zapytanie SQL wyświetli liczbę osób w poszczególnych klasach oraz nazwę klasy?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 100,
            "header": "Pytanie nr 100 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.id ...",
            "odpB": "<strong>B. </strong>... filmy JOIN rezyserzy ON filmy.id = rezyserzy.filmyID ...",
            "odpC": "<strong>C. </strong>... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.filmyID ...",
            "odpD": "<strong>D. </strong>... filmy JOIN rezyserzy ON filmy.id = rezyserzy.id ...",
            "tresc": "Tabela filmy zawiera klucz główny id oraz klucz obcy rezyserID. Tabela rezyserzy zawiera klucz główny id. Obydwie tabele połączone są relacją jeden po stronie rezyserzy do wielu po stronie filmy. Aby w kwerendzie SELECT połączyć tabele filmy i rezyserzy, należy zapisać"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 290,
            "header": "Pytanie nr 290 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>INTEGER(11)",
            "odpB": "<strong>B. </strong>. ENUM",
            "odpC": "<strong>C. </strong>TINYTEXT",
            "odpD": "<strong>D. </strong>DECIMAL(10, 2)",
            "tresc": "Podczas tworzenia tabeli produkty należy utworzyć pole cena będące reprezentacją ceny produktu. Odpowiedni typ dla tego pola, to"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 143,
            "header": "Pytanie nr 143 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/508.jpg",
            "odpA": "<strong>A. </strong>Tabela jest w pierwszej postaci normalnej",
            "odpB": "<strong>B. </strong>Tabela jest w drugiej postaci normalnej",
            "odpC": "<strong>C. </strong>Tabela jest w trzeciej postaci normalnej",
            "odpD": "<strong>D. </strong>Tabela nie jest znormalizowana",
            "tresc": "Co można powiedzieć o normalizacji przedstawionej tabeli?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 187,
            "header": "Pytanie nr 187 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SUM",
            "odpB": "<strong>B. </strong>COUNT",
            "odpC": "<strong>C. </strong>NUMBER",
            "odpD": "<strong>D. </strong>AVG",
            "tresc": "Funkcją agregującą zwracającą liczbę rekordów jest"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 10,
            "header": "Pytanie nr 10 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Projektanci narzędzi deweloperskich",
            "odpB": "<strong>B. </strong>Administratorzy systemu bazy danych",
            "odpC": "<strong>C. </strong>Projektanci i programiści Systemu Zarządzania Bazą Danych.",
            "odpD": "<strong>D. </strong>Administratorzy serwerów i sieci komputerowych",
            "tresc": "Które z wymienionych osób odpowiadają za przygotowanie systemu bazy danych do pracy produkcyjnej w sposób ciągły, zarządzanie użytkownikami i instalowanie nowych wersji systemu bazodanowego?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 125,
            "header": "Pytanie nr 125 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wybór bazy, zapytanie do bazy, nawiązanie połączenia z serwerem baz danych, wyświetlenie na stronie WWW, zamknięcie połączenia",
            "odpB": "<strong>B. </strong>wybór bazy danych, nawiązanie połączenia z serwerem baz danych, zapytanie do bazy, wyświetlenie na stronie WWW, zamknięcie połączenia",
            "odpC": "<strong>C. </strong>zapytanie do bazy, wybór bazy, wyświetlenie na stronie WWW, zamknięcie połączenia",
            "odpD": "<strong>D. </strong>nawiązanie połączenia z serwerem baz danych, wybór bazy, zapytanie do bazy - wyświetlane na stronie WWW, zamknięcie połączenia",
            "tresc": "Właściwym zestawem kroków według kolejności, które należy wykonać w celu nawiązania współpracy między aplikacją internetową po stronie serwera a bazą SQL, jest"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 72,
            "header": "Pytanie nr 72 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>sprawdzi spójność określonej tabeli i naprawi uszkodzone rekordy",
            "odpB": "<strong>B. </strong>sprawdzi spójność określonej tabeli",
            "odpC": "<strong>C. </strong>sprawdzi spójność bazy danych i naprawi uszkodzone indeksy",
            "odpD": "<strong>D. </strong>sprawdzi spójność bazy danych i wykona kopię bezpieczeństwa",
            "tresc": "Polecenie DBCC CHECKDB(\"sklepAGD\", Repair_fast) w MS SQL Server"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 212,
            "header": "Pytanie nr 212 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwisko FROM mieszkancy ORDER BY nazwisko;",
            "odpB": "<strong>B. </strong>SELECT DISTINCT nazwisko FROM mieszkancy;",
            "odpC": "<strong>C. </strong>SELECT AVG(nazwisko) FROM mieszkancy;",
            "odpD": "<strong>D. </strong>SELECT TOP 10 nazwisko FROM mieszkancy;",
            "tresc": "Aby za pomocą polecenia SELECT wyświetlić nazwiska osób mieszkających na osiedlu tak, aby te nazwiska nie powtarzały się, należy zapisać zapytanie w postaci"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 128,
            "header": "Pytanie nr 128 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/462.jpg",
            "odpA": "<strong>A. </strong>Wszystkie dane tych mieszkań, które mają co najmniej 3 pokoje",
            "odpB": "<strong>B. </strong>Metraż oraz cena tych mieszkań, które mają co najmniej niż 3 pokoje",
            "odpC": "<strong>C. </strong>Wszystkie dane oprócz adresu tych mieszkań, które mają więcej niż 3 pokoje",
            "odpD": "<strong>D. </strong>Metraż oraz cena tych mieszkań, które mają więcej niż 3 pokoje",
            "tresc": "Dana jest tabela mieszkania zawierająca kolumny o nazwach: adres, metraz, ile_pokoi, standard, status, cena. Wykonanie przedstawionej kwerendy SQL SELECT sprawi, że zostaną wyświetlone"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 109,
            "header": "Pytanie nr 109 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Liczbę wierszy zwróconych kwerendą",
            "odpB": "<strong>B. </strong>długość znaków w zwróconych kwerendą rekordach",
            "odpC": "<strong>C. </strong>Średnią wartości różnych pól rekordu zwróconego zapytaniem",
            "odpD": "<strong>D. </strong>Wartość minimalną kolumny zwróconej kwerendą",
            "tresc": "Funkcja agregująca MIN języka SQL ma za zadanie policzyć"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 268,
            "header": "Pytanie nr 268 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/7DAeZDW3kv.png",
            "odpA": "<strong>A. </strong>SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy WHERE poziom = 4;",
            "odpB": "<strong>B. </strong>SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy ON Zamowienia.id = Firmy.id WHERE poziom = 4;",
            "odpC": "<strong>C. </strong>SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy ON Zamowienia.Firmy_id = Firmy.id WHERE poziom = 4;",
            "odpD": "<strong>D. </strong>SELECT id, nazwa FROM Zamowienia JOIN Firmy ON Zamowienia.Firmy_id = Firmy.id WHERE poziom = 4;",
            "tresc": "Tabele: Firmy i Zamowienia są powiązane relacją jeden do wielu. Aby wybrać jedynie id zamówienia wraz z odpowiadającą mu nazwą firmy dla firm, których poziom jest równy 4, należy zastosować polecenie"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 189,
            "header": "Pytanie nr 189 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT AVG(*) FROM personel WHERE staz &gt;= 10 AND staz &lt;= 20;",
            "odpB": "<strong>B. </strong>SELECT AVG(pensja) FROM personel WHERE staz &gt;= 10 AND staz &lt;= 20;",
            "odpC": "<strong>C. </strong>SELECT COUNT(*) FROM personel WHERE staz &gt;= 10 AND staz &lt;= 20;",
            "odpD": "<strong>D. </strong>SELECT COUNT(pensja) FROM personel WHERE staz &gt;= 10 AND staz &lt;= 20;",
            "tresc": "W tabeli personel znajdują się pola: imie, nazwisko, pensja, staz. Aby otrzymać średnią pensję pracowników, dla których staż wynosi od 10 do 20 lat pracy włącznie, należy wykonać kwerendę:"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 264,
            "header": "Pytanie nr 264 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT * FROM Artykuly WHERE Cena LIKE 1%, 2%;",
            "odpB": "<strong>B. </strong>SELECT * FROM Artykuly WHERE Cena IN (10, 20);",
            "odpC": "<strong>C. </strong>SELECT * FROM Artykuly WHERE Cena BETWEEN 10 AND 20;",
            "odpD": "<strong>D. </strong>SELECT * FROM Artykuly WHERE Cena &gt; 10 AND Cena &lt; 20;",
            "tresc": "Za pomocą której kwerendy w bazie MariaDB można wybrać artykuły, których ceny zawierają się w przedziale obustronnie domkniętym <10, 20>?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 6,
            "header": "Pytanie nr 6 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Raport",
            "odpB": "<strong>B. </strong>Tabela",
            "odpC": "<strong>C. </strong>Zapytanie ",
            "odpD": "<strong>D. </strong>Formularz",
            "tresc": "Jak nazywa się element bazy danych, za pomocą którego można jedynie odczytać dane z bazy, prezentując je w postaci tekstu lub wykresu?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 142,
            "header": "Pytanie nr 142 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wszystkie kolumny tabeli, które zawierają atrybuty obiektu",
            "odpB": "<strong>B. </strong>wszystkie wiersze tabeli wraz z wierszem nagłówkowym",
            "odpC": "<strong>C. </strong>liczbę rekordów tabeli",
            "odpD": "<strong>D. </strong>wiersze tabeli z wyjątkiem wiersza nagłówkowego, w którym umieszcza się nazwy kolumn",
            "tresc": "W relacyjnym modelu baz danych krotkami nazywa się"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 3,
            "header": "Pytanie nr 3 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/18.jpg",
            "odpA": "<strong>A. </strong>Rosnaco według parametru srednia",
            "odpB": "<strong>B. </strong>Rosnąca według parametru klasa",
            "odpC": "<strong>C. </strong>Malejąco według parametru klasa",
            "odpD": "<strong>D. </strong>Malejąco według parametru srednia",
            "tresc": "Jak posortowana będzie lista, utworzona ze wszystkich kolumn tabeli uczniowie i zawierająca uczniów ze średnią większą od 5, która zostanie zwrócona jako wynik przedstawionego zapytania?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 275,
            "header": "Pytanie nr 275 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/XwMFjJMPuu.png",
            "odpA": "<strong>A. </strong>2200",
            "odpB": "<strong>B. </strong>5400",
            "odpC": "<strong>C. </strong>1300",
            "odpD": "<strong>D. </strong>2600",
            "tresc": "Dana jest tabela pracownicy, do której wpisano rekordy przedstawione obok. Po uruchomieniu podanej w ramce kwerendy SQL zostanie wyświetlona wartość"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 248,
            "header": "Pytanie nr 248 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>INSERT TABLE uczniowie ADD PRIMARY KEY (id);",
            "odpB": "<strong>B. </strong>INSERT TABLE uczniowie PRIMARY KEY (id);",
            "odpC": "<strong>C. </strong>ALTER TABLE uczniowie ADD PRIMARY KEY (id);",
            "odpD": "<strong>D. </strong>ADD TABLE uczniowie PRIMARY KEY (id);",
            "tresc": "W języku SQL ustawienie klucza podstawowego na polu id w tabeli uczniowie możliwe jest za pomocą polecenia"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 237,
            "header": "Pytanie nr 237 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>$polacz = db_connect('localhost', 'root','','zwierzaki');",
            "odpB": "<strong>B. </strong>$polacz = sql_connect('localhost', 'root','','zwierzaki');",
            "odpC": "<strong>C. </strong>$polacz = mysqli_connect('localhost', 'root','','zwierzaki');",
            "odpD": "<strong>D. </strong>$polacz = server_connect('localhost', 'root','','zwierzaki');",
            "tresc": "Za pomocą której funkcji języka PHP można ustanowić połączenie z bazą danych o nazwie zwierzaki?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 75,
            "header": "Pytanie nr 75 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia &gt; 2015",
            "odpB": "<strong>B. </strong>SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia &lt; 2015",
            "odpC": "<strong>C. </strong>SELECT imie, rasa FROM psy WHERE rok_szczepienia &gt; 2015",
            "odpD": "<strong>D. </strong>SELECT psy FROM rok_szczepienia &lt; 2015",
            "tresc": "Dana jest tabela psy o polach: imie, rasa, telefon_wlasciciela, rok_szczepienia. Aby wyszukać telefony właścicieli, których psy były szczepione przed 2015 rokiem, należy użyć polecenia SQL"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 129,
            "header": "Pytanie nr 129 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/463.jpg",
            "odpA": "<strong>A. </strong>Dwie wartości: 4600 i 5400, jako pensje pracowników wyższe niż 4000",
            "odpB": "<strong>B. </strong>Wartość 5400, czyli najwyższa pensja pracownika.",
            "odpC": "<strong>C. </strong>Wartość 10000, czyli suma pensji pracownika o id=4 oraz o id=6",
            "odpD": "<strong>D. </strong>Wartość 19500, czyli suma wszystkich pensji pracowników.",
            "tresc": "Do tabeli pracownicy wpisano rekordy. Co zostanie wyświetlone po uruchomieniu kwerendy SQL SELECT podanej w ramce?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 95,
            "header": "Pytanie nr 95 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DELETE pracownicy WHERE rodzaj_umowy = 'brak';",
            "odpB": "<strong>B. </strong>DROP pracownicy FROM rodzaj_umowy = 0;",
            "odpC": "<strong>C. </strong>DELETE FROM pracownicy WHERE rodzaj_umowy IS NULL;",
            "odpD": "<strong>D. </strong>DROP pracownicy WHERE rodzaj_umowy IS NULL;",
            "tresc": "Dana jest tabela pracownicy. Polecenie MySQL usuwające wszystkie rekordy z tabeli, dla których nie wypełniono pola rodzaj_umowy, ma postać"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 70,
            "header": "Pytanie nr 70 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>USAGE",
            "odpB": "<strong>B. </strong>GRANT",
            "odpC": "<strong>C. </strong>REVOKE",
            "odpD": "<strong>D. </strong>DELETE",
            "tresc": "Aby odebrać prawa dostępu do serwera MySQL, należy posłużyć się instrukcją"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 173,
            "header": "Pytanie nr 173 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/619.jpg",
            "odpA": "<strong>A. </strong>SELECT * FROM Pacjenci WHERE rok_urodzenia &lt;= 2002;",
            "odpB": "<strong>B. </strong>SELECT imie, nazwisko FROM Pacjenci WHERE rok_urodzenia &lt; 2002;",
            "odpC": "<strong>C. </strong>SELECT * FROM Pacjenci WHERE rok_urodzenia LIKE 2002;",
            "odpD": "<strong>D. </strong>SELECT imie, nazwisko FROM Pacjenci WHERE data_ostatniej_wizyty &lt; 2002;",
            "tresc": "Które zapytanie SQL posłuży do wyszukania z przedstawionej tabeli wyłącznie wszystkich imion i nazwisk pacjentów urodzonych przed rokiem 2002?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 168,
            "header": "Pytanie nr 168 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/603.jpg",
            "odpA": "<strong>A. </strong>zastosować polecenie mysql_fetch",
            "odpB": "<strong>B. </strong>zastosować pętlę z poleceniem mysqli_fetch_row",
            "odpC": "<strong>C. </strong>wyświetlić zmienną $db",
            "odpD": "<strong>D. </strong>zaindeksować zmienną tab, tab[0] to pierwsze imię",
            "tresc": "W języku PHP wykonano operację przedstawioną w ramce. Aby wyświetlić wszystkie wyniki tego zapytania należy"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 106,
            "header": "Pytanie nr 106 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>REVOKE ALL ON tabela1 FROM 'anna'@'localhost'",
            "odpB": "<strong>B. </strong>REVOKE CREATE UPDATE DROP ON tabela1 FROM 'anna'@'localhost'",
            "odpC": "<strong>C. </strong>REVOKE CREATE INSERT DELETE ON tabela1 FROM 'anna'@'localhost'",
            "odpD": "<strong>D. </strong>REVOKE CREATE ALTER DROP ON tabela1 FROM 'anna'@'localhost'",
            "tresc": "W języku MySQL należy zastosować polecenie REVOKE, aby użytkownikowi anna odebrać prawo do dokonywania zmian jedynie w definicji struktury bazy danych. Polecenie odpowiadające odebraniu tych praw ma postać"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 227,
            "header": "Pytanie nr 227 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>importem bazy.",
            "odpB": "<strong>B. </strong>eksportem bazy. ",
            "odpC": "<strong>C. </strong>agregacją danych.",
            "odpD": "<strong>D. </strong>modyfikacją danych.",
            "tresc": "Aby wykonać kopię zapasową bazy danych MySQL można posłużyć się"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 124,
            "header": "Pytanie nr 124 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>usunięta kolumna grupa",
            "odpB": "<strong>B. </strong>dodana kolumna grupa",
            "odpC": "<strong>C. </strong>zmieniona nazwa kolumny na grupa",
            "odpD": "<strong>D. </strong>zmieniona nazwa tabeli na grupa",
            "tresc": "W języku SQL w wyniku wykonania zapytania ALTER TABLE osoba DROP COLUMN grupa; zostanie"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 99,
            "header": "Pytanie nr 99 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT DISTINCT producent FROM programy;",
            "odpB": "<strong>B. </strong>SELECT producent FROM programy WHERE producent NOT DUPLICATE;",
            "odpC": "<strong>C. </strong>SELECT producent FROM programy WHERE UNIQUE;",
            "odpD": "<strong>D. </strong>SELECT UNIQUE producent FROM programy;",
            "tresc": "W bazie danych MYSQL dana jest tabela programów komputerowych o polach: nazwa, producent, rokWydania. Aby kwerenda SELECT zwróciła wszystkie nazwy producentów tak, by nazwy te nie powtarzały się, należy zapisać:"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 155,
            "header": "Pytanie nr 155 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ALTER TABLE Towar ALTER COLUMN rozmiar varchar(20);",
            "odpB": "<strong>B. </strong>ALTER TABLE Towar ADD rozmiar varchar(20);",
            "odpC": "<strong>C. </strong>ALTER TABLE Towar CREATE COLUMN rozmiar varchar(20);",
            "odpD": "<strong>D. </strong>ALTER TABLE Towar DROP COLUMN rozmiar varchar(20);",
            "tresc": "W języku zapytań SQL, aby dodać do tabeli Towar kolumnę rozmiar typu znakowego o maksymalnej długości 20 znaków, należy wykonać polecenie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 48,
            "header": "Pytanie nr 48 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>zmienić parametry obiektu",
            "odpB": "<strong>B. </strong>dodać nowy obiekt",
            "odpC": "<strong>C. </strong>usunąć istniejący obiekt",
            "odpD": "<strong>D. </strong>zaktualizować dane obiektu",
            "tresc": "Instrukcja DROP języka SQL ma za zadanie"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 79,
            "header": "Pytanie nr 79 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/266.jpg",
            "odpA": "<strong>A. </strong>odebrane prawa usuwania i modyfikowania danych w tabeli pracownicy",
            "odpB": "<strong>B. </strong>przydzielone prawa do usuwania i aktualizowania danych w tabeli pracownicy",
            "odpC": "<strong>C. </strong>odebrane prawa usuwanie i dodawania rekordów w tabeli pracownicy",
            "odpD": "<strong>D. </strong>przydzielone prawa wszelkiej zmiany struktury tabeli pracownicy",
            "tresc": "Polecenie serwera MySQL przedstawione poniżej sprawi, że użytkownikowi tkowal zostaną"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 61,
            "header": "Pytanie nr 61 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>dodaje pola do tabeli",
            "odpB": "<strong>B. </strong>aktualizuje rekordy określoną wartością",
            "odpC": "<strong>C. </strong>wprowadza dane do tabeli",
            "odpD": "<strong>D. </strong>dodaje tabelę",
            "tresc": "W języku SQL polecenie INSERT INTO"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 289,
            "header": "Pytanie nr 289 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/3LjnGawpDE.png",
            "odpA": "<strong>A. </strong>SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = artykuly.id;",
            "odpB": "<strong>B. </strong>SELECT nazwisko, tytul FROM autorzy, artykuly WHERE ocena == 5;",
            "odpC": "<strong>C. </strong>SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = autorzy_id;",
            "odpD": "<strong>D. </strong>SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = autorzy_id WHERE ocena = 5;",
            "tresc": "Z przedstawionych tabel Artykuly i Autorzy należy wybrać jedynie nazwiska autorów i tytuły ich artykułów, które zostały ocenione na 5. Kwerenda wybierająca te dane ma postać"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 7,
            "header": "Pytanie nr 7 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Obiektowy System Zarządzania Bazą Danych",
            "odpB": "<strong>B. </strong>Otwarty mechanizm komunikacji bazy danych",
            "odpC": "<strong>C. </strong>Klucz obcy",
            "odpD": "<strong>D. </strong>System Zarządzania Bazą Danych (SZBD)",
            "tresc": "Jakiego typu specjalizowane oprogramowanie narzędziowe należy zainstalować, aby umożliwić wykonywanie jego użytkownikowi operacji na zgromadzonych danych?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 25,
            "header": "Pytanie nr 25 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>char",
            "odpB": "<strong>B. </strong>text",
            "odpC": "<strong>C. </strong>bool",
            "odpD": "<strong>D. </strong>time",
            "tresc": "Typ stało-znakowy w języku SQL to"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 209,
            "header": "Pytanie nr 209 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CHAR",
            "odpB": "<strong>B. </strong>INT",
            "odpC": "<strong>C. </strong>FLOAT",
            "odpD": "<strong>D. </strong>VARCHAR",
            "tresc": "Który typ należy zastosować, aby pole bazy danych przyjmowało liczby rzeczywiste?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 76,
            "header": "Pytanie nr 76 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/263.jpg",
            "odpA": "<strong>A. </strong>klucz obcy rezyserzy_id tabeli filmy z kluczem podstawowym id tabeli rezyserzy",
            "odpB": "<strong>B. </strong>klucz obcy rezyserzy_id tabeli filmy z kluczem obcym id tabeli rezyserzy",
            "odpC": "<strong>C. </strong>klucz podstawowy id tabeli z kluczem obcym rezyserzy_id tabeli rezyserzy",
            "odpD": "<strong>D. </strong>klucz podstawowy id tabeli filmy z kluczem podstawowym id tabeli rezyserzy",
            "tresc": "Na rysunku została przedstawiona relacja jeden do wielu. Łączy ona"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 220,
            "header": "Pytanie nr 220 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/da7de39976a26d86.png",
            "odpA": "<strong>A. </strong>Z czterech pól.",
            "odpB": "<strong>B. </strong>Z trzech pól.",
            "odpC": "<strong>C. </strong>Z dwóch pól.",
            "odpD": "<strong>D. </strong>Z jednego pola.",
            "tresc": "Przedstawiony fragment kodu PHP działa poprawnie i ma za zadanie wyświetlić na stronie internetowej dane pobrane kwerendą z bazy danych. Z ilu pól zostaną wyświetlone dane?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 39,
            "header": "Pytanie nr 39 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>PLUS TABLE",
            "odpB": "<strong>B. </strong>ADD TABLE",
            "odpC": "<strong>C. </strong>NEW TABLE",
            "odpD": "<strong>D. </strong>CREATE TABLE",
            "tresc": "Aby stworzyć tabelę w bazie danych, należy zastosować polecenie SQL"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 18,
            "header": "Pytanie nr 18 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/57.jpg",
            "odpA": "<strong>A. </strong>Tagi inteligentne",
            "odpB": "<strong>B. </strong>Wartość domyślną",
            "odpC": "<strong>C. </strong>Maskę wprowadzania",
            "odpD": "<strong>D. </strong>Regułę sprawdzania poprawności",
            "tresc": "Którą z właściwości pola tabeli należy zdefiniować, aby pole przyjmowało dane składające się wyłącznie z cyfr?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 42,
            "header": "Pytanie nr 42 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>INSERT INTO zadania VALUES zadaniakompletne",
            "odpB": "<strong>B. </strong>ALTER TABLE zadania ADD COLUMN zadaniekompletne int",
            "odpC": "<strong>C. </strong>ADD COLUMN zadaniekompletne WITH zadania",
            "odpD": "<strong>D. </strong>CREATEINDEX zadania ADD COLUMN zadaniekompletne int",
            "tresc": "Które z poleceń umożliwia dodanie kolumny zadaniekompletne do tabeli zadania?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 287,
            "header": "Pytanie nr 287 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/FCBEZmcMYT.png",
            "odpA": "<strong>A. </strong>SELECT pasmo, COUNT(wysokosc) FROM gory ORDER BY pasmo;",
            "odpB": "<strong>B. </strong>SELECT pasmo, AVG(wysokosc) FROM gory LIMIT pasmo;",
            "odpC": "<strong>C. </strong>SELECT pasmo, AVG(wysokosc) FROM gory GROUP BY pasmo;",
            "odpD": "<strong>D. </strong>SELECT pasmo, SUM(wysokosc) FROM gory GROUP BY pasmo;",
            "tresc": "Tabela gory, której fragment przedstawiono, zawiera polskie pasma górskie wraz z ich szczytami. Wskaż kwerendę licząca dla każdego pasma górskiego średnią wysokość jego szczytów."
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 87,
            "header": "Pytanie nr 87 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT sprzedaz FROM kontrahent WHERE grupa_cenowa = 2 AND obrot &gt; 4000;",
            "odpB": "<strong>B. </strong>SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 AND obrot &gt; 4000;",
            "odpC": "<strong>C. </strong>SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 OR obrot &gt; 4000;",
            "odpD": "<strong>D. </strong>SELECT sprzedaz FROM kontrahent WHERE obrot &gt; 4000;",
            "tresc": "W bazie danych hurtowni zdefiniowano tabelę sprzedaz o polach: id, kontrahent, grupa_cenowa, obrot. Aby wyszukać wyłącznie kontrahentów z drugiej grupy cenowej, których obrót jest większy niż 4000zł, należy zastosować polecenie"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 247,
            "header": "Pytanie nr 247 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CREATE USER `sekretarka`@`localhost` IDENTIFY BY `zaq123`;",
            "odpB": "<strong>B. </strong>CREATE USER `sekretarka`@`localhost` IDENTIFY \"zaq123\";",
            "odpC": "<strong>C. </strong>CREATE USER 'sekretarka'@'localhost' IDENTIFIED `zaq123`;",
            "odpD": "<strong>D. </strong>CREATE USER `sekretarka`@`localhost` IDENTIFIED BY 'zaq123';",
            "tresc": "Wskaż zapytanie SQL tworzące użytkownika sekretarka na localhost z hasłem zaq123"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 32,
            "header": "Pytanie nr 32 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>kluczem głównym w relacji tabel",
            "odpB": "<strong>B. </strong>połączeniem dwóch pól jednej tabeli",
            "odpC": "<strong>C. </strong>algebraicznym połączeniem tabel",
            "odpD": "<strong>D. </strong>logicznym połączeniem tabel",
            "tresc": "Relacja w bazach danych jest"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 65,
            "header": "Pytanie nr 65 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>dodać klucz obcy",
            "odpB": "<strong>B. </strong>stworzyć osobną tabelę przechowującą tylko te pola",
            "odpC": "<strong>C. </strong>utworzyć indeks",
            "odpD": "<strong>D. </strong>dodać więzy integralności ",
            "tresc": "W celu przyspieszenia operacji na bazie danych należy do pól często wyszukiwanych lub sortowanych"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 266,
            "header": "Pytanie nr 266 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/fVgfwQ3eMo.png",
            "odpA": "<strong>A. </strong>4; 5; 6; 7; 8",
            "odpB": "<strong>B. </strong>5; 8",
            "odpC": "<strong>C. </strong>zbiór pusty",
            "odpD": "<strong>D. </strong>3; 5; 8",
            "tresc": "Tabela odloty zawiera rekordy przedstawione na obrazie. Zastosowanie zapytania SQL spowoduje zwrócenie danych:"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 133,
            "header": "Pytanie nr 133 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>w przypadku naruszenia spójności bazy danych transakcja usuwa tabele z kluczami obcymi",
            "odpB": "<strong>B. </strong>w czasie wykonania transakcji dane mogą być modyfikowane przez inne transakcje",
            "odpC": "<strong>C. </strong>dane zatwierdzone przez transakcję powinny być dostępne niezależnie od tego, co się będzie działo po jej zakończeniu",
            "odpD": "<strong>D. </strong>transakcja może być w pewnych warunkach podzielona na dwa niezależne etapy",
            "tresc": "Zgodnie z właściwościami ACID, dotyczącym wykonania transakcji, wymaganie trwałości (ang. durability) oznacza, że"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 84,
            "header": "Pytanie nr 84 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/282.jpg",
            "odpA": "<strong>A. </strong>Błąd przetwarzania zapytania SQL",
            "odpB": "<strong>B. </strong>Wybrana baza nie istnieje",
            "odpC": "<strong>C. </strong>Pomyślnie dodano rekord do bazy",
            "odpD": "<strong>D. </strong>Błąd połączenia z serwerem SQL",
            "tresc": "Jaka treść komunikatu powinna być wstawiona w przedstawionym kodzie PHP zamiast znaków zapytania?"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 19,
            "header": "Pytanie nr 19 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ORDER BY",
            "odpB": "<strong>B. </strong>GROUP BY",
            "odpC": "<strong>C. </strong>LIKE",
            "odpD": "<strong>D. </strong>DISTINCT",
            "tresc": "Którego ze słów kluczowych języka SQL należy użyć, aby wyeliminować duplikaty?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 200,
            "header": "Pytanie nr 200 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/0d2a940661dcc8e6.png",
            "odpA": "<strong>A. </strong>XML",
            "odpB": "<strong>B. </strong>ESRI",
            "odpC": "<strong>C. </strong>CSV",
            "odpD": "<strong>D. </strong>SQL",
            "tresc": "Na obrazie przedstawiono wybór formatu pliku importującego bazę danych. Którego formatu należy użyć, jeżeli dane są wyeksportowane z programu Excel i zapisane tekstowo z zastosowaniem przecinka do rozdzielenia wartości pól?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 89,
            "header": "Pytanie nr 89 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>indeksem klucza",
            "odpB": "<strong>B. </strong>indeksem unikalnym",
            "odpC": "<strong>C. </strong>kluczem podstawowym",
            "odpD": "<strong>D. </strong>kluczem obcym",
            "tresc": "W instrukcji CREATE TABLE użycie klauzuli PRIMARY KEY przy deklaracji pola tabeli spowoduje, że pole to stanie się"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 259,
            "header": "Pytanie nr 259 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/219aaea039bbe317.png",
            "odpA": "<strong>A. </strong>zmienić nazwę kolumny z cena na float.",
            "odpB": "<strong>B. </strong>dodać kolumnę cena o typie float, jeśli nie istnieje.",
            "odpC": "<strong>C. </strong>zmienić typ na float dla kolumny cena.",
            "odpD": "<strong>D. </strong>usunąć kolumnę cena typu float.",
            "tresc": "Kwerenda ma za zadanie w tabeli artykuly"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 194,
            "header": "Pytanie nr 194 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/668.jpg",
            "odpA": "<strong>A. </strong>Będzie mógł wstawiać rekordy do tabeli klienci",
            "odpB": "<strong>B. </strong>Będzie mógł wyszukiwać dane w tabeli klienci",
            "odpC": "<strong>C. </strong>Będzie mógł usuwać rekordy z tabeli klienci",
            "odpD": "<strong>D. </strong>Będzie mógł zmienić strukturę tabeli klienci",
            "tresc": "Jakie uprawnienia będzie miał użytkownik jan po wykonaniu na bazie danych przedstawionych poleceń?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 108,
            "header": "Pytanie nr 108 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Jest stosowany, jeśli wartość w kolumnie nie mogą się powtarzać",
            "odpB": "<strong>B. </strong>Blokuje możliwość wpisania wartości NULL",
            "odpC": "<strong>C. </strong>Jest stosowany tylko w przypadku pól liczbowych",
            "odpD": "<strong>D. </strong>Wymusza unikatowe nazwy pól tabeli",
            "tresc": "W języku SQL wykorzystywanym przez bazę danych MySQL atrybut UNIQUE polecenia CREATE TABLE"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 221,
            "header": "Pytanie nr 221 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>zliczanie rekordów wybranych kwerendą.",
            "odpB": "<strong>B. </strong>obliczenie średniej wartości w wybranej kolumnie.",
            "odpC": "<strong>C. </strong>obliczenie wartości bezwzględnej w polu liczbowym.",
            "odpD": "<strong>D. </strong>zliczanie znaków w polu tekstowym.",
            "tresc": "Funkcja COUNT języka SQL realizuje"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 242,
            "header": "Pytanie nr 242 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT id, imie, nazwisko, data_ur FROM uczniowie WHERE data_ur like \"2001-*-*\";",
            "odpB": "<strong>B. </strong>SELECT * FROM uczniowie WHERE data_ur like \"2001\";",
            "odpC": "<strong>C. </strong>SELECT * FROM uczniowie WHERE data_ur == 2001-%-%;",
            "odpD": "<strong>D. </strong>SELECT imie, nazwisko FROM uczniowie WHERE data_ur like \"2001-%-%\"; ",
            "tresc": "Dana jest tabela uczniowie o polach id, imie, nazwisko, data_ur (format rrrr-mm-dd). Które zapytanie w języku SQL wyświetli tylko imiona i nazwiska uczniów urodzonych w 2001 roku?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 277,
            "header": "Pytanie nr 277 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>po wykonaniu transakcji system bazy danych będzie spójny.",
            "odpB": "<strong>B. </strong>jeżeli dwie transakcje wykonują się współbieżnie, to zwykle nie widzą wprowadzanych przez siebie zmian.",
            "odpC": "<strong>C. </strong>w przypadku konfliktu z inną transakcją, obie modyfikują te same dane w tym samym czasie.",
            "odpD": "<strong>D. </strong>pod pewnymi warunkami dane zmieniane przez transakcję mogą zostać wycofane.",
            "tresc": "Zgodnie z właściwościami ACID dotyczącymi wykonywania transakcji wymaganie izolacji (ang. isolation) oznacza, że"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 271,
            "header": "Pytanie nr 271 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/6VKV7E273C.png",
            "odpA": "<strong>A. </strong>polem typu napisowego zawierającym dane o autorze.",
            "odpB": "<strong>B. </strong>polem wykorzystanym przy relacji z tabelą dane.",
            "odpC": "<strong>C. </strong>kluczem głównym tabeli ksiazka.",
            "odpD": "<strong>D. </strong>kluczem obcym związanym z tabelą autorzy.",
            "tresc": "Pole autor w tabeli ksiazka jest"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 279,
            "header": "Pytanie nr 279 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wprowadzić dane do tabeli.",
            "odpB": "<strong>B. </strong>usunąć tabelę.",
            "odpC": "<strong>C. </strong>zmienić strukturę tabeli.",
            "odpD": "<strong>D. </strong>utworzyć tabelę.",
            "tresc": "W języku SQL za pomocą kwerendy ALTER można"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 123,
            "header": "Pytanie nr 123 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>INSERT INTO Pracownicy VALUES (\"Jan\", \"Kowalski\");",
            "odpB": "<strong>B. </strong>INSERT VALUES (Jan; Kowalski) INTO Pracownicy;",
            "odpC": "<strong>C. </strong>INSERT (Jan), (Kowalski) INTO TABLE Pracownicy;",
            "odpD": "<strong>D. </strong>INSERT VALUES Pracownicy INTO (Jan, Kowalski);",
            "tresc": "W celu dodania rekordu do tabeli Pracownicy należy użyć polecenia SQL"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 218,
            "header": "Pytanie nr 218 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CREATE",
            "odpB": "<strong>B. </strong>REVOKE",
            "odpC": "<strong>C. </strong>GRANT",
            "odpD": "<strong>D. </strong>SELECT ",
            "tresc": "Aby nadać użytkownikowi uprawnienia do tabel w bazie danych, należy zastosować polecenie"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 176,
            "header": "Pytanie nr 176 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/622.jpg",
            "odpA": "<strong>A. </strong>SELECT * FROM Mieszkancy, Adresy ON Mieszkancy.id = Adresy.id;",
            "odpB": "<strong>B. </strong>SELECT imie, nazwisko, ulica FROM Mieszkancy, Adresy ON Mieszkancy.Adresy_id = Adresy.id;",
            "odpC": "<strong>C. </strong>SELECT * FROM Mieszkancy JOIN Adresy ON Adresy.id = Mieszkancy.Adresy.id;",
            "odpD": "<strong>D. </strong>SELECT imie, nazwisko, ulica FROM Mieszkancy JOIN Adresy ON Mieszkancy.Adresy_id = Adresy.id;",
            "tresc": "Aby wyświetlić jedynie imię, nazwisko i ulicę wszystkich mieszkańców, należy zastosować zapytanie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 267,
            "header": "Pytanie nr 267 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/KUQYWwkHfQ.png",
            "odpA": "<strong>A. </strong>pole id będzie mogło przyjmować wartości: NULL, 1, 2, 3, 4 i tak dalej.",
            "odpB": "<strong>B. </strong>wartość pola id zostanie automatycznie nadana przez bazę i będzie to wygenerowana losowo liczba całkowita.",
            "odpC": "<strong>C. </strong>wartości pola będą automatycznie generowane podczas dodawania nowego rekordu do bazy.",
            "odpD": "<strong>D. </strong>dozwolone jest dodawanie rekordu z dowolną wartością pola id.",
            "tresc": "W bazie MySQL zdefiniowano podczas tworzenia tabeli pole id. Wpis AUTO_INCREMENT oznacza, że"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 41,
            "header": "Pytanie nr 41 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>z więzów integralności",
            "odpB": "<strong>B. </strong>z kwerendy aktualizującej",
            "odpC": "<strong>C. </strong>z archiwizacji bazy",
            "odpD": "<strong>D. </strong>z defragmentacji bazy",
            "tresc": "W celu zapewnienia spójności danych w bazie programu Microsoft Access należy skorzystać"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 78,
            "header": "Pytanie nr 78 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE rosliny ADD miesiacSiewu int",
            "odpB": "<strong>B. </strong>ALTER TABLE rosliny ADD miesiacSiewu int",
            "odpC": "<strong>C. </strong>INSERT INTO rosliny VALUES (miesiacSiewu int)",
            "odpD": "<strong>D. </strong>CREATE TABLE rosliny {miesiacSiewu int}",
            "tresc": "Wskaż polecenie SQL dodające pole miesiacSiewu do istniejącej tabeli rosliny"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 71,
            "header": "Pytanie nr 71 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wykonać kopię bezpieczeństwa dziennika transakcyjnego",
            "odpB": "<strong>B. </strong>przeczytać komunikaty wygenerowane podczas tworzenia kopii",
            "odpC": "<strong>C. </strong>zalogować sie do kopii bezpieczeństwa",
            "odpD": "<strong>D. </strong>wykonać pełną kopię bezpieczeństwa",
            "tresc": "Za pomocą polecenia BACKUP LOG w MS SQL Server można"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 210,
            "header": "Pytanie nr 210 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE",
            "odpB": "<strong>B. </strong>ALTER TABLE",
            "odpC": "<strong>C. </strong>TRUNCATE",
            "odpD": "<strong>D. </strong>DROP TABLE",
            "tresc": "W języku SQL, aby zmienić strukturę tabeli, np. poprzez dodanie lub usunięcie kolumny, należy zastosować polecenie"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 35,
            "header": "Pytanie nr 35 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wartość klucza obcego w danej tabeli musi być albo równa wartości klucza głównego w tabeli z nia powiązanej albo równa wartości NULL",
            "odpB": "<strong>B. </strong>każdemu kluczowi głównemu odpowiada dokładnie jeden klucz obcy w tabeli lub tabelach powiązanych",
            "odpC": "<strong>C. </strong>klucz główny lub klucz obcy nie zawierają wartości NULL",
            "odpD": "<strong>D. </strong>wartość klucza głównego oraz klucza obcego nie jest pusta",
            "tresc": "Integralność referencyjna w modelu relacyjnych baz danych oznacza, że"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 15,
            "header": "Pytanie nr 15 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Określenie celu, stworzenie tabel, utworzenie relacji, normalizacja",
            "odpB": "<strong>B. </strong>Określenie celu, normalizacja, stworzenie tabel, utworzenie relacji",
            "odpC": "<strong>C. </strong>Określenie celu, normalizacja, utworzenie relacji, stworzenie tabel",
            "odpD": "<strong>D. </strong>Określenie celu, utworzenie relacji, stworzenie tabel, normalizacja",
            "tresc": "Wskaż prawidłową kolejność tworzenia bazy danych"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 250,
            "header": "Pytanie nr 250 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>każdy klucz główny będzie miał odpowiadający mu klucz obcy w innej tabeli.",
            "odpB": "<strong>B. </strong>klucz główny będzie zawsze liczbą całkowitą.",
            "odpC": "<strong>C. </strong>dla każdej tabeli zostanie utworzony klucz główny.",
            "odpD": "<strong>D. </strong>każdej kolumnie zostanie przypisany typ danych.",
            "tresc": "Integralność encji w bazie danych zostanie zachowana, jeżeli między innymi"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 16,
            "header": "Pytanie nr 16 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/55.jpg",
            "odpA": "<strong>A. </strong>Jeden do jednego",
            "odpB": "<strong>B. </strong>Jeden do wielu",
            "odpC": "<strong>C. </strong>Wiele do wielu",
            "odpD": "<strong>D. </strong>Wiele do jednego",
            "tresc": "Wskaż typ relacji pomiędzy tabelami: Tabela1 i Tabela3"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 96,
            "header": "Pytanie nr 96 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ALTER TABLE",
            "odpB": "<strong>B. </strong>ADD TABLE",
            "odpC": "<strong>C. </strong>INSERT TABLE",
            "odpD": "<strong>D. </strong>CREATE TABLE",
            "tresc": "W języku SQL, aby stworzyć tabelę, należy zastosować polecenie"
        }
    },
    {
        "a": "odpd",
        "q": {
            "id": 222,
            "header": "Pytanie nr 222 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>ORDER BY",
            "odpB": "<strong>B. </strong>PRIMARY KEY",
            "odpC": "<strong>C. </strong>INDEX",
            "odpD": "<strong>D. </strong>REFERENCES",
            "tresc": "Ustalenie relacji pomiędzy tabelami w systemie bazodanowym MySQL umożliwia klauzula"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 256,
            "header": "Pytanie nr 256 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/testimg/556b5e32d3396aff.png",
            "odpA": "<strong>A. </strong>SELECT opis, nazwisko FROM Zgloszenia JOIN Klienci ON Klienci.id = Zgloszenia.Klienci_id WHERE Klienci.id = 5;",
            "odpB": "<strong>B. </strong>SELECT opis, nazwisko FROM Zgloszenia JOIN Klienci ON Klienci.id = Zgloszenia.Klienci_id WHERE Zgloszenia.id = 5;",
            "odpC": "<strong>C. </strong>SELECT opis, nazwisko FROM Zgloszenia JOIN Klienci WHERE Klienci.id = 5;",
            "odpD": "<strong>D. </strong>SELECT opis, nazwisko FROM Zgloszenia JOIN Klienci ON Klienci.id = Zgloszenia.id WHERE Zgloszenia.id = 5;",
            "tresc": "Tabele: Klienci i Zgloszenia są powiązane relacją jeden do wielu. Aby wybrać jedynie opis zgłoszenia oraz odpowiadające mu nazwisko klienta dla zgłoszenia numer 5, należy wydać polecenie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 115,
            "header": "Pytanie nr 115 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE przebieg SET 0 TABLE samochody;",
            "odpB": "<strong>B. </strong>UPDATE samochody SET przebieg VALUE 0;",
            "odpC": "<strong>C. </strong>UPDATE samochody SET przebieg = 0;",
            "odpD": "<strong>D. </strong>UPDATE przebieg SET 0 FROM samochody;",
            "tresc": "W języku SQL, wykorzystywanym przez bazę danych MySQL w tabeli samochody, aby nadać wartość równą 0 dla kolumny przebieg, należy posłużyć się kwerendą"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 46,
            "header": "Pytanie nr 46 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>select VAR (pensja) from nazwisko",
            "odpB": "<strong>B. </strong>select AVG (pensja) from pracownicy",
            "odpC": "<strong>C. </strong>select VAR (pracownicy) into pensja",
            "odpD": "<strong>D. </strong>select AVG (nazwisko) into pensja",
            "tresc": "Baza danych zawiera tabelę o nazwie pracownicy o polach: nazwisko, imie, pensja, wiek. Jak wygląda składnia polecenia wyznaczającego średnią pensję pracowników?"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 191,
            "header": "Pytanie nr 191 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>DROP TABLE",
            "odpB": "<strong>B. </strong>TRUNCATE TABLE",
            "odpC": "<strong>C. </strong>UNIQUE",
            "odpD": "<strong>D. </strong>DELETE",
            "tresc": "Aby usunąć tabelę należy zastosować kwerendę"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 205,
            "header": "Pytanie nr 205 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>GRANT DROP ON szkola.przedmioty TO uczen;",
            "odpB": "<strong>B. </strong>GRANT INSERT, DROP ON szkola.przedmioty TO uczen;",
            "odpC": "<strong>C. </strong>GRANT SELECT ON szkola.przedmioty TO uczen;",
            "odpD": "<strong>D. </strong>GRANT ALTER, SELECT ON szkola.przedmioty TO uczen;",
            "tresc": "Które z poleceń nadaje najniższy poziom uprawnień użytkownikowi uczen pod względem modyfikacji danych i struktury tabel?"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 260,
            "header": "Pytanie nr 260 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>CREATE OR REPLACE USER 'anna'@'localhost' IDENTIFIED BY 'yu&amp;T%';",
            "odpB": "<strong>B. </strong>CREATE USER OR DROP 'anna'@'localhost' IDENTIFIED BY 'yu&amp;T%';",
            "odpC": "<strong>C. </strong>CREATE USER IF NOT EXISTS 'anna'@'localhost' IDENTIFIED BY 'yu&amp;T%';",
            "odpD": "<strong>D. </strong>CREATE USER 'anna'@'localhost' IDENTIFIED BY 'yu&amp;T%';",
            "tresc": "W języku SQL, aby zabezpieczyć kwerendę CREATE USER tak, aby nie zostało utworzone konto w przypadku, gdy już istnieje, można posłużyć się składnią"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 36,
            "header": "Pytanie nr 36 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/125.jpg",
            "odpA": "<strong>A. </strong>połączenia z bazą danych",
            "odpB": "<strong>B. </strong>zabezpieczenia bazy danych",
            "odpC": "<strong>C. </strong>pobrania danych z bazy danych",
            "odpD": "<strong>D. </strong>ustawienia hasła do bazy danych",
            "tresc": "Funkcja zapisana językiem PHP służy do"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 67,
            "header": "Pytanie nr 67 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Poznań\" OR miasto=\"Kraków\";",
            "odpB": "<strong>B. </strong>SELECT nazwisko, imie FROM mieszkancy WHERE miasto HAVING \"Poznań\" OR \"Kraków\";",
            "odpC": "<strong>C. </strong>SELECT nazwisko, imie FROM mieszkancy AS \"Poznań\" OR \"Kraków\";",
            "odpD": "<strong>D. </strong>SELECT nazwisko, imie FROM mieszkancy WHERE miasto BETWEEN \"Poznań\" OR \"Kraków\";",
            "tresc": "Zdefiniowano bazę danych z tabelą mieszkancy o polach: nazwisko, imie, miasto. Następnie stworzono następujące zapytanie do bazy: SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Poznań\" UNION ALL SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Kraków\"; Wskaż zapytanie, które zwróci identyczne dane:"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 121,
            "header": "Pytanie nr 121 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/425.jpg",
            "odpA": "<strong>A. </strong>1:1",
            "odpB": "<strong>B. </strong>1:n, gdzie 1 jest po stronie Klienta, a wiele po stronie Zamówienia",
            "odpC": "<strong>C. </strong>n:n",
            "odpD": "<strong>D. </strong>1:n, gdzie 1 jest po stronie Zamówienia, a wiele po stronie Klienta",
            "tresc": "Którą relację w projekcie bazy danych należy ustalić między tabelami widocznymi na rysunku zakładając, że każdy klient sklepu internetowego dokona przynajmniej dwóch zamówień?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 119,
            "header": "Pytanie nr 119 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>Zwraca te wiersze, które wystąpiły w wyniku drugiego zapytania, ale nie było ich w wyniku pierwszego zapytania.",
            "odpB": "<strong>B. </strong>Zwraca część wspólną wyników dwóch zapytań.",
            "odpC": "<strong>C. </strong>Zwraca listę wyników z pierwszego zapytania oraz listę wyników z drugiego zapytania, powodując domyślne usuwanie powtarzających się wierszy.",
            "odpD": "<strong>D. </strong>Zwraca te wiersze, które wystąpiły w wyniku pierwszego zapytania, ale nie było ich w wyniku drugiego zapytania.",
            "tresc": "Jak działa instrukcja łącząca wyniki zapytań INTERSECT w języku SQL?"
        }
    },
    {
        "a": "odpb",
        "q": {
            "id": 251,
            "header": "Pytanie nr 251 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>UPDATE",
            "odpB": "<strong>B. </strong>ALTER TABLE",
            "odpC": "<strong>C. </strong>CREATE TABLE",
            "odpD": "<strong>D. </strong>INSERT INTO",
            "tresc": "Aby przy pomocy zapytania SQL zmodyfikować strukturę istniejącej tabeli, należy zastosować kwerendę"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 192,
            "header": "Pytanie nr 192 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/ee09/666.jpg",
            "odpA": "<strong>A. </strong>zmieniona nazwa kolumny z nazwa1 na nazwa2",
            "odpB": "<strong>B. </strong>dodana kolumna nazwa2 przyjmująca wartość domyślną DOUBLE",
            "odpC": "<strong>C. </strong>dodana kolumna nazwa2 typu zmiennoprzecinkowego",
            "odpD": "<strong>D. </strong>zmieniona wartość kolumny nazwa2 na DOUBLE",
            "tresc": "Za pomocą przedstawionego zapytania w tabeli zostanie"
        }
    },
    {
        "a": "odpa",
        "q": {
            "id": 139,
            "header": "Pytanie nr 139 - Wskaż poprawną odpowiedź!",
            "obrazek": "https://egzamin-informatyk.pl/e14/484.jpg",
            "odpA": "<strong>A. </strong>mysqli_fetch_row($zapytanie);",
            "odpB": "<strong>B. </strong>mysqli_num_fields($zapytanie);",
            "odpC": "<strong>C. </strong>mysqli_free_result($zapytanie);",
            "odpD": "<strong>D. </strong>mysqli_query($zapytanie);",
            "tresc": "W prezentowanym kodzie PHP w miejscu kropek powinno znaleźć się polecenie"
        }
    },
    {
        "a": "odpc",
        "q": {
            "id": 80,
            "header": "Pytanie nr 80 - Wskaż poprawną odpowiedź!",
            "obrazek": null,
            "odpA": "<strong>A. </strong>wszystkie operacje na bazach danych i użytkownikach serwera",
            "odpB": "<strong>B. </strong>monitorowanie serwera",
            "odpC": "<strong>C. </strong>wszelkie operacje na bazach danych serwera",
            "odpD": "<strong>D. </strong>tworzenie użytkowników serwera i ustawianie im haseł",
            "tresc": "W serwerze MySQL nadanie roli o nazwie DBManager przyznaje użytkownikowi prawa umożliwiające"
        }
    }
]