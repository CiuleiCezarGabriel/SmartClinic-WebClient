import React from 'react';
import './pedriatie.scss';

function Pedriatie() {

    return (
        <div class="text-center px-20 py-4 my-2 elevation-z16">
            <h1 class="title animated fadeInDown py-4">Pedriatie</h1>
            <strong class="font-18 txt-primary">Dr. BACIU Lavinia</strong>
            <strong class="font-18 txt-primary">Program: luni-vineri</strong><p>08:00 - 18:00</p>

            <strong class="font-18 txt-primary">Dr. MÂRZA Smaranda  </strong>
            <strong class="font-18 txt-primary">Program: luni-vineri</strong><p>09:00 - 14:00</p>

            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Pediatria este acea ramură a medicinei care se ocupă cu descrierea diagnosticului și tratamentului bolilor copilului de la naștere până la adolescență. Pediatria este cea mai frumoasă meserie din lume. Mulți cred că e dificilă, pentru că un copil nu știe să spună ce-l doare. Cea mai mare provocare este să reușești să stabilești o relație cu el.</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Un pediatru trebuie să fie un bun profesionist și, în același timp, un psiholog competent. Trebuie să știe să câștige încrederea pacientului, dar și a părintelui. Acesta este primul pas spre vindecare. De la cea mai fragedă vârstă, copilul tău poate prezenta diferite semne de boală. Acordă atenție tuturor simptomelor și depistează la timp eventualele probleme de sănătate ale copilului tău. În scop diagnostic, medicul pediatru îți poate prescrie diferite investigații de laborator sau consultația altor specialisti.</p>
            <p class="lista">Dintre cele mai frecvente boli înatâlnite în rândul copiilor amintim:</p>

            <p class="lista">-Bolile copilăriei : oreionul, rubeola, rujeola (pojarul), varicela, scarlatina, boala gura-mana-picior</p>
            <p class="lista">-Bolile tractului respirator : vegetații adenoidiene (polipi), rinofaringita, amigdalita, laringita, traheobronșita, bronșiolita, pneumonia, astmul bronșic, tusea</p>
            <p class="lista">-Sinuzita, otita</p>
            <p class="lista">-Bolile tractului digestiv: colici, abdomen cronic dureros, vărsăturile la copil, diaree cronică, constipația, intoleranța la lactoză, malabsorbția, boala Crohn, paraziți intestinali</p>
            <p class="lista">-Bolile hematologice: anemia, hemofilia, talasemia</p>
            <p class="lista">-Obezitatea infantilă, deficitul staturo-ponderal</p>
            <h3>Tarife</h3>
            <div class="table-responsive">
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>Consultație</td>
                            <td><span class="h4">120 ron</span></td>
                        </tr>
                        <tr>
                            <td>Ecografie abdominală&nbsp;(Dr. Maier Mirela, Dr. Mârza Smaranda)</td>
                            <td><span class="h4">120 ron</span></td>
                        </tr>
                        <tr>
                            <td>Ecografie cardiacă pediatrică(Dr. Baciu Alina)</td>
                            <td><span class="h4">180 ron</span></td>
                        </tr>
                        <tr>
                            <td>Ecografie de șold(Dr. Maier Mirela)</td>
                            <td><span class="h4">150 ron</span></td>
                        </tr>
                        <tr>
                            <td>Consultație cu ecografie abdominală(Dr. Baciu Alina, Dr. Mârza Smaranda)</td>
                            <td><span class="h4">&nbsp;175 ron</span></td>
                        </tr>
                        <tr>
                            <td>Consultație cu examen ecografie de șold(Dr. Maier Mirela)</td>
                            <td><span class="h4">200 ron</span></td>
                        </tr>
                        <tr>
                            <td>Consultație cu EKG, ecografie cardiacă pediatrică și adeverință(Dr. Baciu Alina)</td>
                            <td><span class="h4">250 ron</span></td>
                        </tr>
                        <tr>
                            <td>Consult 2 frați</td>
                            <td><span class="h4">220 ron</span></td>
                        </tr>
                        <tr>
                            <td>Consult 3 frați</td>
                            <td><span class="h4">300 ron</span></td>
                        </tr>
                        <tr>
                            <td>Control</td>
                            <td><span class="h4">60 ron</span></td>
                        </tr>
                        <tr>
                            <td>Consiliere diversificare</td>
                            <td><span class="h4">60 ron</span></td>
                        </tr>
                        <tr>
                            <td>Recomandare analize</td>
                            <td><span class="h4">30 ron</span></td>
                        </tr>
                        <tr>
                            <td>Interpretare analize</td>
                            <td><span class="h4">30 ron</span></td>
                        </tr>
                        <tr>
                            <td>Eliberare adeverință medicală</td>
                            <td><span class="h4">25 ron</span></td>
                        </tr>
                        <tr>
                            <td>Aviz epidemiologic</td>
                            <td><span class="h4">25 ron</span>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Aerosoli (preț per ședință)</td>
                            <td><span class="h4">&nbsp;25 ron</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn"><a class="btn-primary btn" href="/login"> Programare Online</a></button>
        </div>
    )
}

export default Pedriatie;