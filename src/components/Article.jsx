import React from 'react'

const Article = () => {
  return (
    <div id="articulo">
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-screen-lg format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img class="mr-4 w-16 h-16 rounded-full" src="./images/Dangelo-foto.jpeg" alt="Dangelo Arrivillaga" />
                  <div>
                    <a href="#" rel="author" class="text-xl font-bold text-yellow-400 dark:text-white">Dangelo Arrivillaga</a>
                    <p class="text-base font-light text-gray-500 dark:text-gray-400">Desarrollador web, educador & CTO/Co-founder The Smart Project 3.0</p>
                    <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-07" title="February 8th, 2022">Feb. 7, 2022</time></p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl dark:text-white">La Blockchain y el futuro de la Web 3.0 (Web3)</h1>
            </header>
              <p class="lead text-slate-400">El aspecto más crítico de Web3 es que almacena todos los datos en una cadena de bloques, que es una base de datos descentralizada. Ninguna institución puede controlar esta base de datos por sí sola y es muy transparente. Como resultado, las personas pueden confiar en los datos que encuentran en la cadena de bloques y utilizarlos para aplicaciones de IA, robótica, finanzas y gestión de la cadena de suministro.</p>
              <p class="text-slate-400">La naturaleza distribuida y descentralizada de la red Web3 dificultará que las instituciones controlen cierta información y aspectos, razón por la cual muchas personas están ansiosas por ver su lanzamiento. Sin embargo, también debe considerar los beneficios de la web existente: permite compartir información, colaborar y ejecutar negocios de formas que antes no eran posibles. Por lo tanto, si bien existe expectativa con respecto al lanzamiento de Web3, también es necesario resaltar los beneficios del Internet existente. Una de las ventajas más significativas de la web actual es que es abierta y fácil de usar. </p>
              <p class="text-slate-400">Con Web3, la información será pública y se podrá ver cómo los ordenadores, impulsados ​​por inteligencia artificial, toman sus decisiones. De esa manera, puedes entender si toman las decisiones correctas. Además de la descentralización, las aplicaciones Web3 también cuentan con la funcionalidad de contrato inteligente. Esto significa que las transacciones y los acuerdos se pueden automatizar y ejecutar automáticamente, lo que elimina la necesidad de que terceros de confianza supervisen cada interacción. Esto puede ayudar a reducir el fraude y el robo de identidad, haciendo imposible que los actores maliciosos roben y abusen de la información de las personas.</p>
          </article>
        </div>
      </main>    
    </div>
  )
}

export default Article
