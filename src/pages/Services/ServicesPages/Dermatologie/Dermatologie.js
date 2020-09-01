import React from 'react';
import './dermatologie.scss';

function Dermatologie() {

    return (
        <div class="text-center px-20 py-4 my-2 elevation-z16">
                <h1 class="title animated fadeInDown py-4">DERMATOLOGIE</h1>
                <strong class="font-18 txt-primary">Dr. CEUCA Lavinia</strong>
                <strong class="font-18 txt-primary">Program: luni-vineri</strong><p>08:00 - 18:00</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DERMATOLOGIA este o ramură a medicinei care se ocupă de piele şi bolile sale. Ea urmăreşte diagnosticarea şi tratarea bolilor de piele necontagioase şi contagioase (infecţioase). Dermatologia acoperă şi domeniul bolilor venerice (care se transmit pe cale sexuală). Medicul are grijă atât de bolile pielii, cât şi de unele probleme estetice ale pielii, scalpului, părului şi unghiilor. Funcţia pielii este de a asigura o protecţie împotriva agenţilor chimici şi fizici, întărită prin acţiunea keratinei şi a melaninei. Pielea mai intervine şi în termoreglare (menţinerea unei temperaturi interne constante) prin dilatarea vaselor sangvine cutanate şi prin evaporarea sudorii, ceea ce permite evacuarea unui exces de căldură. Din structura pielii fac parte şi numeroase glande: sudoripare (secretă sudoarea)&nbsp;şi sebacee (secretă sebumul sau grăsimea pielii ce formează o peliculă protectoare la suprafaţa pielii şi părului).</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Trebuie să ne ferim pielea de acțiunea nocivă a razelor UV. Este bine știut că razele UV pot provoca arsuri la nivelul pielii, dar de departe cea mai temută complicație este aparitia cancerului de piele. De aceea persoanele care au avut sau au în familie rude cunoscute cu cancer de piele (melanom), trebuie să evite expunerea la soare, să folosească creme de protecție solară și să consulte un medic dermatolog penru a evalua riscurile. Nu trebuie neglijați nici nevii melanocitari (alunițele). Este obligatorie inspecția periodică a acestora (evaluare cu ochiul liber) pentru o observa din timp eventualele transformări. Nevii expuși la traumatisme, arsuri solare, cei care suferă transformări de culoare, dimensiune și aspect pot fi evaluați de către medicul dermatolog cu ajutorul dermatoscopului. Dermatoscopul este un aparat (un fel de lupă) cu care se pot evalua caracterele cancerigene ale alunițelor și necesitatea exciziei acestora. Pentru nevii "problema", dermatoscopia este obligatorie o dată la 6 luni.</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Pentru orice problemă cu pielea este indicat să cerem sfatul unui medic dermatolog. Nu trebuie să ne autotratăm fără cunoștință de cauză și, important de reținut, nu toate petele roșii, petele maronii, coșurile și bubițele de pe față și corp se tratează la cosmetică! Să nu ne lăsăm influiențați de reclamele de la televizor sau din reviste! Nu toate produsele cosmetice sunt bune, unele din ele sunt chiar iritante. Un produs cosmetic nu se alege după culoare, miros sau aspectul ambalajului. Dermatologul poate indica produsele cosmetice corespunzatoare tipului de ten/piele și este cel care poate institui un tratament adecvat în cazul bolilor de piele.</p>
                <p class="lista">Cele mai frecvente diagnosticate patologii ale pacientilor sunt:</p>

                <p class="lista">Sindromul seboreic:</p>
                <p class="lista">-Acnee vulgara</p>
                <p class="lista">-Acnee rozacee</p>
                <p class="lista">Infecții cutanate virale</p>
                <p class="lista">-  Veruci: vulgare, plane, plantare</p>
                <p class="lista">  -  Condilomae acuminate</p>
                <h3>Tarife</h3>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <td>Consultație</td>
                                <td><span class="h5">110 ron</span></td>
                            </tr>
                            <tr>
                                <td>Electrocauterizare (în funcție de numărul de leziuni)</td>
                                <td><span class="h5">100-400 ron</span></td>
                            </tr>
                            <tr>
                                <td>Control</td>
                                <td><span class="h5">50 ron</span></td>
                            </tr>
                            <tr>
                                <td>Dermatoscopie</td>
                                <td><span class="h5">150 ron</span></td>
                            </tr>
                            <tr>
                                <td>Pansamente</td>
                                <td><span class="h5">10-30 ron</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button class="btn"><a class="btn-primary btn" href="/login"> Programare Online</a></button>
        </div>
    )
}

export default Dermatologie;