import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Iletisim = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <span className="text-color-primary">İletişim</span>
            </h1>
            <div className="container-xs">

              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              E-Mail: <a href="mailto:info@marill.tech">info@marill.tech</a>
            </p>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Instagram: <a href="https://instagram.com/MarillROV">@MarillROV</a>
            </p>
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Adres: <a href="https://www.google.com/maps/place/Tunahan,+211.+Cd+No:12,+06824+Etimesgut%2FAnkara">Tunahan, 211. Cd No:12, 06824 Etimesgut/Ankara</a>
            </p>
            

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Iletisim.propTypes = propTypes;
Iletisim.defaultProps = defaultProps;

export default Iletisim;