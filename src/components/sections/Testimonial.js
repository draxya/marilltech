import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Hakkımızda',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" data-reveal-delay="200"/>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    2010 Gazi Üniversitesi Elektrik Öğretmenliği, 2015 Ankara Üniversitesi Elektrik Elektronik Mühendisliği bölümlerinden mezun oldum. 2012 yılında Milli Eğitim Bakanlığı'nda Elektrik Öğretmeni olarak göreve başladım. Son 2 yıldır Cezeri Yeşil Teknoloji Mesleki ve Teknik Anadolu Lisesi'nde görev yapmaktayım.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Koray</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Danışman Öğretmen
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Cezeri Yeşil Teknoloji MTAL 11. sınıf öğrencisiyim. Yenilenebilir enerji sistemlerini araştırmak adına Danimraka'da eğitim aldım. Marill ROV takımının lideriyim, aracın mekanik ve elektronik tasarımıyla ilgileniyorum.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Enes</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Takım Kaptanı - Mekanik
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Barış</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Yazılım
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Cezeri Yeşil Teknoloji MTAL 11. sınıf öğrencisiyim yenilenebilir enerji sistemleri alanında, rüzgar enerjisi dalında eğitim alıyorum. Alanımda uzmanlaşmak adına Danimarka'da eğitim aldım. Aracın elektronik ve yazılım tarafında çalışmaktayım.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Fatih</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Elektronik
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Cezeri Yeşil Teknoloji MTAL 11. sınıf öğrencisiyim. Yenilenebilir enerji sistemleri alanında, rüzgar enerji sistemleri dalında eğitim alıyorum. Aracın mekanik tasarımı kısmında çalışmaktayım.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ömer</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Mekanik
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Cezeri Yeşil Teknoloji MTAL 11. sınıf öğrencisiyim. Yenilenebilir enerji sistemleri alanında, rüzgar enerji sistemleri dalında eğitim alıyorum. Yenilenebilir enerji sistemlerini araştırmak adına Danimarka'da eğitim aldım. Takımın iletişim sorumlusuyum.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ceren</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    İletişim ve İşbirlikleri
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;