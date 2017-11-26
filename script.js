
class Stopwatch extends React.Component {

    constructor(display) {
    	super();
    	this.state = {
    		running: false,
    		display: display
    	};
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };    	
    }

	print() {
		this.format(this.times); 
	}        



	render() {
		return (
		<div>
			<nav className="controls">
       	 		<button 
       	 			className="button" 
       	 		 	id="start"
       	 			onClick={event => this.start()}>Start</button>
        		<button 
        		  	className="button" 
        		  	id="stop"
        		  	onClick={event => this.stop()}>Stop</button>
      		</nav>
      		<div id="stopwatch" className="stopwatch">
      			{this.format(this.times)}
      		</div>
      		<ul className="results">
      		</ul>
      	</div>
		)
	}

	
	format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;	
	}

	start() {
		if (!this.state.running) {
	    this.setState ({
	    	running: true
	    })
	    this.watch = setInterval(() => this.step(), 10);
	    }
	}

	step() {
	    if (!this.state.running) return;
	    this.calculate();
	    this.print();
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
	}	

	stop() {
		this.setState ({
	    	running: false
	    })
	    clearInterval(this.watch);
	}
}



function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
	    result = '0' + result;
	}
	return result;
}


ReactDOM.render(
  <Stopwatch />,
  document.getElementById('container')
);