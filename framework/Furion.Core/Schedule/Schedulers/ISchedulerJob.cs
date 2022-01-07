﻿// Copyright (c) 2020-2022 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.

namespace Furion.Schedule;

/// <summary>
/// 作业调度器依赖接口
/// </summary>
public interface ISchedulerJob
{
    /// <summary>
    /// 查看最早触发时间
    /// </summary>
    /// <returns><see cref="DateTime"/></returns>
    DateTime? GetEarliestNextRunTime();

    /// <summary>
    /// 开始作业调度器
    /// </summary>
    void Start();

    /// <summary>
    /// 暂停作业调度器
    /// </summary>
    void Pause();
}