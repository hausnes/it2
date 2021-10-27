var inputMelding = document.getElementById("inputMelding");
            var inputKrypteringsnokkel = document.getElementById("inputKrypteringsnokkel");
            var outputMelding = document.getElementById("outputMelding");
            var outputBruteForce = document.getElementById("outputBruteForce");
            var knappKrypter = document.getElementById("knappKrypter");
            var knappDekrypter = document.getElementById("knappDekrypter");
            var knappBruteForce = document.getElementById("knappBruteForce");
            knappKrypter.onclick = f_krypterMelding;
            knappDekrypter.onclick = f_dekrypterMelding;
            knappBruteForce.onclick = f_bruteForce;

            var alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!?";
            var alfabetLengde = alfabet.length;
            console.log(alfabetLengde);
                
            // Den hemmelege beskjeden, og annan informasjon om krypteringen
            var kryptertMelding = "";
            var ukryptertMelding = "";
            var krypteringsnokkel = 0; // "Forskyvningen", kvitteringsnøkkelen, eksempelvis skal 'a' bli 'c'. 0 gjer at 'a' blir 'a', 1 gjer at 'a' blir 'b'
            var karakter = "";

            // Krypteringsfunksjonen, som får inn bokstaven ein skal kryptere, samt krypteringsnøkkelen. Returnerer den nye bokstaven.
            function krypterBokstav(bokstavInn, krypteringsnokkelInn){
                posisjon = alfabet.indexOf(bokstavInn);
                posisjonNy = (posisjon + krypteringsnokkelInn);
                //console.log("posisjonNy før if: " + posisjonNy);
                if(posisjonNy >= alfabetLengde){
                    posisjonNy = posisjonNy - alfabetLengde;
                    //console.log("if køyrer i krypterBokstav... posisjonNy:" + posisjonNy);
                }
                console.log("krypterBokstav fekk inn bokstavInn:" + bokstavInn + ", krypteringsnokkelInn:" + krypteringsnokkelInn + ", posisjon:" + posisjon + ", posisjonNy:" + posisjonNy + " - og returnerer: " + alfabet[posisjonNy]);
                return alfabet[posisjonNy];
            }

            // Dekrypteringsfunksjonen, mistenkeleg lik som krypteringsfunksjonen. Kva er anleis?
            function dekrypterBokstav(bokstavInn, krypteringsnokkelInn){
                posisjon = alfabet.indexOf(bokstavInn);
                posisjonNy = (posisjon - krypteringsnokkelInn);

                if(posisjonNy < 0){
                    posisjonNy = posisjonNy + alfabetLengde;
                }
                return alfabet[posisjonNy];
            }

            // Test av kryptering, utan at brukar må skrive inn:
            console.log(krypterBokstav("a",1));

            /*
                Funksjonen som går gjennom heile meldinga (frå inputfeltet) og krypterer
                ---------------------------------------------------------
            */
            function f_krypterMelding(){
                // Hentar ut melding
                ukryptertMelding = inputMelding.value;
                console.log(ukryptertMelding);
                krypteringsnokkel = Number(inputKrypteringsnokkel.value);
                console.log(krypteringsnokkel);
                kryptertMelding = "";

                for(let i = 0; i < ukryptertMelding.length; i++) { // For heile meldinga/teksten
                    if(alfabet.indexOf(ukryptertMelding.charAt(i)) !== -1){ // Dersom me finn bokstaven i alfabetet...
                        kryptertMelding = kryptertMelding + krypterBokstav(ukryptertMelding.charAt(i),krypteringsnokkel); // ...send den til kryptering
                        //console.log("If, bokstav funnen. Iterasjon nr. " + i + ". Innhald ukryptertMelding.charAt(i) = " + ukryptertMelding.charAt(i));
                    }
                    else{
                        kryptertMelding = kryptertMelding + ukryptertMelding.charAt(i); // Dersom me ikkje finn bokstaven/teiknet, legg det til slik det er.
                        //console.log("Else, bokstav ikkje funnen. Iterasjon nr. " + i + ". Innhald: " + ukryptertMelding.charAt(i));
                    }
                }
                console.log("Resultatet med 'tradisjonell for-løkke' er = " + kryptertMelding + ".");
                outputMelding.innerHTML = "Kryptert melding av input <span style='color:red;'>" + ukryptertMelding + "</span>, blir oversatt til <span style='color:red;'>" + kryptertMelding + "</span>.";

                // NB: Alternativ for .. of - med same resultat. Kan kuttast ut.
                let resultat = "";
                for(let bokstav of ukryptertMelding) {
                    if(alfabet.indexOf(bokstav) !== -1){
                        resultat = resultat + krypterBokstav(bokstav,krypteringsnokkel);
                    }
                    else{
                        resultat = resultat + bokstav;
                    }
                }
                console.log("Resultatet med for .. of er: " + resultat);
            }
            
            /* 
                Funksjonen som dekypterer meldinga frå tekstfeltet
                --------------------------------------------------
            */
            function f_dekrypterMelding(){
                dekryptertMelding = "";
                kryptertmelding = inputMelding.value;
                krypteringsnokkel = Number(inputKrypteringsnokkel.value);

                for(let bokstav of kryptertmelding){
                    if(alfabet.indexOf(bokstav) !== -1){
                        dekryptertMelding = dekryptertMelding + dekrypterBokstav(bokstav, krypteringsnokkel);
                    }
                    else{
                        dekryptertMelding = dekryptertMelding + bokstav;
                    }
                }
                console.log("Den krypterte meldinga " + kryptertmelding + " blir oversatt til: " + dekryptertMelding);
                outputMelding.innerHTML = "Dekryptert melding av input <span style='color:red;'>" + kryptertMelding + "</span> blir oversatt til <span style='color:red;'>" + dekryptertMelding + "</span>.";
            }

            /*
                Funksjonen som hjelper deg å teste ut "haugevis" av kombinasjonar av nøklar,
                dersom du ikkje har denne informasjonen. NB: Burde brukt f_dekrypterMelding-funksjonen..
                ----------------------------------------------------------------------------------------
            */
            function f_bruteForce(){
                kryptertMelding = inputMelding.value;
                dekryptertMelding = "";
                krypteringsnokkel = 0; // Denne tek for-løkka og endrar fortløpande, 'krypteringsnokkel = j'
                outputBruteForce.innerHTML = "";

                for(let j = 1; j<=alfabet.length; j++){
                    outputBruteForce.innerHTML += "<p>Nøkkel: " + j + "<br>";
                    dekryptertMelding = "";
                    for(let bokstav of kryptertMelding){
                        if(alfabet.indexOf(bokstav) !== -1){
                            krypteringsnokkel = j;
                            dekryptertMelding = dekryptertMelding + dekrypterBokstav(bokstav,krypteringsnokkel);
                        }
                        else{
                            dekryptertMelding = dekryptertMelding + bokstav;
                        }
                    }
                    outputBruteForce.innerHTML += dekryptertMelding + "</p>";
                    console.log(dekryptertMelding);
                }
            }