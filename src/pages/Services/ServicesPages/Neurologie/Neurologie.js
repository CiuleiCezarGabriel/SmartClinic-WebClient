import React from 'react';
import './neurologie.scss';

function Neurologie() {

    return (
        <div class="text-center px-20 py-4 my-2 elevation-z16">
            <h1 class="title animated fadeInDown py-4">Neurologie</h1>
            <strong class="font-18 txt-primary">Dr. MOLNAR Rodica</strong>
            <strong class="font-18 txt-primary">Program: luni-vineri</strong>
            <p>08:00 - 18:00</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Neurologia este o ramura speciala a medicinii care se ocupa cu diagnosticul si tratamentul bolilor organice care afecteaza sistemul nervos central sau periferic. Structurile organice ce tin de domeniul neurologiei sunt - pe de o parte - creierul, maduva spinarii (reprezinta sistemul nervos central), structurile Ónconjuratoare, precum si vasele sanguine care le hranesc, - pe de alta parte - nervii cranieni, radacinile nervoase si ganglionii spinali, nervii periferici, dupa iesirea din canalul spinal, inclusiv legaturile cu muschii scheletici (reprezinta sistemul nervos periferic).</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Motive pentru care ar trebui sa va prezentati la un consult neurologic:</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    -Durerile de cap: sunt durerile pe care toată lumea le-a experimentat. Le puteți simți în sinusurile dumneavoastră, în partea de sus a capului, de-a lungul mușchilor capului, la nivelul gâtului, umerilor sau de-a lungul bazei craniului și a creierului. Aceste dureri pot fi cauzate de mai multe condiții, și anume pornesc de la o infecție a sinusurilor și ajung la o durere de dinți. Simptomele durerilor de cap mai grave, inclusiv migrenele, pot fi și vărsăturile. Dacă simptomele sunt provocate de durerea de cap severă, este indicat să vă prezentați la un consult neurologic.</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    -Amețeala: este de mai multe tipuri. Neurologii tratează amețeala ca fiind un simptom de vertij sau dezechilibru. Vertijul vă face să vă simțiți ca și cum lucrurile din jurul dumneavoastră se rotesc. Dezechilibrul este dificultatea în menținerea echilibrului.</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    -Amorțeala sau furnicăturile: pot apărea din mai multe motive, unele la fel de simple precum a avea o pozitie inadecvată astfel încât circulația sângelui scade. Cu toate acestea, în cazul în care amorțeala continuă, apare brusc sau are loc doar pe o parte a corpului, acesta este momentul oportun pentru a vedea un medic neurolog. Simptomele amorțelii sau ale furnicăturilor pot fi semnele unui accident vascular cerebral, caz în care aveți nevoie de ajutor cât mai rapid.</p>
            <p class="lista">Semnele de avertizare pentru a primi asistență medicală de specialitate includ:</p>

            <p class="lista">   -Vârsta de peste 50 de ani și aveți dureri de cap cronice;</p>
            <p class="lista">   -Durerea de cap este însoțită de greață, vărsături, amețeli, confuzie, pierderea conștiintei sau vedere încețoșată;</p>
            <p class="lista">   -Aveți două sau mai multe dureri de cap într-o săptămână;</p>
            <p class="lista">   -Durerile de cap nu răspund la tratamentul administrat;</p>
            <p class="lista">   -Durerile de cap nu răspund la tratamentul administrat;</p>
            <p class="lista">   -Un istoric ce include cancerul sau HIV/SIDA.</p>


            
            <h3>Tarife</h3>
            <div class="table-responsive">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td>Consulțatie</td>
                                <td><span class="h4">120 ron</span></td>
                            </tr>
                            <tr>
                                <td>Control</td>
                                <td><span class="h4">50 ron</span></td>
                            </tr>
                            <tr>
                                <td>Referat medical</td>
                                <td><span class="h4">100 ron</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button class="btn"><a class="btn-primary btn" href="/login"> Programare Online</a></button>
        </div>
    )
}

export default Neurologie;