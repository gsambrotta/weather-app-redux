import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

function average(data) {
	return _.round(_.sum(data)/data.length)
}

export default function Chart({ data, color, units}) {
	return (
		<div>
			<Sparklines height={120} width={180} data={data}>
				<SparklinesLine color={color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<span><strong>{average(data)}</strong>{units}</span>
		</div>
	)
}
