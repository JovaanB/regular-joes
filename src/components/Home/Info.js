import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Notre histoire" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Bonjour - voici le nouveau site web de Regular Joe coffee - Vous
              trouverez toutes nos recettes, nos informations. Vous pouvez
              également passer commande. Nous vendons du café, des jus de fuits
              et du thé. Toutes nos recettes sont 100% françaises.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                Voir plus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
