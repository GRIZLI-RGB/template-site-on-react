import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};

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
        "testimonial section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className,
    );

    const innerClasses = classNames(
        "testimonial-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider",
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
        title: "Отзывы клиентов",
        paragraph: "Вместо того, чтобы смотреть, лучше послушайте то, как о нас отзываются наши любимые клиенты.",
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>
                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        — Если хотите крутой сайт за короткий промежуток времени, но не хотите
                                        обращаться к экзорцисту — то вот оно подходящее решение.
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">Роман</span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">
                                        <a href="#0">сybesport.ru</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        — Каким образом можно создать надежный сайт за короткий промежуток времени, при
                                        этом не потеряв доверие клиентов? Конечно же, обращайтесь к этим чувакам.
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">Диана</span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">
                                        <a href="#0">stupid.kid</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        — Забудьте о лишних тратах денег по типу расходов на команду профессиональных
                                        разработчиков — теперь это не требуется. Ребята предоставляют крутые шаблоны для
                                        крутых сайтов.
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">Игорь</span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">
                                        <a href="#0">lazygaming.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
