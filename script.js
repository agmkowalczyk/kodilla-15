
class Stopwatch extends React.Component {

    constructor(props) {
    	super(props);
    	this.state = {
    		running: false,
    		times: {
	            minutes: 0,
	            seconds: 0,
	            miliseconds: 0
	        }
    	};
    }

    reset() {
        this.setState({
        	times: {
	            minutes: 0,
	            seconds: 0,
	            miliseconds: 0
        	}
        });    	
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
      			{this.format(this.state.times)}
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
	}

	calculate() {
		this.setState(prevState => {
		    prevState.times.miliseconds += 1;
		    if (prevState.times.miliseconds >= 100) {
		        prevState.times.seconds += 1;
		        prevState.times.miliseconds = 0;
		    }
		    if (prevState.times.seconds >= 60) {
		        prevState.times.minutes += 1;
		        prevState.times.seconds = 0;
		    }
		    return prevState;
		});
	}	

	stop() {
		this.setState ({
	    	running: false
	    });
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