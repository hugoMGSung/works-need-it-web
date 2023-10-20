﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApiServer.Models
{
    public class TodoItem
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName ="Varchar(100)")]
        public string? Title { get; set; }

        // DateTime to string
        public string TodoDate { get; set; }
        // boolean to int
        public int IsComplete { get; set; }

    }
}
