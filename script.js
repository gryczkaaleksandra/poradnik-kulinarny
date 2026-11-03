const zbior_przepisow = [
    {
        nazwa: "Tosty z puszystą pastą jajeczną",
        posilek: "sniadanie",
        smak: "slony",
        kuchnia: "polska",
        opis: "Składniki: Chleb, 3 jajka, łyżka majonezu, szczypiorek, sól, pieprz.<br><br>Przepis: Jajka ugotuj na twardo, zetrzyj na drobnej tarce. Wymieszaj z majonezem i przyprawami na puszystą pastę. Nałóż na chrupiące tosty i posyp szczypiorkiem.<br><br>Makro: 350 kcal | B: 18g | W: 25g | T: 20g",
        zdj: "zdj/tosty-pasta-jajeczna.jpg"
    },
    {
        nazwa: "Racuchy z jabłkami",
        posilek: "sniadanie",
        smak: "slodki",
        kuchnia: "polska",
        opis: "Składniki: 1 szklanka mąki, 1 szklanka mleka, 1 jajko, 2 jabłka, proszek do pieczenia, olej do smażenia.<br><br>Przepis: Wymieszaj mąkę, mleko, jajko i proszek do pieczenia. Dodaj starte lub pokrojone jabłka. Smaż z obu stron na złoty kolor.<br><br>Makro: 400 kcal | B: 10g | W: 60g | T: 12g",
        zdj: "zdj/racuchy.jpg"
    },
    {
        nazwa: "Pikantna pasta jajeczna",
        posilek: "sniadanie",
        smak: "ostry",
        kuchnia: "polska",
        opis: "Składniki: 4 jajka, majonez, musztarda, ostra papryka w proszku, sos sriracha, sól.<br><br>Przepis: Jajka ugotuj na twardo, zgnieć widelcem. Wymieszaj z majonezem, musztardą i przyprawami na gładką masę.<br><br>Makro: 320 kcal | B: 20g | W: 4g | T: 25g",
        zdj: "zdj/pik-pasta-jajeczna.jpg"
    },
    {
        nazwa: "Frittata z warzywami",
        posilek: "sniadanie",
        smak: "slony",
        kuchnia: "wloska",
        opis: "Składniki: 4 jajka, szpinak, pomidorki koktajlowe, parmezan, oliwa.<br><br>Przepis: Podsmaż warzywa na oliwie, zalej roztrzepanymi jajkami z parmezanem. Smaż pod przykryciem lub zapiekaj w piekarniku przez 10 minut.<br><br>Makro: 280 kcal | B: 22g | W: 5g | T: 20g",
        zdj: "zdj/frittata.png"
    },
    {
        nazwa: "Rogalik z dżemem truskawkowym",
        posilek: "sniadanie",
        smak: "slodki",
        kuchnia: "wloska",
        opis: "Składniki: Rogalik z piekarni (najlepiej maślany), dżem truskawkowy.<br><br>Przepis: Przekrój rogalika na pół i grubo posmaruj dżemem. Najlepiej smakuje z kawą.<br><br>Makro: 280 kcal | B: 5g | W: 45g | T: 8g",
        zdj: "zdj/rogal-z-dzemem.jpg"
    },
    {
        nazwa: "Omlet z ostrym salami",
        posilek: "sniadanie",
        smak: "ostry",
        kuchnia: "wloska",
        opis: "Składniki: 3 jajka, ostre salami (pepperoni), odrobina oleju.<br><br>Przepis: Roztrzep jajka w kubku. Na patelni podsmaż salami, wylej na to jajka i smaż z obu stron na złoto.<br><br>Makro: 380 kcal | B: 25g | W: 2g | T: 30g",
        zdj: "zdj/omlet-salami.jpg"

    },
    {
        nazwa: "Omlet z sosem sojowym",
        posilek: "sniadanie",
        smak: "slony",
        kuchnia: "chinska",
        opis: "Składniki: 3 jajka, łyżka sosu sojowego, szczypiorek, olej.<br><br>Przepis: Roztrzep jajka z sosem sojowym (nie sól, bo sos jest słony!). Usmaż na patelni i posyp szczypiorkiem.<br><br>Makro: 250 kcal | B: 18g | W: 3g | T: 18g",
        zdj: "zdj/omlet-sos-sojowy.jpg"
    },
    {
        nazwa: "Ryż na słodko z mlekiem",
        posilek: "sniadanie",
        smak: "slodki",
        kuchnia: "chinska",
        opis: "Składniki: Ugotowany biały ryż, mleko, cukier, jabłko.<br><br>Przepis: Resztkę ryżu z wczoraj podgrzej w garnuszku z odrobiną mleka i dwiema łyżeczkami cukru.<br><br>Makro: 300 kcal | B: 6g | W: 60g | T: 4g",
        zdj: "zdj/ryz-jablko.jpg"
    },
    {
        nazwa: "Jajka sadzone z sosem Sriracha",
        posilek: "sniadanie",
        smak: "ostry",
        kuchnia: "chinska",
        opis: "Składniki: 2 jajka, olej, sos Sriracha (lub inny ostry sos).<br><br>Przepis: Usmaż jajka sadzone. Po przełożeniu na talerz polej obficie ostrym sosem.<br><br>Makro: 200 kcal | B: 14g | W: 2g | T: 15g",
        zdj: "zdj/jajka-sriracha.jpg"
    },
    {
        nazwa: "Tosty z boczkiem i serem",
        posilek: "sniadanie",
        smak: "slony",
        kuchnia: "amerykanska",
        opis: "Składniki: Chleb tostowy, plasterki boczku, ser żółty.<br><br>Przepis: Podsmaż boczek na chrupko. Zrób tosty w opiekaczu z serem i upieczonym boczkiem w środku.<br><br>Makro: 450 kcal | B: 20g | W: 35g | T: 25g",
        zdj: "zdj/tosty-z-boczkiem.jpg"
    },
    {
        nazwa: "Klasyczne Pancakes z syropem klonowym",
        posilek: "sniadanie",
        smak: "slodki",
        kuchnia: "amerykanska",
        opis: "Składniki: 1 szklanka mąki, szklanka maślanki, 1 jajko, 2 łyżki roztopionego masła, proszek do pieczenia, syrop klonowy.<br><br>Przepis: Wymieszaj składniki. Smaż małe, grube placuszki na suchej patelni. Polej syropem.<br><br>Makro (bez syropu): 350 kcal | B: 10g | W: 50g | T: 12g",
        zdj: "zdj/pancakes-klonowy.jpg"
    },
    {
        nazwa: "Ostre śniadaniowe Burrito",
        posilek: "sniadanie",
        smak: "ostry",
        kuchnia: "amerykanska",
        opis: "Składniki: 1 tortilla, 2 jajka, chorizo (kiełbasa), ser cheddar, jalapeño, salsa.<br><br>Przepis: Podsmaż chorizo, zalej jajkami. Zawiń jajecznicę, ser i jalapeño w tortillę. Podgrzej całość na patelni.<br><br>Makro: 550 kcal | B: 28g | W: 35g | T: 32g",
        zdj: "zdj/burrito-chorrizo.jpg"
    },
    {
    nazwa: "Schabowy z ziemniakami",
        posilek: "obiad",
        smak: "slony",
        kuchnia: "polska",
        opis: "Składniki: Schab, jajko, bułka tarta, ziemniaki, masło, sól, pieprz.<br><br>Przepis: Schab rozbij, panieruj w jajku i bułce, usmaż. Ziemniaki ugotuj.<br><br>Makro: 650 kcal | B: 35g | W: 50g | T: 30g",
        zdj: "zdj/schabowy.jpg.jpg"
    },
    {
        nazwa: "Knedle ze śliwkami",
        posilek: "obiad",
        smak: "slodki",
        kuchnia: "polska",
        opis: "Składniki: 500g ziemniaków, mąka, jajko, śliwki, cukier, masło, bułka tarta.<br><br>Przepis: Z ziemniaków, mąki i jajka wyrób ciasto. Uformuj kule ze śliwką w środku. Gotuj do wypłynięcia. Podaj z podsmażoną bułką z masłem.<br><br>Makro: 450 kcal | B: 10g | W: 80g | T: 12g",
        zdj: "zdj/knedle-ze-sliwkami.jpg"
    },
    {
        nazwa: "Pikantny gulasz wieprzowy",
        posilek: "obiad",
        smak: "ostry",
        kuchnia: "polska",
        opis: "Składniki: 500g wieprzowiny, cebula, papryka, pasta chili, bulion, przyprawy.<br><br>Przepis: Mięso podsmaż z cebulą. Zalej bulionem, dodaj paprykę i chili. Duś pod przykryciem do miękkości ok 1.5h.<br><br>Makro: 500 kcal | B: 40g | W: 15g | T: 28g",
        zdj: "zdj/racuchy.jpg"
    },
    {
        nazwa: "Spaghetti Bolognese",
        posilek: "obiad",
        smak: "slony",
        kuchnia: "wloska",
        opis: "Składniki: Makaron spaghetti, mięso mielone wołowe, przecier pomidorowy, cebula, czosnek, oliwa.<br><br>Przepis: Podsmaż mięso z cebulą i czosnkiem. Zalej przecierem, przypraw, duś. Podawaj z makaronem.<br><br>Makro: 550 kcal | B: 30g | W: 65g | T: 18g",
        zdj: "pikantny-gulasz-wieprzowy.jpg"
    },
    {
        nazwa: "Ravioli z ricottą na słodko",
        posilek: "obiad",
        smak: "slodki",
        kuchnia: "wloska",
        opis: "Składniki: Ciasto na makaron, serek ricotta, cukier waniliowy, cynamon.<br><br>Przepis: Zrób pierożki nadziewane słodką ricottą. Ugotuj. Podawaj polane roztopionym masłem i cynamonem.<br><br>Makro: 400 kcal | B: 15g | W: 50g | T: 16g",
        zdj: "zdj/ravioli.jpg"
    },
    {
        nazwa: "Penne all'Arrabbiata",
        posilek: "obiad",
        smak: "ostry",
        kuchnia: "wloska",
        opis: "Składniki: Makaron penne, puszka krojonych pomidorów, 2 ząbki czosnku, płatki chili, oliwa.<br><br>Przepis: Na oliwie podsmaż czosnek i chili. Wlej pomidory z puszki, duś przez 10 minut aż sos zgęstnieje. Wymieszaj z ugotowanym makaronem.<br><br>Makro: 400 kcal | B: 12g | W: 70g | T: 8g",
        zdj: "zdj/penne.jpg"
    },
    {
        nazwa: "Ryż smażony z kurczakiem",
        posilek: "obiad",
        smak: "slony",
        kuchnia: "chinska",
        opis: "Składniki: Ugotowany ryż, pierś z kurczaka, warzywa mrożone, sos sojowy, jajko.<br><br>Przepis: Podsmaż kurczaka i warzywa. Dodaj ryż i wbij jajko. Całość wymieszaj i dopraw sosem sojowym.<br><br>Makro: 450 kcal | B: 35g | W: 55g | T: 10g",
        zdj: "zdj/ryz-chin.jpg"
    },
    {
        nazwa: "Słodki ryż kokosowy",
        posilek: "obiad",
        smak: "slodki",
        kuchnia: "chinska",
        opis: "Składniki: Torebka białego ryżu, puszka mleczka kokosowego, 2 łyżki cukru, brzoskwinie z puszki (lub mango).<br><br>Przepis: Ugotuj ryż klasycznie w wodzie. Przełóż do garnka, zalej połową puszki mleczka kokosowego, dodaj cukier i chwilę podgrzewaj aż ryż wypije płyn. Zjedz z owocami.<br><br>Makro: 450 kcal | B: 6g | W: 85g | T: 12g",
        zdj: "zdj/ryz-kokos.jpg"
    },
    {
        nazwa: "Kurczak Kung Pao na ostro",
        posilek: "obiad",
        smak: "ostry",
        kuchnia: "chinska",
        opis: "Składniki: Kurczak, orzeszki ziemne, ostre papryczki chili, sos sojowy, czosnek.<br><br>Przepis: Kurczaka podsmaż, dorzuć posiekany czosnek i chili. Zalej sosem sojowym, wrzuć garść orzeszków i duś przez 3 minuty. Podawaj z makaronem.<br><br>Makro: 480 kcal | B: 32g | W: 15g | T: 30g",
        zdj: "zdj/kung-pao.jpg"
    },
    {
        nazwa: "Cheeseburger klasyczny",
        posilek: "obiad",
        smak: "slony",
        kuchnia: "amerykanska",
        opis: "Składniki: Bułka, mielona wołowina, ser cheddar, sałata, pomidor, majonez.<br><br>Przepis: Uformuj kotleta, usmaż (pod koniec kładąc ser). Złóż w podpieczonej bułce z dodatkami.<br><br>Makro: 600 kcal | B: 35g | W: 40g | T: 32g",
        zdj: "zdj/chees.jpg"
    },
    {
        nazwa: "Kurczak w miodowej glazurze BBQ",
        posilek: "obiad",
        smak: "slodki",
        kuchnia: "amerykanska",
        opis: "Składniki: Filet z kurczaka, słodki sos BBQ, miód, frytki z piekarnika.<br><br>Przepis: Kurczaka usmaż na patelni. Na sam koniec wlej 2 łyżki sosu BBQ wymieszane z łyżką miodu, żeby mięso pokryło się lepką, słodką glazurą. Podaj z frytkami.<br><br>Makro: 650 kcal | B: 35g | W: 60g | T: 25g",
        zdj: "zdj/kurczal-miod.jpg"
    },
    {
        nazwa: "Buffalo Wings (Ostre skrzydełka)",
        posilek: "obiad",
        smak: "ostry",
        kuchnia: "amerykanska",
        opis: "Składniki: Skrzydełka z kurczaka, ostry sos sriracha, masło, ocet.<br><br>Przepis: Skrzydełka upiecz na chrupko. Wymieszaj we wrzącym sosie z ostrym chili i roztopionym masłem.<br><br>Makro: 650 kcal | B: 45g | W: 5g | T: 48g",
        zdj: "zdj/Buffalo-Wings.jpg"
    },
        {
        nazwa: "Kanapki z twarożkiem",
        posilek: "kolacja",
        smak: "slony",
        kuchnia: "polska",
        opis: "Składniki: Chleb, biały ser, śmietana lub jogurt naturalny, rzodkiewka, sól, pieprz.<br><br>Przepis: Zgnieć ser ze śmietaną, solą i pieprzem. Pokrój rzodkiewkę w kostkę i wymieszaj. Posmaruj na chlebie.<br><br>Makro: 350 kcal | B: 18g | W: 40g | T: 12g",
        zdj: "zdj/kanapki-twarog.jpg"
    },
    {
        nazwa: "Naleśniki z twarogiem",
        posilek: "kolacja",
        smak: "slodki",
        kuchnia: "polska",
        opis: "Składniki: Ciasto naleśnikowe, twaróg, cukier waniliowy, śmietana.<br><br>Przepis: Usmaż naleśniki. Twaróg zblenduj ze śmietaną i cukrem, rozsmaruj na naleśnikach i zwiń.<br><br>Makro: 400 kcal | B: 18g | W: 55g | T: 12g",
        zdj: "zdj/nalesniki-ser.jpg"
    },
    {
        nazwa: "Zapiekanki z pieczarkami",
        posilek: "kolacja",
        smak: "ostry",
        kuchnia: "polska",
        opis: "Składniki: Bagietka, pieczarki, ser żółty, ostry ketchup.<br><br>Przepis: Zetrzyj pieczarki na tarce, połóż na bagietkę, posyp serem. Zapiecz w piekarniku. Polej ostrym ketchupem.<br><br>Makro: 400 kcal | B: 15g | W: 50g | T: 16g",
        zdj: "zdj/zapiekanka.jpg"
    },
    {
        nazwa: "Tortilla z szynką i serem",
        posilek: "kolacja",
        smak: "slony",
        kuchnia: "wloska",
        opis: "Składniki: Placek tortilli, szynka, ser żółty, majonez.<br><br>Przepis: Posmaruj placek majonezem, połóż szynkę i ser. Zwiń w rulon i podgrzej na suchej patelni z obu stron żeby ser się roztopił.<br><br>Makro: 350 kcal | B: 18g | W: 35g | T: 15g",
        zdj: "zdj/tortilla.jpg"
    },
    {
        nazwa: "Tiramisu w pucharku",
        posilek: "kolacja",
        smak: "slodki",
        kuchnia: "wloska",
        opis: "Składniki: Mascarpone, biszkopty, kawa, kakao, cukier puder.<br><br>Przepis: Biszkopty namocz w kawie. Mascarpone ubij z cukrem. Układaj warstwowo w pucharku. Posyp kakao.<br><br>Makro: 450 kcal | B: 8g | W: 40g | T: 30g",
        zdj: "zdj/tiramisu.jpg"
    },
    {
        nazwa: "Bruschetta pikantna",
        posilek: "kolacja",
        smak: "ostry",
        kuchnia: "wloska",
        opis: "Składniki: Bagietka, pomidory, czosnek, chili, oliwa.<br><br>Przepis: Bagietkę zgrilluj. Pomidory pokrój, wymieszaj z czosnkiem, oliwą i posiekanym chili. Nałóż na pieczywo.<br><br>Makro: 220 kcal | B: 6g | W: 30g | T: 8g",
        zdj: "zdj/bruschetta.jpg"
    },
    {
        nazwa: "Ekspresowy ryż z jajkiem i sosem sojowym",
        posilek: "kolacja",
        smak: "slony",
        kuchnia: "chinska",
        opis: "Składniki: Ugotowany ryż (najlepiej resztka z obiadu), 1 jajko, 2 łyżki sosu sojowego, łyżeczka masła lub oleju.<br><br>Przepis: Rozgrzej masło na patelni, wrzuć ryż. Po minucie wbij na to jajko, wlej sos sojowy i energicznie mieszaj przez 2 minuty, aż jajko się zetnie. Gotowe!<br><br>Makro: 320 kcal | B: 10g | W: 45g | T: 10g",
        zdj: "zdj/ryz-jajko.jpg"
    },
    {
        nazwa: "Banan w cieście smażony w głębokim tłuszczu",
        posilek: "kolacja",
        smak: "slodki",
        kuchnia: "chinska",
        opis: "Składniki: Banany, mąka pszenna, woda, olej, cukier puder.<br><br>Przepis: Zrób gęste ciasto (woda+mąka). Banany panieruj i smaż w głębokim tłuszczu. Podawaj z cukrem pudrem.<br><br>Makro: 400 kcal | B: 4g | W: 70g | T: 15g",
        zdj: "zdj/banan.jpg"
    },
    {
        nazwa: "Ramen Hack z masłem orzechowym",
        posilek: "kolacja",
        smak: "ostry",
        kuchnia: "chinska",
        opis: "Składniki: Zupka chińska (pikantna), łyżka masła orzechowego, jajko, szczypiorek.<br><br>Przepis: Zupkę ugotuj w małej ilości wody. Dodaj przyprawy z saszetki i masło orzechowe. Wymieszaj na gęsty sos. Podawaj z ugotowanym jajkiem i szczypiorkiem.<br><br>Makro: 480 kcal | B: 18g | W: 45g | T: 25g",
        zdj: "zdj/ramen.jpg"
    },
    {
        nazwa: "Mac and Cheese",
        posilek: "kolacja",
        smak: "slony",
        kuchnia: "amerykanska",
        opis: "Składniki: Makaron kolanka, masło, mąka, mleko, dużo sera cheddar.<br><br>Przepis: Zrób sos beszamelowy (masło, mąka, mleko), rozpuść w nim ser. Wymieszaj z makaronem i zapiecz.<br><br>Makro: 550 kcal | B: 20g | W: 50g | T: 30g",
        zdj: "zdj/macandchees.jpg"
    },
    {
        nazwa: "Brownie z lodami waniliowymi",
        posilek: "kolacja",
        smak: "slodki",
        kuchnia: "amerykanska",
        opis: "Składniki: Gorzka czekolada, masło, cukier, mąka, jajka, lody waniliowe.<br><br>Przepis: Czekoladę rozpuść z masłem. Dodaj resztę składników. Piecz 25 min w 180°C. Podawaj na ciepło z gałką lodów.<br><br>Makro: 600 kcal | B: 8g | W: 65g | T: 35g",
        zdj: "zdj/brownie.jpg"
    },
    {
        nazwa: "Nachosy z ostrym sosem serowym",
        posilek: "kolacja",
        smak: "ostry",
        kuchnia: "amerykanska",
        opis: "Składniki: Paczka chipsów nachos, słoik ostrego dipu serowego (lub salsy).<br><br>Przepis: Wysyp nachosy na talerz. Sos serowy podgrzej chwilę w mikrofalówce i polej nim chipsy. Idealne do filmu.<br><br>Makro: 500 kcal | B: 8g | W: 60g | T: 25g",
        zdj: "zdj/nachosy.jpg"
    }
];

document.getElementById('form-pytania').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const wybrany_posilek = document.getElementById('posilek').value;
  const wybrany_smak = document.getElementById('smak').value;
  const wybrana_kuchnia = document.getElementById('kuchnia').value;
  
  const znaleziony = zbior_przepisow.find(przepis => przepis.posilek === wybrany_posilek && przepis.smak === wybrany_smak && przepis.kuchnia === wybrana_kuchnia);
  
  const msc_na_wynik = document.getElementById('wynik');
  
  if (znaleziony) {
    msc_na_wynik.innerHTML = `<h3>${znaleziony.nazwa}</h3>
    <img src="${znaleziony.zdj}" alt="${znaleziony.nazwa}" style="max-width: 100%;">
    <p>${znaleziony.opis}</p>`;
  } 
  else {
    msc_na_wynik.innerHTML = `<h3>:// Błąd ://</h3>`;
  }
});
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}