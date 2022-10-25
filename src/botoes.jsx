import './style.scss';

export function Botoes (){
    return (
        <><div className='envlope-wrapper'>
      <div id='envelope' className='close'>
        <div className='front flap'></div>
        <div className='front pocket'></div>
        <div className='letter'>
          <div className='words line1'></div>
          <div className='words line2'></div>
          <div className='words line3'></div>
          <div className='words line4'></div>
        </div>
        <div className='hearts'>
          <div className='heart a1'></div>
          <div className='heart a2'></div>
          <div className='heart a3'></div>
        </div>
      </div>
    </div><div className='reset'>
        <button id='open'>Open</button>
        <button id='reset'>Reset</button>
      </div></>
    )
}