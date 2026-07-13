import {
	ActivityIcon,
	AwardIcon,
	BookOpenIcon,
	BusIcon,
	CheckIcon,
	HeartIcon,
	LayersIcon,
	type LucideIcon,
	ShieldCheckIcon,
	SunIcon,
	TrophyIcon,
	UsersIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
	activity: ActivityIcon,
	award: AwardIcon,
	"book-open": BookOpenIcon,
	bus: BusIcon,
	check: CheckIcon,
	heart: HeartIcon,
	layers: LayersIcon,
	"shield-check": ShieldCheckIcon,
	sun: SunIcon,
	trophy: TrophyIcon,
	users: UsersIcon,
};

export const getProgramIcon = (name?: string): LucideIcon =>
	(name && ICONS[name]) || CheckIcon;
