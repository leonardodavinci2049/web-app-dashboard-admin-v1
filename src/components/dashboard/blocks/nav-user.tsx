"use client";

import {
  IconBell,
  IconChevronDown,
  IconLifebuoy,
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

import ModeToggle from "@/components/theme/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  return (
    <div className="flex items-center gap-2">
      {/* Mode Toggle */}
      <ModeToggle />

      {/* Notification Bell */}
      <Button variant="ghost" size="icon" className="relative h-9 w-9">
        <IconBell className="h-5 w-5" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-orange-500" />
      </Button>

      {/* User Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 px-2 hover:bg-accent"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="hidden text-sm font-medium sm:inline-block">
              {user.name.split(" ")[0]}
            </span>
            <IconChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64" align="end" sideOffset={8}>
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex flex-col space-y-0.5 px-3 py-3">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <IconUser className="mr-2 h-4 w-4" />
              <span>Edit profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <IconSettings className="mr-2 h-4 w-4" />
              <span>Account settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <IconLifebuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 dark:text-red-400 dark:focus:text-red-400">
            <IconLogout className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
