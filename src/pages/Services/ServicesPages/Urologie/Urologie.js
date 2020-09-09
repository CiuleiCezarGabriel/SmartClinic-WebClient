import React from 'react';
import './urologie.scss';

function Urologie() {

    return (
        <div class="text-center px-20 py-4 my-2 elevation-z16">
            <h1 class="title animated fadeInDown py-4">Urologie</h1>
            <strong class="font-18 txt-primary">Dr. DUMITRESCU Ion</strong>
            <strong class="font-18 txt-primary">Program: luni-vineri</strong><p>08:00 - 18:00</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    UROLOGIA este specialitatea chirurgicală care se ocupă de diagnosticarea și tratamentul afecțiunilor sistemului reno-urinar masculin și feminin, precum: rinichi, uretere, vezica urinară și uretra. Pentru că ne dorim să beneficiezi de cât mai multe din serviciile de care ai nevoie, încercăm, pas cu pas, să îți punem la dispoziție soluții favorabile și alternative eficiente, iar asta o putem face doar contribuind la dezvoltarea ariei de activitate.</p>
            <p class="lista">Paleta de patologie care poate fi diagnosticată la CLINICA NAPOCA este extrem de cuprinzătoare, şi acoperă practic întreaga patologie urologică, după cum urmează:</p>

            <p class="lista">-Fimoza, parafimoza, coarda peniană, frenul scurt, carunculele uretrale</p>
            <p class="lista">-Varicocelul, hidrocelul, tumorile testiculare, torsiunea de testicol</p>
            <p class="lista">-Adenomul de prostată, cancerul de prostată, prostatitele</p>
            <p class="lista">-Cistitele acute şi cronice, tumorile vezicale, litiaza vezicală, ureterocelul</p>
            <p class="lista">-Litiaza şi tumorile ureterale, stricturile ureterale</p>
            <p class="lista">-Litiaza renală, sindromul de joncţiune pieloureterală, tumorile renale şi de suprarenale</p>
            <h3>Tarife</h3>
            <div class="table-responsive">
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>Consultație</td>
                            <td><span class="h4">120 ron</span></td>
                        </tr>
                        <tr>
                            <td>Consultație cu ecografie</td>
                            <td><span class="h4">180 ron</span></td>
                        </tr>
                        <tr>
                            <td>Control</td>
                            <td><span class="h4">70 ron</span></td>
                        </tr>
                        <tr>
                            <td>Montare/schimbare sondă urinară</td>
                            <td><span class="h4">100 ron</span></td>
                        </tr>
                        <tr>
                            <td>suprimare sondă Foley</td>
                            <td><span class="h4">50 ron</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn"><a class="btn-primary btn" href="/login"> Programare Online</a></button>
        </div>
    )
}

export default Urologie;