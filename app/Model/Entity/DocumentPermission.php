<?php

namespace W7\App\Model\Entity;

class DocumentPermission extends BaseModel {
	const MANAGER_PERMISSION = 1;
	const OPERATOR_PERMISSION = 2;
	const READER_PERMISSION = 3;

	protected $table = 'document_permission';

	public function save(array $options = []) {
		if (in_array($this->permission, [self::MANAGER_PERMISSION, self::OPERATOR_PERMISSION, self::READER_PERMISSION])) {
			return parent::save($options);
		}

		return false;
	}

	public function document() {
		return $this->hasOne(Document::class, 'id', 'document_id');
	}

	/**
	 * 判断用户是否有读该文档权限
	 * @return bool
	 */
	public function hasRead() {
		return $this->permission == self::READER_PERMISSION || $this->permission == self::OPERATOR_PERMISSION || $this->permission == self::MANAGER_PERMISSION;
	}

	/**
	 * 判断用户是否有删除该文档权限
	 * @return bool
	 */
	public function hasDelete() {
		return $this->permission == self::MANAGER_PERMISSION;
	}

	/**
	 * 判断用户是否有编辑该文档权限
	 * @return bool
	 */
	public function hasEdit() {
		return $this->permission == self::MANAGER_PERMISSION || $this->permission == self::OPERATOR_PERMISSION;
	}

	/**
	 * 判断用户是否有管理该文档权限
	 * @return bool
	 */
	public function hasManage() {
		return $this->permission == self::MANAGER_PERMISSION;
	}

	public function user() {
		return $this->hasOne(User::class, 'id', 'user_id');
	}
}