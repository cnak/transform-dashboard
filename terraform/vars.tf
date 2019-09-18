variable "access_key" {
  description = "aws access key"
}

variable "secret_key" {
  description = "aws secret key"
}

variable "region" {
  default = "eu-west-1"
}

variable "az_count" {
  description = "Number of availability zones to cover in a given AWS region"
  default     = "2"
}

variable "image" {
  description = "Docker image to run in the ECS cluster"
}

variable "port" {
  description = "Port exposed by the docker image to redirect traffic to"
}

variable "desired_count" {
  description = "Number of docker containers to run"
  default     = "2"
}

variable "cpu" {
  description = "Fargate instance CPU units to provision (1 vCPU = 1024 CPU units)"
  default     = "256"
}

variable "memory" {
  description = "Fargate instance memory to provision (in MiB)"
  default     = "512"
}

variable "bucket" {
  default = "aws-github-actions"
}

provider "aws" {
  version    = ">= 1.47.0"
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"

  region = "${var.region}"
}

terraform {
  backend "s3" {
    encrypt = true

    # Path to write state to.
    key = "terraform.github.state/dashboard"
  }
}
