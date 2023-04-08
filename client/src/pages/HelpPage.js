import React from 'react'
import s from './help.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'

const HelpPage = () => {
    return (
        <div className={s.static}>
            <div className={s.inner}>
                <h1>Помощь</h1>
                <div className={cn(s.infobox, s.faqInfo)}>
                    В данном разделе мы собрали самые часто задаваемые вопросы и ответили на них максимально развернуто. Пожалуйста, попытайтесь найти ответ на ваш вопрос до обращения в техническую поддержку.
                </div>

                {/*Общие вопросы*/}
                <h3 className={s.faqH3}>
                    Общие вопросы
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Обязательна ли регистрация на нашем сайте
                    </div>  
                    <p>
                        Регистрация не обязательная, но если Вы зарегистрируетесь на нашем сервисе, то сможете участвовать в 
                        <Link to={'/ru/partners'}> накопительной системе скидок </Link>
                        и получить до 15% скидки на все будущие обмены.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Как совершить обмен на вашем сайте?
                    </div>  
                    <p>                        
                        Вам необходимо выбрать направление обмена и заполнить заявку на обмен. Нажать кнопку  
                        <strong> «Обменять» </strong>
                        и следовать инструкциям, которые Вы увидите в окне подтверждения заявки на обмен. Если у Вас возникли вопросы в процессе обмена, пожалуйста, свяжитесь с оператором через онлайн чат или 
                        <Link to={'/ru/support'}> форму обратной связи </Link>.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Я не указал примечание к платежу. Это обязательно?
                    </div>  
                    <p>                       
                        При оформлении заявки Вы у себя на мониторе получите точные инструкции, какое назначение платежа необходимо обязательно указать при проведении платежа. Если это примечание не указано, то мы оставляем за собой право вернуть сумму на указанные в заявке реквизиты. Процедура может занять до 6 дней. При этом оплата всех комиссий возлагается на клиента.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Могу ли я отказаться от обмена, если уже оплатил заявку?
                    </div>  
                    <p>                  
                        Если Вы уже оплатили заявку, то отказаться от обмена нельзя.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Я указал неверные реквизиты и средства не пришли, что делать?
                    </div>  
                    <p>                        
                        К сожалению, мы не сможем вернуть ваши средства. Единственное, что мы можем сделать, это сообщить реквизиты, куда ушли средства. Будьте внимательны при вводе данных!
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Возможно ли обменять сумму, которая больше чем та, что указана на сайте?
                    </div>  
                    <p>                      
                        Да, возможно. Для этого, в рабочее время необходимо связаться с оператором через онлайн чат помощи и там обсудить детали обмена. Мы постараемся обеспечить свои резервы необходимыми средствами для Вашей операции. Также Вы можете оставить заявку на сайте на отслеживание резерва и когда мы будем располагать нужной Вам суммой, на почту придет уведомление.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        У меня и моего друга разные курсы
                    </div>  
                    <p>                    
                        Возможно, кто-то из вас не авторизовался в сервисе. Для авторизованных пользователей действует программа лояльности, которая дает скидку на все обменные направления.
                    </p>                  
                </div>
                
                {/*Вопросы по криптовалюте*/}
                <h3 id={'crypto'} className={s.faqH3}>
                    Вопросы по криптовалюте
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Важные условия обмена Bitcoin
                    </div>  
                    <p>                                             
                        1) Отправьте точную сумму 
                        <strong> без учета комиссии, </strong>
                        иначе платеж может зависнуть на длительный срок
                        <br/>
                        2) Указывайте комиссию с 
                        <strong> быстрым приоритетом, </strong>
                        иначе платеж будет идти 2-4 часа и сервис отклонит его
                        <br/>
                        3) В случае отсутствия конфирма в течении отведенного времени обмена или при резких колебаниях курса, завершение обмена происходит в ручном режиме по курсу Bitcoin на момент конфирма с сайта 
                        <a href="https://ru.tradingview.com/symbols/BTCUSD/" target="_blank" rel='noreferrer'> https://ru.tradingview.com/symbols/BTCUSD/ </a>.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Я перевел криптовалюту, но свои средства не получил.
                    </div>  
                    <p>                                            
                        Операции по обмену криптовалют проходят только после получения нужного количества подтверждений в сети, указанных при создании заявки. Данная информация также указана на самой странице оплаты.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Почему курс обменной пары изменился в процессе обмена?
                    </div>  
                    <p>                                            
                        В основном у нас фиксированный курс на направления, если на рынке не происходят резкие скачки по валютным парам. Система считает резкими скачками изменения в 
                        <strong> более чем 0.5% </strong>
                        за несколько минут. В таких случаях система переходит в режим «плавающего» курса. Данный механизм был внедрен нами, чтобы обезопасить сервис от резких скачков курса. Таким образом, курс в процессе обмена может быть скорректирован как в вашу пользу, так и в нашу, в зависимости от криптовалютного рынка.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Мне нужна конкретная сумма, как обменять без изменения курса?
                    </div>  
                    <p>                                             
                        Мы также предлагаем возможность обмена без изменения курса, на протяжении времени отведенной для заявки. В среднем это время составляет 60 минут, чего более чем достаточно для большинства транзакций и получения нужного количества конфирмов (подтверждений в сети). Для подобного обмена выберите переключить режим из «Лучший курс» на «Фиксированный», в форме обмена. В таком режиме курс будет чуть ниже, чем в режиме «Лучший курс», для страховки сервиса от резких скачков. Вы же, в свою очередь получите ровно ту сумму, которая будет указана в заявке.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        С каким типом курса выгодно обменивать?
                    </div>  
                    <p>                                            
                        Если вы уверены, что курс не будет сильно колебаться (более чем на 0.5%) до получения нужного количества подтверждений, то рекомендуем выбрать метод 
                        <strong> «Лучший курс» </strong>
                        , так как он не включает в себя дополнительную комиссию, покрывающую наши риски. Таким методом, вы получите наиболее выгодное предложение.
                        <br/>
                        В основном старайтесь использовать метод 
                        <strong> «Лучший курс» </strong>
                        для тех валют, которые очень быстро подтверждаются в сети, а также не имеют тенденцию высоких колебаний.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Что будет, если я выберу «Лучший курс» и курс изменится более 0.5% в мою сторону?
                    </div>  
                    <p>                                             
                        Если это произойдет за время, отведенное заявки и до момента получения нужного количества подтверждений, то будет произведен автоматический перерасчет и вы 
                        <strong> получите больше, </strong>
                        чем должны были по изначальной заявке.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Что будет, если я выберу «Лучший курс» и курс изменится более 0.5% НЕ в мою сторону?
                    </div>  
                    <p>                                            
                        В данном случае, опять же будет произведен перерасчет, но к сожалению, вы получите меньше чем было указано изначально в форме оформления заказа. Перерасчет будет произведен на момент фиксации нового курса от 
                        <a href="https://coinmarketcap.com" target="_blank" rel='noreferrer'> CoinMarketCap </a>
                        . Среднее время обновление курсов составляет 1-5 минут.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Изменится ли курс после получения подтверждения в сети?
                    </div>  
                    <p>                                             
                        Нет. После получения подтверждения об оплате (confirm-а), система фиксирует последний курс и далее выплата производиться по нему.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Если курс поднялся в мою пользу, вы отправите сумму больше, чем в изначальной заявке?
                    </div>  
                    <p>                            
                        Конечно. В случае изменения курса более чем на 0.5% в вашу пользу, будет произведен автоматический перерасчет. В конечном итоге вы получите больше, чем видели изначально, при создании заявки.
                    </p>                  
                </div>
                <div className={s.faq}>
                    <div className={s.title}>
                        Если курс снизился не в мою пользу, я получу меньше?
                    </div>  
                    <p>                       
                        К сожалению, да. Однако, вы получите максимально выгодный курс, на последний момент, до фиксации подтверждения в сети нашей системой. Не стоит расстраиваться, так как у нас в любом случае будет один из лучших обменных курсов на рынке.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Операция по Биткоину долго не подтверждается. Что это значит?
                    </div>  
                    <p>                        
                        Переводы в системе биткоин могут долго быть в состоянии "Неподтвержденная транзакция". Чаще всего это происходит из-за того, что одна из операций долго не проходит. По правилам работы сети Биткоин такой проблемный перевод крепится к другому блоку и в дальнейшем идет по стандартной процедуре. Если этого не происходит, то в промежуток 1-7 дней средства возвращаются отправителю. Наш обменный сервис, к сожалению, никак не может повлиять на скорость обработки таких переводов. Если такой платеж задержался на продолжительное время, то после его зачисления либо возврата отправителю ситуация с заявкой будет разрешена путем ее завершения либо отмены с возвратом всех денежных обязательств каждой из сторон. Решение принимается в каждом случае отдельно.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Моя транзакция получила подтверждение в Bitcoin, но заявка в обменнике уже отменена. Что мне делать?
                    </div>  
                    <p>                        
                        Заявки по обмену Bitcoin сохраняют свой статус 2 часа. Этого времени достаточно, чтобы платеж подтвердился и система его увидела. Но, если вдруг, вы не успели уложиться в выделенный временной промежуток, пожалуйста, обратитесь в техническую поддержку.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Статус «успешно завершен», но я не получил средства на свою банковскую карту
                    </div>  
                    <p>                      
                        Наш обменник отправляет запрос в МПС о перечислении денег на карту моментально и после того, как получает уведомление об успешном переводе, незамедлительно информирует об этом пользователя. Несмотря на то, что в 99,5% случаев средства на карты наших клиентов поступают моментально, в МПС существует регламент, на основании которого платежная система и банки участники гарантируют зачисление средств на карты клиентов до 5 бизнес дней.
                    </p>                  
                </div>

                {/*Вопросы по QIWI и банковским картам*/}
                <h3 id={'qiwi-cards'} className={s.faqH3}>
                    Вопросы по QIWI и банковским картам
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        QIWI выдает ошибку «Проведение платежа запрещено». Что делать?
                    </div>  
                    <p>                           
                        Сообщение «Проведение платежа запрещено» связан с новыми условиями работы сервиса QIWI, к сожалению, мы не можем на это повлиять и данная ошибка не связана с работой нашего сервиса. Это глобальная проблема внутри сервисов QIWI и никак не зависит от реквизитов отправителя или получателя. Операторы QIWI сообщают: «Некоторые платежи мы действительно отклоняем. Это связано с внутренними правилами банка, которые мы не комментируем.». Чтобы решить данный вопрос, попробуйте просто создать новую заявки и повторить оплату либо обновите страницу браузера несколько раз, возможно платеж пропустят.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>                  
                        Возможно ли, что я отправлю средства с QIWI, и они попадут на проверку безопасности на 48 часов? 
                    </div>  
                    <p>                         
                        К сожалению, новые правила работы с QIWI показывают, что такое возможно, но необязательно произойдут. Ознакомьтесь с
                        <a href="https://www.banki.ru/news/lenta/?id=10914057" target="_blank" rel='noreferrer'> официальным заявлением QIWI </a> 
                        по данному вопросу.
                        <br/>
                        Если с вами случилось подобное, следите за статусом платежа. Как только платеж будет проведен, обратитесь в наш онлайн-чат на сайте, вашу заявку восстановят и обработают.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Я оплатил заявку QIWI, но статус заказа не изменился
                    </div>  
                    <p>                             
                        При обычных условиях статус заявки, после оплаты на сайте QIWI, изменяется на «Оплачена» спустя 1-2 минуты. Если этого не произошло, пожалуйста, обратитесь в онлайн-чат поддержки или создайте тикет, на странице 
                        <Link to={'/ru/support/'} target={'_blank'} rel={'noreferrer'}> Технической поддержки.</Link>
                    </p>                  
                </div>

                {/*Личный счет*/}
                <h3 id={'balances'} className={s.faqH3}>
                    Личный счет
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Что такое личный счет?
                    </div>  
                    <p>                                                    
                        Личный счёт - это возможность пополнить баланс на свой аккаунт, один раз подтвердить его в сети криптовалют, а далее с баланса совершать регулярные обмены за считанные секунды, не дожидаясь повторных подтверждений в сети Bitcoin, Ethereum и других.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        В какой валюте хранятся средства на личном счету?
                    </div>  
                    <p>                              
                        На данный момент у вас в аккаунте есть личный счет с внутренней валютой acBTC (AvanChange BTC), который эквивалентен курсу Биткоина на момент обмена. В будущем, возможно, добавим другие типы счетов.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Какой курс у личного счета acBTC?
                    </div>  
                    <p>                               
                        1 acBTC всегда равен 1 BTC. Если вы пополнили 10 BTC в свой личный счёт acBTC, то для него курс всегда будет 1:1. В любой момент, при совершении обмена acBTC (личного счета) на любую криптопару курс будет ровно таким, как у такой же криптопары с BTC.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Как пополнить свой личный счёт?
                    </div>  
                    <p>                                
                        Для пополнения личного счета 
                        <strong> «acBTC» </strong>
                        перейдите на 
                        <Link to={'/ru/'} target={'_blank'} rel={'noreferrer'}> страницу обменов</Link>
                        . В блоке 
                        <strong> «Отдаете» </strong>
                        выберите удобный вам метод, которым хотите пополнить, далее в правом блоке 
                        <strong> «Получите» </strong>
                        выберите 
                        <strong> «Личный счёт (BTC)». </strong>
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Какими методами я могу пополнить личный счёт?
                    </div>  
                    <p>                                
                        На данный момент пополнение возможно посредством Bitcoin, Ethereum, TrueUSD. В будущем обменные пары будут увеличены.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        По какому курсу вычисляются обменные направления для личного счета?
                    </div>  
                    <p>                                 
                        Курс у направлений acBTC 1:1 эквивалентен курсу BTC, за исключением комиссии на сделку. Комиссия в данном случае, как правило, ниже, чем у обменных направлений BTC.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Какой курс и какая комиссия для направления acBTC → BTC
                    </div>  
                    <p>                               
                        Так, как это эквивалентные валютные пары, то и курс для данного направления составляет 0%. В некоторых случаях, может присутствовать минимальная комиссия в размере 0.01-0.1% за издержки, которые оплачиваются мерчанту.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Какие ограничения есть для пополнения личного счета?
                    </div>  
                    <p>                              
                        В личном счете можно хранить максимум 
                        <strong> 2 BTC. </strong>
                        В некоторых случаях мы увеличиваем данный лимит для конкретного пользователя. Если вам нужно хранить больше, пожалуйста, напишите в 
                        <Link to={'/ru/support/'} target={'_blank'} rel={'noreferrer'}> техническую поддержку</Link>.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Какое время можно хранить средства на личном счету?
                    </div>  
                    <p>                               
                        У нас нет ограничений по времени хранения средств на личном счету. Однако, несмотря на это, личный счет создан для оперативных обменов посредством сайта, нашего Telegram бота и API. Если вы хотите использовать ваш личный счет какими-либо иными методами, обязательно напишите нам, чтобы мы подсказали можно ли так или нет. Подобные случаи рассматриваются индивидуально и на усмотрение администрации проекта.
                    </p>                  
                </div>

                {/*API и Приложения*/}
                <h3 id={'api'} className={s.faqH3}>
                    API и Приложения
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Что такое API и для чего он?
                    </div>  
                    <p>                                                     
                        Мы разработали удобный интерфейс, который смогут использовать сторонние разработчики и обменные пункты для организации обменных операций посредством AvanChage.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Как использовать ваш Telegram бот?
                    </div>  
                    <p>                                                      
                        Достаточно подписаться на нашего бота, чтобы совершать обменные операции не выходя из Telegram.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Для чего нужно авторизоваться на сайте посредством Telegram?
                    </div>  
                    <p>                               
                        Чтобы наш Telegram-бот смог вас идентифицировать и дать возможность совершать обменные операции с использованием вашего аккаунта, нужна обязательно авторизоваться через Telegram в 
                        <Link to={'/ru/account/'} target={'_blank'} rel={'noreferrer'}> личном кабинете</Link>.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Могу ли использовать личный счет из Telegram аккаунта?
                    </div>  
                    <p>                               
                        Да, если вы авторизовались на сайте, через Telegram (привязали ваш аккаунт Telegram к профилю AvanChange), то можете всего в пару кликов совершать обменные операции.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Есть ли какие-либо ограничения в использовании Telegram бота?
                    </div>  
                    <p>                                                    
                        Если ваши действия не противоречат 
                        <strong> правилам использования </strong>
                        сервиса, не характеризуются как СПАМ, не являются попытками злоупотребления функциональностью, не являются противозаконными и не несут вред сервису и третьим лицам, то можете спокойно использовать наш Telegram бот. При нарушении любых, из указанных мер, администрация оставляет за собой право заблокировать вас и ваш аккаунт Telegram от использования наших сервисов. Блокировка может быть вечной и может не подлежать обжалованию. Пожалуйста, будьте аккуратными и честными.
                    </p>                  
                </div>

                {/*Партнерская программа*/}
                <h3 id={'partners'} className={s.faqH3}>
                    Партнерская программа
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Есть ли у Вас Партнерская программа?
                    </div>  
                    <p>                                
                        Да. У нас есть весьма понятная и прозрачная партнерская программа, по которой Вы можете получать 25% от нашего заработка за обмены приведенных Вами пользователей. Выплаты вознаграждения осуществляются от 
                        <strong> 1 USD. </strong>
                        В своем кабинете Вы в режиме онлайн можете отслеживать операции Ваших рефералов. С более детальной информацией можете ознакомиться на странице 
                        <Link to={'/ru/partners/'} target={'_blank'} rel={'noreferrer'}> партнерской программы AvanChange</Link>.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Какие бонусы есть для постоянных клиентов?
                    </div>  
                    <p>                                 
                        Любой зарегистрированный пользователь, совершая любой обмен, уже участвует в формировании своей накопительной скидки. После достижения любого из этапов этой Программы лояльности Вы получаете коэффициент, который применяется к формированию более выгодного курса обмена именно для Вас при каждом следующем обмене. То есть, Вы получаете скидку на любой обмен в любом направлении. С более детальной информацией Вы можете ознакомиться после регистрации в своем Личном кабинете.
                    </p>                  
                </div>

                {/*Бонусные баллы*/}
                <h3 id={'bonuses'} className={s.faqH3}>
                    Бонусные баллы
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Что такое бонусные баллы?
                    </div>  
                    <p>                                  
                        Бонусные баллы - это система учета ваших сделок, которая позволяет получать скидки на будущие обмены. Подробнее на странице 
                        <Link to={'/ru/partners/'} target={'_blank'} rel={'noreferrer'}> программа лояльности</Link>.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Когда я получу бонусные баллы?
                    </div>  
                    <p>                                   
                        Бонусные баллы выдаются в течение 30 минут, после успешного завершения сделки в автоматическом режиме, без перехода заявки в статус 
                        <strong> «Срок истек».</strong>
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Я не получил бонусные баллы
                    </div>  
                    <p>                                  
                        Бонусные баллы могут не начистился, если ваша сделка перешла в статус 
                        <strong> «Срок истек», «Отклонен» </strong>
                        или 
                        <strong> «Отменен». </strong>
                        Пожалуйста, постарайтесь оплачивать заявки сразу, после их создания, чтобы система успела увидеть вашу оплату и не перевела заявку в статус «Срок истек».
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Можно ли вручную начислить мне бонусных баллов?
                    </div>  
                    <p>                                   
                        К сожалению, такой возможности нет. Система полностью автоматизирована и сама начисляет бонусные баллы исходя из истории ваших операций.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Какую скидку я получу от бонусных баллов?
                    </div>  
                    <p>                                 
                        Чем больше вы обмениваете - тем больше у вас бонусных баллов. Чем больше у вас бонусных баллов - тем выше ваш уровень и скидка соответственно. Подробнее, о баллах и программе лояльности в целом можно посмотреть на странице 
                        <Link to={'/ru/partners/'} target={'_blank'} rel={'noreferrer'}> программы лояльности</Link>.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Как еще можно получить бонусных баллов?
                    </div>  
                    <p>                                 
                        Выполните задания из страницы 
                        <Link to={'/ru/booster/'} target={'_blank'} rel={'noreferrer'}> Бустер скидок </Link>
                        и копите дополнительные бонусные баллы.
                    </p>                  
                </div>

                {/*Лимиты*/}
                <h3 id={'limits'} className={s.faqH3}>
                    Лимиты
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Вы пишете, что у вас несколько миллионов, но я могу обменять не более 30 000 руб. Почему?
                    </div>  
                    <p>                                 
                        Суммарный резерв обменного пункта и сумма одного обмена совершенно разные понятия. Есть сторонние ограничения, на прием определенных сумм как для оплаты, так и для вывода. Если вы хотите обменять сумму больше, чем максимально допустимую, можете создать несколько заявок подряд.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        Для чего вы просите указать E-mail при обмене?
                    </div>  
                    <p>                                 
                        E-mail служит для информирования о ходе обмена. Вы будете получать письма о разных статусах вашего заказа. А также, данным методом, в случае регистрации, в личном кабинете сможете увидеть все ваши предыдущие обмены.
                    </p>                  
                </div>

                <div className={s.faq}>
                    <div className={s.title}>
                        В Telegram или на другой площадки мне предлагают обмен от вашего имени!
                    </div>  
                    <p>                                 
                        Внимательно изучите информацию. Мы работаем официально только в онлайн режиме и только с тех Telegram каналов, которые указаны на нашем сайте. Если указанный Telegram или другой контакт не указан у нас на сайте, не доверяйте и не совершайте обмен. Это могут быть мошенники, которые пытаются работать от нашего имени.
                    </p>                  
                </div>

                <div className={cn(s.faq, s.faqLast)}>
                    <div className={s.title}>
                        Для чего нужна верификация карты?
                    </div>  
                    <p>                                 
                        Сервис должен быть уверен, что обмен совершаете именно вы. Мошенники пытаются воспользоваться украденными картами, чтобы перевести средства, не имея на руках пластиковых карт. Из-за этого, данная процедура обязательна при определенных направлениях и при выявлении определенных ситуаций.
                    </p>                  
                </div>

                {/*Защита и безопасность*/}
                <h3 id={'security'} className={s.faqH3}>
                    Защита и безопасность
                </h3>

                <div className={s.faq}>
                    <div className={s.title}>
                        Требуются ли доказательства по происхождению средств?
                    </div>  
                    <p>                                 
                        В соответствии со стандартами KYC и AML, а также согласно требованиям финансовых регуляторов и платежных провайдеров, в ряде случаев от пользователя может потребоваться подтверждение источника происхождения денежных средств по совершаемым операциям.
                    </p>                  
                </div>
            </div>
        </div>
    )
}

export default HelpPage