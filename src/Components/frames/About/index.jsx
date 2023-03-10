import React from 'react';
import "./style.scss"

const About = () => {
    return (
        <div className="about">
            <div className="head">
                <h1>
                    О нас
                </h1>
            </div>

            <div className="main">
                <div className="text">
                    <p>
                        ТОО "VIXET" профессиональный поставщик технических решений для физических лиц и компаний.<br/>
                        География оказания услуг, накопленная экспертиза, а также профессионализм наших сотрудников,<br/>
                        позволяет нам оперативно и качественно вести поставки для наших клиентов. При оказании услуг,
                        мы стремимся к долгосрочным и взаимовыгодным отношениям с заказчиками, где применяем опыт,
                        переданный нашими партнерами из Казахстана, США, Канады, Великобритании, Германии, Италии,
                        Финляндии, Чехии, Польши, Израиля, Сингапура, Китая, Тайваня, Украины, России.
                        <br/>
                        Одним из основных направлений, развиваемым нашей компанией является поставка сельскохозяйственных дронов
                        по всей территории РК. Мы внедряем инновационные решения в этой области, предоставляем услуги по обучению
                        пилотов БПЛА и выполняем работы с применением сельскохозяйственных дронов.
                    </p>
                </div>

                <img className="drons-image" src="drons.jpg"/>
            </div>
        </div>
    );
};

export default About;