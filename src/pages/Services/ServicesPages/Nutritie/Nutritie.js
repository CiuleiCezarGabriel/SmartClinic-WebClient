import React from 'react';
import './nutritie.scss';

function Nutritie() {

    return (
        <div class="text-center px-20 py-4 my-2 elevation-z16">
            <h1 class="title animated fadeInDown py-4">Nutritie</h1>
            <strong class="font-18 txt-primary">Dr. CEUCA Lavinia</strong><br></br><p>08:00 - 18:00</p>
            <strong class="font-18 txt-primary">PROGRAM DE CREȘTERE A MOTIVAȚIEI PENTRU SLĂBIT</strong>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Pentru a putea obține rezultate pe termen lung este necesară o schimbare a obiceiurilor, de multe ori este imperios necesară schimbarea dietei, dar cea mai importantă este schimbarea mentalității. Modificarea comportamentului alimentar nu este un lucru ușor de realizat. Acest fapt este bine cunoscut de toți cei care au urmat o "dietă minune", dintre cele intens mediatizate, dar care dau rezultate pe termen scurt, dar apoi lasă sechele importante și se poate ajunge la o greutate mai mare decât cea inițială.</p>
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      Schimbarea comportamentului alimentar se poate realiza prin tehnici speciale și printr-o abordare corectă. Pentru a ajuta pacienții. am creat un sistem de monitorizări structurate, în care schimbarea comportamentului alimentar se produce treptat și se menține ușor la finalizarea programului. Astfel, oricine are șansa să slăbească ușor și să se mențină fără probleme pe termen lung.</p>

            <h3>Tarife</h3>
            <div class="table-responsive">
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>Consultație</td>
                            <td><span class="h4">150 ron</span></td>
                        </tr>
                        <tr>
                            <td>Control</td>
                            <td><span class="h4">120 ron</span></td>
                        </tr>
                        <tr>
                            <td>Plan de nutriție personalizat(include consult+meniu personalizat+control la 2-4 săpt)</td>
                                <td><span class="h4">450 ron</span></td>
                            </tr>
                </tbody>
                </table>
                </div>
                <button class="btn"><a class="btn-primary btn" href="/login"> Programare Online</a></button>
            </div>
    )
}

export default Nutritie;