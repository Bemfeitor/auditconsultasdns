CREATE TABLE `clients` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`personType` enum('juridica','fisica') NOT NULL,
	`cnpjCpf` varchar(18) NOT NULL,
	`razaoSocialNome` text NOT NULL,
	`regimeTributario` enum('simples_nacional','lucro_presumido','lucro_real','mei','isento'),
	`inscricaoEstadual` varchar(50),
	`emails` text,
	`whatsapps` text,
	`active` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `clients_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `declarations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int NOT NULL,
	`processId` int,
	`declarationType` enum('pgdas','pgmei','dctfweb','fgts_digital','defis','dirf') NOT NULL,
	`referenceMonth` int,
	`referenceYear` int NOT NULL,
	`declared` boolean NOT NULL DEFAULT false,
	`declarationDate` timestamp,
	`protocolNumber` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `declarations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `digitalCertificates` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int NOT NULL,
	`certificateName` varchar(255),
	`issuer` varchar(255),
	`serialNumber` varchar(100),
	`issueDate` timestamp,
	`expirationDate` timestamp NOT NULL,
	`status` enum('integrado','a_vencer','atencao') NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `digitalCertificates_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ecacMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int NOT NULL,
	`messageTitle` text NOT NULL,
	`messageContent` text,
	`messageDate` timestamp NOT NULL,
	`read` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `ecacMessages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `fiscalProcesses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int NOT NULL,
	`processType` enum('pgdas','pgmei','dctfweb','fgts_digital','parcelamentos','certidoes','caixas_postais','defis','dirf') NOT NULL,
	`referenceMonth` int,
	`referenceYear` int NOT NULL,
	`status` enum('em_dia','pendente','atencao') NOT NULL DEFAULT 'pendente',
	`dueDate` timestamp,
	`completedDate` timestamp,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fiscalProcesses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `fiscalReports` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int NOT NULL,
	`reportType` varchar(100) NOT NULL,
	`reportTitle` varchar(255) NOT NULL,
	`reportContent` text,
	`referenceMonth` int,
	`referenceYear` int NOT NULL,
	`fileUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fiscalReports_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`clientId` int,
	`title` varchar(255) NOT NULL,
	`description` text,
	`processType` varchar(50),
	`read` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `procuracoes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int NOT NULL,
	`tipo` varchar(100),
	`numero` varchar(100),
	`dataEmissao` timestamp,
	`dataValidade` timestamp,
	`status` enum('ativa','vencida','revogada') NOT NULL DEFAULT 'ativa',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `procuracoes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rbt12Sublimits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientId` int NOT NULL,
	`referenceYear` int NOT NULL,
	`rbt12Value` decimal(15,2),
	`sublimitValue` decimal(15,2),
	`status` enum('dentro','proximo','excedido') NOT NULL DEFAULT 'dentro',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rbt12Sublimits_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `schedules` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`scheduleType` enum('das_simples','das_mei','parcelamentos','dctfweb','declaracoes') NOT NULL,
	`dayOfMonth` int NOT NULL,
	`active` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `schedules_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`numeroDisparo` varchar(50),
	`emailDisparo` varchar(320),
	`certificadoDigitalId` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `settings_id` PRIMARY KEY(`id`)
);
