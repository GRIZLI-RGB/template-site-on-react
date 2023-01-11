import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        "features-split section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className,
    );

    const innerClasses = classNames(
        "features-split-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider",
    );

    const splitClasses = classNames(
        "split-wrap",
        invertMobile && "invert-mobile",
        invertDesktop && "invert-desktop",
        alignTop && "align-top",
    );

    const sectionHeader = {
        title: "Простой рабочий процесс",
        paragraph: "Нет никаких подводных камней по типу дополнительного написания кода — только вы и шаблон.",
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={splitClasses}>
                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">СКОРОСТЬ</div>
                                <h3 className="mt-0 mb-12">Невероятно быстро</h3>
                                <p className="m-0">
                                    Если раньше для разработки полноценного веб-сайта требовались месяца и даже года, то
                                    с нашими шаблонами на все эти процессы уйдет меньше пары часов.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill",
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require("./../../assets/images/features-split-image-01.png")}
                                    alt="Features split 01"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-right"
                                data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">КОМФОРТ</div>
                                <h3 className="mt-0 mb-12">Невероятно удобно</h3>
                                <p className="m-0">
                                    Почему же мы обращаемся к шаблонам? В первую очередь, потому, что это не только
                                    очень быстро, но и комфортно писать сайт по уже заранее заготовленному алгоритму.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill",
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require("./../../assets/images/features-split-image-02.png")}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>

                        <div className="split-item">
                            <div
                                className="split-item-content center-content-mobile reveal-from-left"
                                data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">ДЕШЕВИЗНА</div>
                                <h3 className="mt-0 mb-12">Невероятно дешево</h3>
                                <p className="m-0">
                                    Раньше требовалась нанимать целую команду разработчиков: дизайнера, программиста,
                                    менеджера. Наши шаблоны позволяют делать всю работу в одиночку.
                                </p>
                            </div>
                            <div
                                className={classNames(
                                    "split-item-image center-content-mobile reveal-from-bottom",
                                    imageFill && "split-item-image-fill",
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require("./../../assets/images/features-split-image-03.png")}
                                    alt="Features split 03"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
