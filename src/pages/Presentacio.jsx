import PropTypes from 'prop-types';



// Presentació
const Presentacio = () => {
    return (
      <div className="app-section">
        <div id="presentacio-text">
          <h1 className="titol-presentacio">
            Què són els Data Days?
          </h1>
          <p>
            Explicació Data Days.
          </p>
        </div>
        
        {/* <div className="container">
          <div className="row align-items-start">
          <div className="quest col-12 col-md-4">Quan?</div>
          <div className="quest col-12 col-md-4">On?</div>
          <div className="quest col-12 col-md-4">Qui?</div>
          </div>
        </div> */}


        <div id="FAQsection">
          <h1 className="titol-presentacio">
            Preguntes més freqüents (FAQs)
          </h1>
          <div class="FAQsection">
            <h3>Sobre l'esdeveniment</h3>
            <div class="accordion mimi accordion-flush" id="accordionFlushExample">
              {/* <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Puc venir només a una xerrada?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Sí, és clar!</div>
                </div>
              </div> */}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item mimi">
                    <h2 class="accordion-header mimi">
                        <button class="accordion-button mimi collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="collappse-visibility accordion-body">
                            Content for Accordion Item #1 goes here.
                        </div>
                    </div>
                </div>
                <div class="accordion-item mimi">
                    <h2 class="accordion-header mimi">
                        <button class="accordion-button mimi collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="collappse-visibility accordion-body">
                            Content for Accordion Item #2 goes here.
                        </div>
                    </div>
                </div>
                <div class="accordion-item mimi">
                    <h2 class="accordion-header mimi">
                        <button class="accordion-button mimi collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="collappse-visibility accordion-body">
                            Content for Accordion Item #3 goes here.
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
          <div class="FAQsection">
            <h3>Participants</h3>
            <div class="accordion accordion-flush">
            <div class="accordion mimi accordion-flush" id="accordionFlushExample">
              {/* <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Puc venir només a una xerrada?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Sí, és clar!</div>
                </div>
              </div> */}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item mimi">
                    <h2 class="accordion-header mimi">
                        <button class="accordion-button mimi collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="collappse-visibility accordion-body">
                            Content for Accordion Item #1 goes here.
                        </div>
                    </div>
                </div>
                <div class="accordion-item mimi">
                    <h2 class="accordion-header mimi">
                        <button class="accordion-button mimi collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="collappse-visibility accordion-body">
                            Content for Accordion Item #2 goes here.
                        </div>
                    </div>
                </div>
                <div class="accordion-item mimi">
                    <h2 class="accordion-header mimi">
                        <button class="accordion-button mimi collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="collappse-visibility accordion-body">
                            Content for Accordion Item #3 goes here.
                        </div>
                    </div>
                </div>
            </div>
          </div>
            </div>
          </div>
          <div class="FAQsection">
            <h3>Voluntaris</h3>
            <div class="accordion accordion-flush">
              {/* <FAQ
              question="Quines tasques faria com a voluntari/voluntària?"
              answer="..."
              /> */}
            </div>
          </div>
          <div class="FAQsection">
            <h3>Empreses</h3>
            <div class="accordion accordion-flush">

            </div>
          </div>


        </div>
      </div>
    )
  };
  
  export default Presentacio;