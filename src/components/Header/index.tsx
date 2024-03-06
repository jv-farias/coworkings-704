import { HomeIcon, LogInIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import logoCoworking from "../../assets/logo.png"


export const Header = () => {
    return (
        <Card className="w-full bg-cyan-600 rounded-b-md rounded-t-none border-none" >
            <CardContent className="p-5 flex justify-between items-center flex-row">
                <a href="/" >
                    <img src={logoCoworking} alt="" className="w-[120px]" />
                </a>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <MenuIcon size={16} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Olá, faça seu login!</SheetTitle>
                            <SheetDescription className="flex flex-col gap-3" >
                                <div className="flex flex-col gap-3 ">
                                    <Button variant="outline" className="justify-start" asChild>
                                        <a href="/login">
                                            <LogInIcon size={18} className="mr-2" />
                                            Fazer Login
                                        </a>
                                    </Button>
                                </div>
                                <div className="flex flex-col gap-3 ">
                                    <Button variant="outline" className="justify-start" asChild>
                                        <a href="/">
                                            <HomeIcon size={18} className="mr-2" />
                                            Início
                                        </a>
                                    </Button>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;