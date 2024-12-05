import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
        <div className="screen-max-width">
            <div>
                <p className="font-semibold text-gray text-xs">
                    Дополнительные способы совершения покупок: {' '}
                <span className="underline text-blue">
                    Найдите Apple Store {' '}
                </span>
                    или {' '}
                <span className="underline text-blue">
                    другую розничную сеть
                </span>{' '}
                    рядом с вами.
                </p>
                <p className="font-semibold text-gray text-xs">
                    Или позвоните 8 (777) 865 0565
                </p>
            </div>
            <div className="bg-neutral-700 my-5 h-[1px] w-full" />

            <div className="flex md:flex-row flex-col md:items-center justify-between">
                <p className="font-semibold text-gray text-xs">
                Copright @ 2024 Apple Inc. Все права защищены.
                </p>

                <div className="flex">
                    {footerLinks.map((link, i) => (
                       <p key={link} className="font-semibold text-gray text-xs">
                        {link}{' '}
                        {i !== footerLinks.length - 1 && (
                            <span className="mx-2"> | </span>
                        )}
                       </p> 
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer