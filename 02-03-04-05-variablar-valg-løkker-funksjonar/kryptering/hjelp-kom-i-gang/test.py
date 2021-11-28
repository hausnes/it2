from datetime import datetime
import random

# Innstillingar
tidsstempel = datetime.now()
forsinkelse = 5 # sekunder

def hentData():
    listeVerdata = [] # Ei liste som etterkvart skal innehalde data
    # Legg til trykk
    trykk = random.randint(1000,1100)
    listeVerdata.append(trykk)
    # Legg til temperatur
    temp = random.randint(20,26)
    listeVerdata.append(temp)
    # Legg til fukt
    fukt = random.randint(34,66)
    listeVerdata.append(fukt)
    # Legg til tidspunkt for avlesing
    listeVerdata.append(datetime.now())
    # Sender data tilbake til den som spurte i form av liste med alt innhald
    return listeVerdata

while True:
    data = hentData()
    dt = data[-1] - tidsstempel # Kva trur du data[-1] betyr? Kontroller i eit enklare eksempel.
    #print(dt.seconds)
    if dt.seconds > forsinkelse:
        print("Full liste denne runden:",hentData())
        tidsstempel = datetime.now()