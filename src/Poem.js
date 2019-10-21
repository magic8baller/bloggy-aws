import React from 'react'
import {poems} from './db/poems.js'
const Poem = () => {
	return (
		<section className="container-lg" style={{
			height: '100%',
			margin: '0 auto', textAlign: 'center', width: '100%'
		}}>
			<div className="row" style={{height: '100%'}}>
				<article className="col-10 col-lg-6" style={{margin: '0 auto', textAlign: 'center', height: '60%', width: '100vw'}}>
					{poems.map((poem, index) => {
						return (
							<div class="card" style={{width: '70%', height: '60%', margin: '1rem 2rem 1rem 6.4rem'}}>
								<div className="card-body" key={poem.id}>
									<h5 className="card-title" style={{color: '#001', fontWeight: 'bold'}}><u><em>{poem.title}</em></u><br /><span style={{fontSize: '1rem'}}>{poem.createdAt}</span></h5>
									<p className="card-text" style={{whiteSpace: 'pre', fontWeight: 'bold', color: '#009'}}>{poem.body}</p>
								</div>
							</div>
						)
					})}
					{/* <img src={img1} className="card-img-top img-fluid" style={{
							height: '35%',
							width: '100%'
						}} alt="empty" /> */}
				</article>
			</div>
		</section>
	)
}

export default Poem
