import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="App relative">
    <div className='bg-teal-400 w-[683px] h-[683px] rounded-full absolute -left-[162px] -top-[180px] z-0'>

    </div>
    <header className='w-full h-[15vh]'>

    </header>
      <section id="Head" className='w-full flex flex-col h-fit  items-center justify-center gap-20'>
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
      <section id="BMI" className='h-screen w-full'>

      </section>
      <section id="limitation h-screen w-full">

      </section>
    </section>
  );
}

export default App;
