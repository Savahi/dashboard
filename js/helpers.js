
export function calculateYDomain( data, marginFactor=0.1, excludeKey='name' ) {
	let lowest=null, highest=null;
	for( let i = 0 ; i < data.length ; i++ ) {
		for( let k in data[i] ) {
			if( k === excludeKey ) {
				continue;
			}
			let v = data[i][k];
			if( lowest === null ) {
				lowest = v;
				highest = v;
				continue;
			}
			if( v < lowest ) {
				lowest = v;
			}
			if( v > highest ) {
				highest = v;
			}
		}
	}	

	let margin = (highest - lowest) * marginFactor;
	return [ lowest - margin, highest + margin ];
};


const upperMargin = 42;
const bottomMargin = 8;
const leftMargin = 8;
const rightMargin = 8;

export function	pctToWindowX( xPct ) {
	return Math.floor( (window.innerWidth - leftMargin - rightMargin) * xPct / 100.0);
}

export function	pctToWindowY( yPct ) {
	return Math.floor( (window.innerHeight - upperMargin - bottomMargin) * yPct / 100.0);
}

export function	tileWindows( charts ) {
		let l = charts.length;
		if( l === 0 ) {
			return;
		}

		let nRows=1, nCols=1;
		if( l === 2 ) {
			nCols=2;
		} else if( l === 3 ) {
			nCols=3;
		} else if( l === 4 ) {
			nRows=2;
			nCols=2;
		} else {
			if( l%3 == 0 || l%2 == 1 ) {
				nRows = Math.ceil(l / 3);
				nCols = 3;
			} else { 
				nRows = Math.ceil(l / 4);
				nCols = 4;
			}
		}
		let w = Math.floor(100.0 / nCols) - 0.05;
		let h = Math.floor(100.0 / nRows) - 0.05;
		let ir=0, ic=0;
		for( let i = 0 ; i < l ; i++ ) {
			let x = Math.floor(ic * 100.0 / nCols);		
			let y = Math.floor(ir * 100.0 / nRows);		
			charts[i].settings.xPct = x;
			charts[i].settings.yPct = y;
			charts[i].settings.widthPct = w;
			charts[i].settings.heightPct = h;
			if( ic === nCols-1 ) {
				ic=0;		
				ir+=1;
			} else {
				ic += 1;
			}			
		}
	}
