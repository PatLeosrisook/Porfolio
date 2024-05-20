import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faBowlFood, faDumbbell, faGenderless, faMarsAndVenus, faMarsAndVenusBurst, faMoon, faPeopleGroup, faPersonPregnant } from  '@fortawesome/free-solid-svg-icons'
import foodPortrait from './assets/FoodByMonika.jpg'
function App() {
  return (
    <section className="App relative">
    <div className='bg-gradient-to-br from-slate-50 to-blue-300 w-[683px] h-[683px] rounded-full absolute -left-[162px] -top-[180px] z-0'>

    </div>
    <header className='w-full h-[15vh]'>

    </header>
      <section id="Head" className='w-full flex flex-col h-fit  items-center justify-center gap-20 bg-gradient-to-b from-slate-50 to-sky-100 pb-[20px]'>
        <article className='Headline w-full flex flex-col items-center relative z-10'  >
          <h1 className='text-6xl'>Body Mass Index Calculator</h1>
          <p className='text-base'>Better understand your weight in relation to your height using
            our body mass index (BM) calculator. While BMI is not the
            sole determinant of a healthy weight, it offers a valuable
            starting point to evaluate your overall health and well-being.</p>
        </article>
        <article id="Calculator" className='w-full relative z-10 bg-white w-[50vh] flex flex-col items-center justify-center shadow-md gap-10 py-[20px] rounded'>
            <h2 className='text-xl font-bold'>Enter your details below</h2>
            <form className='flex flex-col items-center justify-center gap-5 '>
              <div className='form_group unit flex flex-row items-center justify-center gap-10'>
                <div>
                  <input type="radio" name="metric"/>
                  <label for="metric">
                    Metric
                  </label>
                </div>
                <div>
                  <input type="radio" name="Imperial"/>
                  <label for="Imperial">
                    Imperial
                  </label>
                </div>
              </div>
              <div className='form_group '>
                <div className='flex flex-col items-start justify-center'>
                  <label for="height">Height</label>
                  <input type="number" name="height" className='h-[40px] rounded border border-slate-800'/>
                </div>
                <div className='flex flex-col items-start justify-center'>
                  <label for="Weight">Weight</label>
                  <input type="number" name="Weight" className='h-[40px] rounded border border-slate-800'/>
                </div>
              </div>
            </form>
            <div id="Banner" className='flex flex-col items-start justify-center bg-gradient-to-r from-sky-500 to-indigo-500 w-[90%] h-[200px] text-white p-[20px] rounded-md'>
              <p className=''>Welcome!</p>
              <p className='text-left'>Enter your height and weight and you'll see your BMI result here</p>
            </div>
        </article>
      </section>
      <section id="BMI" className='h-fit w-full min-h-screen bg-gradient-to-b from-slate-50 to-sky-100 flex flex-col items-center justify-center'>
          <div className="flex flex-col items-center justify-center bg-slate-50 p-[20px] mb-[10px] ">
            <img src={foodPortrait} alt="Image of a food" className='h-[auto] w-[100vw]'/>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-2xl text-left font-semi-bold">What's your BMI result means</h3>
              <p className="text-left text-sm">A BMI range of 18.5 to 24.9 is considered a 'healthy weight'. Maintaining a healthy weight may lower your chance of experiencing health issue later on, such as obesity and type 2 diabetes. Aim for a nutritiuos diet with reduced fat and sugar content, incorporate ample fruites and vegetables. Additionally, strive for physical activities, ideally for 30 minutes daily for five days a week. </p>          
          </div>
          
          </div>
        {/* list */}
      <div className="flex flex-col w-[90vw] h-fit p-[10px]">
            {/* Lists of how to loose weight */}
            <div className="flex flex-col items-start justify-center w-100 h-fit gap-[15px]">
              <div className="flex flex-col items-center justify-center w-[50px] h-[50px] rounded-full bg-pink-200">
                {/* Icon */}
                <FontAwesomeIcon icon={faBowlFood} className='text-pink-600'/>
              </div>
              <h4 className='text-2xl font-bold'>Healthy eating</h4>
              <p className='text-left'>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity , and mood.</p>
            </div>
            {/* regular ex */}
            <div className="flex flex-col items-start justify-center w-100 h-fit gap-[15px]">
              <div className="flex flex-col items-center justify-center w-[50px] h-[50px] rounded-full bg-yellow-100">
                {/* Icon */}
                <FontAwesomeIcon icon={faDumbbell}  className='text-yellow-600'/>
              </div>
              <h4 className='text-2xl font-bold'>Regular exercise</h4>
              <p className='text-left'>Exercise imporve fitness, aids weight control, elevate mood, and reduce disease risk, fostering wellness and longetiviy.</p>
            </div>
            {/* Adequte sleep */}
            <div className="flex flex-col items-start justify-center w-100 h-fit gap-[15px]">
              <div className="flex flex-col items-center justify-center w-[50px] h-[50px] rounded-full bg-teal-200">
                {/* Icon */}
                <FontAwesomeIcon icon={faMoon}  className='text-teal-600'/>
              </div>
              <h4 className='text-2xl font-bold'>Adequate sleep</h4>
              <p className='text-left'>Sleep enhance mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.</p>
            </div>
      </div>
      </section>
      <section id="limitation h-full w-full  bg-gradient-to-b from-slate-50 to-sky-100">
        {/* Header */}
        <div className='flex flex-col items-center justify-center w-screen'>
          <h2 className='text-left text-3xl font-semi-bold'>Limitation of BMI</h2>
          <p className='text-sm text-center'>Although BMI is often a practical indicator
            of healthy weight, it is not suited for every
            person. Specific groups should carefully
            consider their BMI outcomes, and in
            certain cases, the measurement may not
            be beneficial to use.</p>
        </div>
        {/* list */}
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-start justify-center w-[90%] rounded-md h-fit p-[20px] shadow-md'>
            <header className='card_header flex flex-row items-center justify-center gap-[20px]'>
              <FontAwesomeIcon icon={faMarsAndVenus} /> 
              <p>Gender</p>
            </header>
            <p className='text-left text-sm'>The development and body fat
              composition of girls and boys vary
              with age. Consequently, a child's
              age and gender are considered
              when evaluating their BMI.</p>
          </div>

          <div className='flex flex-col items-start justify-center w-[90%] rounded-md h-fit p-[20px] shadow-md'>
            <header className='card_header flex flex-row items-center justify-center gap-[20px]'>
              <FontAwesomeIcon icon={faBirthdayCake} /> 
              <p>Age</p>
            </header>
            <p className='text-left text-sm'>In aging individuals, increased body
            fat and muscle loss may cause BMI
            to underestimate body fat content.</p>
          </div>

          <div className='flex flex-col items-start justify-center w-[90%] rounded-md h-fit p-[20px] shadow-md'>
            <header className='card_header flex flex-row items-center justify-center gap-[20px]'>
              <FontAwesomeIcon icon={faDumbbell} /> 
              <p>Muscle</p>
            </header>
            <p className='text-left text-sm'>BMI may misclassify muscular
            individuals as overweight or obese,
            as it doesn't differentiate muscle
            from fat.</p>
          </div>

          <div className='flex flex-col items-start justify-center w-[90%] rounded-md h-fit p-[20px] shadow-md'>
            <header className='card_header flex flex-row items-center justify-center gap-[20px]'>
              <FontAwesomeIcon icon={faPersonPregnant} /> 
              <p>Pregnancy</p>
            </header>
            <p className='text-left text-sm'>Expectant mothers experience
              weight gain due to their growing
              baby. Maintaining a healthy pre-
              pregnancy BMI is advisable to
              minimise health risks for both
              mother and child.</p>
          </div>

          <div className='flex flex-col items-start justify-center w-[90%] rounded-md h-fit p-[20px] shadow-md'>
            <header className='card_header flex flex-row items-center justify-center gap-[20px]'>
              <FontAwesomeIcon icon={faPeopleGroup} /> 
              <p>Race</p>
            </header>
            <p className='text-left text-sm'>Certain health concerns may affect
              individuals of some Black and Asian
              origins at lower BMls than others. To
              learn more, it is advised to discuss
              this with your GP or practice nurse.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
