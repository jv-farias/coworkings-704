import { Separator } from "@/components/ui/separator"
import logoCoworking from "../../../assets/logo.png"
import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const AdminHome = () => {
    return (
        <div className="flex justify-between h-screen w-screen" >
            <div className="w-[12.5%] flex flex-col bg-gray-600 items-center">
                <img className=" p-8" src={logoCoworking} alt="Logo Coworking" />
                <Separator className="bg-gray-400" />
                <div className="flex items-center flex-col px-6 py-4 w-[100%] gap-4" >
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList className="flex flex-col w-full">
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account</CardTitle>
                                    <CardDescription>
                                        Make changes to your account here. Click save when you're done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        
                                    </div>
                                    <div className="space-y-1">
                                        
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>
                                        Change your password here. After saving, you'll be logged out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                      
                                    </div>
                                    <div className="space-y-1">
                                        
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>

                </div>
            </div>
            <div className="w-[87.5%] bg-gray-500"></div>
        </div>
    )
}